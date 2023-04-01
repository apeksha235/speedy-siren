// // export default GraphComponent;
// import React, { useState } from 'react';
// import Graph from 'react-graph-vis';

// const options = {
//   layout: {
//     randomSeed: 1,
//     nodeDistance: 250,
//   },
//   physics: {
//     enabled: false,
//     repulsion: {
//       //nodeDistance: 700,
//     },

//   },
//   edges: {
//     arrows: {
//       to: {
//         enabled: false,
//       },
//     },
//     color: '#000000',
//     width: 80,
//   },
//   nodes: {
//     borderWidth: 0,
//     borderWidthSelected: 0,
//     shape: 'square',
//     size: 20,
//     color: {
//       background: 'red'
//     },
//   },
// };

// const GraphComponent = () => {
//   const [graphData, setGraphData] = useState(getInitialGraph());
//   //const [targetNodes, setTargetNodes] = useState(['7,0', '7,1', '7,2', '7,3', '7,4', '6,4', '6,5', '6,6', '5,6', '5,7', '4,7', '3,7', '2,7']);
//   const [targetNodes, setTargetNodes] = useState(['7,0', '7,1', '7,2', '7,3', '7,4', '6,4', '6,5', '6,6', '5,6', '5,7', '4,7', '3,7', '2,7']);
//   const [currentNode, setCurrentNode] = useState(null);
//   function getInitialGraph() {
//     const nodes = [];
//     for (let row = 1; row <= 10; row++) {
//       for (let col = 1; col <= 10; col++) {
//         const id = `${row},${col}`;
//         const label = (id === '3,4') ? 'hospital' : id;
//         const color =  (Math.random() < 0.5 ? 'red' : 'green');


//         const node = {
//           id,
//           label,
//           x: col * 350,
//           y: row * 350,
//           size: 50,
//           color: {
//             background: color,
//           },
//           font: {
//             color: 'lightblue',
//             size: (id === '3,4') ? 100 : 14, // increase font size for hospital label
//             face: 'arial',
//           },
//           visited: false,
//         };
//         if (id === '4,2' || id==='7,5' || id==='8,7' || id==='9,3'|| id==='6,7'|| id==='8,9'|| id==='5,5'|| id==='3,8') {
//           node.icon = {
//             face: 'FontAwesome',
//             code: '\uf0fd',
//             size: 100,
//             color: 'yellow',
//           };
//         }
//         nodes.push(node);
//       }
//     }

//     const edges = [];
//     for (let row = 1; row <= 10; row++) {
//       for (let col = 1; col <= 10; col++) {
//         const from = `${row},${col}`;
//         const toRight = `${row},${col + 1}`;
//         const toDown = `${row + 1},${col}`;
//         edges.push({ from, to: toRight });
//         edges.push({ from, to: toDown });
//       }
//     }

//     return { nodes, edges };
//   }

//   // function getUpdatedQuadrants(quadrants) {
//   //   return quadrants.map((_, index) => (index === 0 ? 'green' : 'red'));
//   // }
//   function traverseGraph() {
//     const startNode = '7,0';
//     const endNode = '2,7';
//     const nodes = graphData.nodes.map((node) => ({
//       ...node,
//       distance: node.id === startNode ? 0 : Infinity,
//       visited: false,
//     }));
//     const edges = graphData.edges.map((edge) => ({
//       ...edge,
//       weight: 1, //here we change the weights
//     }));
  
// const GraphComponent = () => {    
//   const [graphData, setGraphData] = useState(getInitialGraph());
//   //const [currentNode, setCurrentNode] = useState('3,1');
//   const [targetNodes, setTargetNodes] = useState(['3,1', '4,1', '5,2', '6,2', '7,3', '8,4', '9,5', '9,6', '9,7', '9,8']);

