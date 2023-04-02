import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-vis';
import axios from 'axios';


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
  const [targetNodes, setTargetNodes] = useState(['7,0', '7,1', '7,2', '7,3', '7,4', '6,4', '6,5', '6,6', '5,6', '5,7', '4,7', '3,7', '3,8']);
  const [currentNode, setCurrentNode] = useState(null);
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
  function getInitialGraph() {
    const nodes = [];
    for (let row = 1; row <= 10; row++) {
      for (let col = 1; col <= 10; col++) {
        const id = `${row},${col}`;
        const label = (id === '3,4') ? 'hospital' : id;
        const color =  (Math.random() < 0.5 ? 'red' : 'green');
        
        const node = {
          id,
          label,
          x: col * 350,
          y: row * 350,
          size: 50,
          color: {
            background: color,
          },
          font: {
            color: 'lightblue',
            size: (id === '3,4') ? 100 : 14, // increase font size for hospital label
            face: 'arial',
          },
          visited: false,
        };
        if (id === '4,2' || id==='7,5' || id==='8,7' || id==='9,3'|| id==='6,7'|| id==='8,9'|| id==='5,5'|| id==='3,8') {
          node.icon = {
            face: 'FontAwesome',
            code: '\uf0fd',
            size: 150,
            color: 'yellow',
          };
        }
        nodes.push(node);
        // nodes.push({
        //   id,
        //   label: id,
        //   x: col * 350,
        //   y: row * 350,
        //   size: 50,
        //   color: {
        //     background: color,
        //   },
        //   visited: false,
        // });
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
  function traverseGraph(row,column) {
    const startNode = `${row},${column}`;
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
        //1, node.visited
        //2, node.id === current
        let backgroundColor;
        if (node.id === current && targetNodes.includes(node.id)) {
          backgroundColor = 'yellow';
        } else if ( node.visited && targetNodes.includes(node.id)) {
          backgroundColor = 'green';
        } else {
          backgroundColor = '';
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
      <button onClick={() => traverseGraph(row, column)}>Traverse Graph</button>
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