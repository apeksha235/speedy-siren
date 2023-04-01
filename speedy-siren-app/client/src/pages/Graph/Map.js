import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-vis';

const options = {
  layout: {
    randomSeed: 1,
    nodeDistance: 250,
  },
  physics: {
    enabled: false,
    repulsion: {
      //nodeDistance: 700,
    },

  },
  edges: {
    arrows: {
      to: {
        enabled: false,
      },
    },
    color: '#000000',
    width: 80,
  },
  nodes: {
    borderWidth: 0,
    borderWidthSelected: 0,
    shape: 'square',
    size: 20,
    color: {
      background: 'red'
    },
  },
};

const GraphComponent = () => {

  const [graphData, setGraphData] = useState(getInitialGraph());
  //const [targetNodes, setTargetNodes] = useState(['7,0', '7,1', '7,2', '7,3', '7,4', '6,4', '6,5', '6,6', '5,6', '5,7', '4,7', '3,7', '2,7']);
  const [targetNodes, setTargetNodes] = useState(['7,0', '7,1', '7,2', '7,3', '7,4', '6,4', '6,5', '6,6', '5,6', '5,7', '4,7', '3,7', '2,7']);
  const [currentNode, setCurrentNode] = useState(null);
  function getInitialGraph() {
    const nodes = [];
    for (let row = 1; row <= 10; row++) {
      for (let col = 1; col <= 10; col++) {
        const id = `${row},${col}`;
        const color =  (Math.random() < 0.5 ? 'red' : 'green');
        nodes.push({
          id,
          label: id,
          x: col * 350,
          y: row * 350,
          size: 50,
          color: {
            background: color,
          },
          visited: false,
        });
      }
    }

    const edges = [];
    for (let row = 1; row <= 10; row++) {
      for (let col = 1; col <= 10; col++) {
        const from = `${row},${col}`;
        const toRight = `${row},${col + 1}`;
        const toDown = `${row + 1},${col}`;
        edges.push({ from, to: toRight });
        edges.push({ from, to: toDown });
      }
    }

    return { nodes, edges };
  }

  // function getUpdatedQuadrants(quadrants) {
  //   return quadrants.map((_, index) => (index === 0 ? 'green' : 'red'));
  // }
  function traverseGraph() {
    const [row, setRowData] = useState(null);
    const [column, setColData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3002/get-data');
          setRowData(response.data.row);
          setColData(response.data.col);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    const startNode = '7,0';
    const endNode = '2,7';
    const nodes = graphData.nodes.map((node) => ({
      ...node,
      distance: node.id === startNode ? 0 : Infinity,
      visited: false,
    }));
    const edges = graphData.edges.map((edge) => ({
      ...edge,
      weight: 1, //here we change the weights
    }));
  
    let index = 0;
  
    const timer = setInterval(() => {
      const current = targetNodes[index];
  
      if (current === endNode || index >= targetNodes.length) {
        clearInterval(timer);
        return;
      }
  
      const updatedNodes = nodes.map((node) => {
        if (node.id === current) {
          node.visited = true;
        }
  
        let backgroundColor;
        if (node.visited && targetNodes.includes(node.id)) {
          backgroundColor = 'green';
        } else if (targetNodes.includes(node.id) && node.id === current) {
          backgroundColor = 'yellow';
        } else {
          backgroundColor = 'red';
        }
  
        return {
          ...node,
          color: {
            background: backgroundColor,
          },
        };
      });
  
      setGraphData({
        nodes: updatedNodes,
        edges: edges,
      });
  
      index++;
    }, 1000);
  }

  return (
    <div>
      <button onClick={traverseGraph}>Traverse Graph</button>
      <Graph
        graph={graphData}
        options={options}
        style={{ height: '800px' }}
        // options={{
        //   ...options,
        //   nodes: {
        //     ...options.nodes,
        //     color: {
        //       //background: getNodeColor(node)
        //       background: (node) => {
        //         const index = graphData.nodes.findIndex((n) => n.id === node.id);
        //         const quadrants = graphData.nodes[index].quadrants;
        //         const size = node.size;
        //         const ctx = document.createElement('canvas').getContext('2d');
        //         ctx.canvas.width = size;
        //         ctx.canvas.height = size;

        //         quadrants.forEach((color, i) => {
        //           ctx.fillStyle = color;
        //           ctx.fillRect((i % 2) * (size / 2), Math.floor(i / 2) * (size / 2), size / 2, size / 2);
        //         });

        //         return ctx.canvas.toDataURL();
        //       },
        //     },
        //   },
        // }}
        //style={{ height: '500px' }}
      />
    </div>
  );
};

export default GraphComponent;