//   function getInitialGraph() {
//     const nodes = [];
//     for (let row = 1; row <= 10; row++) {
//         for (let col = 1; col <= 10; col++) {
//         const id = `${row},${col}`;
//         // const color = Math.random() < 0.5 ? "red" : "green";
//         nodes.push({
//             id,
//             label: id,
//             x: col * 100,
//             y: row * 100,
//             size: 30,
//             color:{
//               background: (node) => {
//                 const quadrantSize = node.size / 2;
//                 const x = node.x;
//                 const y = node.y;
//                 const quadrantX = Math.floor((x - node.size / 2) / quadrantSize);
//                 const quadrantY = Math.floor((y - node.size / 2) / quadrantSize);
        
//                 // Randomly assign either green or red to the quadrants
//                 if (Math.random() < 0.5) {
//                   return quadrantX === 0 && quadrantY === 0 || quadrantX === 1 && quadrantY === 1
//                     ? 'green'
//                     : 'red';
//                 } else {
//                   return quadrantX === 0 && quadrantY === 1 || quadrantX === 1 && quadrantY === 0
//                     ? 'green'
//                     : 'red';
//                 }
//               },
//             visited: false,
//             }  
//           });
//       }
    
//     }
  
//     const edges = [];
//     for (let row = 1; row <= 9; row++) {
//       for (let col = 1; col <= 9; col++) {
//         const from = `${row},${col}`;
//         const toRight = `${row},${col + 1}`;
//         const toDown = `${row + 1},${col}`;
//         edges.push({ from, to: toRight });
//         edges.push({ from, to: toDown });
//       }
//     }
  
//     return { nodes, edges };
//   }

//   function traverseGraph() {
//     const startNode = '3,1';
//     const endNode = '9,8';
//     const nodes = graphData.nodes.map((node) => ({
//       ...node,
//       distance: node.id === startNode ? 0 : Infinity,
//       visited: false,
//     }));
//     const edges = graphData.edges.map((edge) => ({
//       ...edge,
//       weight: 1,
//     }));
//     let current = startNode;
  
//     const timer = setInterval(() => {
//       if (current === endNode) {
//         clearInterval(timer);
//         return;
//       }
  
//       const currentIdx = nodes.findIndex((node) => node.id === current);
//       const currentDist = nodes[currentIdx].distance;
//       const currentEdges = edges.filter((edge) => edge.source === current);
//       currentEdges.forEach((edge) => {
//         const targetIdx = nodes.findIndex((node) => node.to === edge.to);
//         const targetDist = nodes[targetIdx].distance;
//         const newDist = currentDist + edge.weight;
//         if (newDist < targetDist) {
//           nodes[targetIdx].distance = newDist;
//           nodes[targetIdx].previous = current;
//         }
//       });
//       nodes[currentIdx].visited = true;
//       const unvisitedNodes = nodes.filter((node) => !node.visited);
//       const unvisitedDistances = unvisitedNodes.map((node) => node.distance);
//       const minDistance = Math.min(...unvisitedDistances);
//       const closestNode = unvisitedNodes.find((node) => node.distance === minDistance);
//       current = closestNode.id;
  
//       const newGraphData = {
//         nodes: nodes.map((node) => ({
//           ...node,
//           color: {
//             background: targetNodes && targetNodes.includes(node.id) ? 'green' : {},
//           },
//         })),
//         edges: edges,
//       };
//       setGraphData(newGraphData);
//     }, 1000);
//   }
  
  

//   return (
//     <div>
//       <button onClick={traverseGraph}>Traverse Graph</button>
//       <Graph
//   graph={graphData}
//   options={options}
//   style={{ height: '500px' }}
// />
//     </div>
//   );
// };

// export default GraphComponent;

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
        //1, node.visited
        //2, node.id === current
        let backgroundColor;
        if (node.id === current && targetNodes.includes(node.id)) {
          backgroundColor = 'yellow';
        } else if ( node.visited && targetNodes.includes(node.id)) {
          backgroundColor = 'green';
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