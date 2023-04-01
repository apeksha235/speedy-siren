// export default GraphComponent;
// import React, { useState } from 'react';
// import Graph from 'react-graph-vis';

// const options = {
//   layout: {
//     randomSeed: 1,
//     nodeDistance: 200,
//   },
//   physics: {
//     enabled: false,
//     repulsion: {
//       nodeDistance: 700,
//     },

//   },
//   edges: {
//     arrows: {
//       to: {
//         enabled: false,
//       },
//     },
//     color: '#000000',
//     width: 50,
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
//   const [targetNodes, setTargetNodes] = useState(['3,1', '4,1', '5,2', '6,2', '7,3', '8,4', '9,5', '9,6', '9,7', '9,8']);

//   function getInitialGraph() {
//     const nodes = [];
//     for (let row = 1; row <= 10; row++) {
//       for (let col = 1; col <= 10; col++) {
//         const id = `${row},${col}`;
//         const color =  (Math.random() < 0.5 ? 'red' : 'green');
//         nodes.push({
//           id,
//           label: id,
//           x: col * 350,
//           y: row * 350,
//           size: 50,
//           color: {
//             background: color,
//           },
//           visited: false,
//         });
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
//       //nodes[currentIdx].quadrants = getUpdatedQuadrants(nodes[currentIdx].quadrants);
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
//         graph={graphData}
//         options={{
//           ...options,
//           nodes: {
//             ...options.nodes,
//             color: {
//               background: (node) => {
//                 const index = graphData.nodes.findIndex((n) => n.id === node.id);
//                 const quadrants = graphData.nodes[index].quadrants;
//                 const size = node.size;
//                 const ctx = document.createElement('canvas').getContext('2d');
//                 ctx.canvas.width = size;
//                 ctx.canvas.height = size;

//                 quadrants.forEach((color, i) => {
//                   ctx.fillStyle = color;
//                   ctx.fillRect((i % 2) * (size / 2), Math.floor(i / 2) * (size / 2), size / 2, size / 2);
//                 });

//                 return ctx.canvas.toDataURL();
//               },
//             },
//           },
//         }}
//         style={{ height: '500px' }}
//       />
//     </div>
//   );
// };

// export default GraphComponent;
import React, { useState } from 'react';
import Graph from 'react-graph-vis';

const options = {
  layout: {
    randomSeed: 1,
    nodeDistance: 200,
  },
  physics: {
    enabled: false,
    repulsion: {
      nodeDistance: 700,
    },

  },
  edges: {
    arrows: {
      to: {
        enabled: false,
      },
    },
    color: '#000000',
    width: 50,
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
  const [targetNodes, setTargetNodes] = useState(['3,1', '4,1', '5,2', '6,2', '7,3', '8,4', '9,5', '9,6', '9,7', '9,8']);

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
            size: 100,
            color: 'yellow',
          };
        }
        nodes.push(node);
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
    const startNode = '3,1';
    const endNode = '9,8';
    const nodes = graphData.nodes.map((node) => ({
      ...node,
      distance: node.id === startNode ? 0 : Infinity,
      visited: false,
    }));
    const edges = graphData.edges.map((edge) => ({
      ...edge,
      weight: 1,
    }));
    let current = startNode;

    const timer = setInterval(() => {
      if (current === endNode) {
        clearInterval(timer);
        return;
      }

      const currentIdx = nodes.findIndex((node) => node.id === current);
      //nodes[currentIdx].quadrants = getUpdatedQuadrants(nodes[currentIdx].quadrants);
      nodes[currentIdx].visited = true;
      const unvisitedNodes = nodes.filter((node) => !node.visited);
      const unvisitedDistances = unvisitedNodes.map((node) => node.distance);
      const minDistance = Math.min(...unvisitedDistances);
      const closestNode = unvisitedNodes.find((node) => node.distance === minDistance);
      current = closestNode.id;

      const newGraphData = {
        nodes: nodes.map((node) => ({
          ...node,
          color: {
            background: targetNodes && targetNodes.includes(node.id) ? 'green' : {},
          },
        })),
        edges: edges,
      };
      setGraphData(newGraphData);
    }, 1000);
  }

  return (
    <div>
      <button onClick={traverseGraph}>Traverse Graph</button>
      <Graph
        graph={graphData}
        options={{
          ...options,
          nodes: {
            ...options.nodes,
            color: {
              background: (node) => {
                const index = graphData.nodes.findIndex((n) => n.id === node.id);
                const quadrants = graphData.nodes[index].quadrants;
                const size = node.size;
                const ctx = document.createElement('canvas').getContext('2d');
                ctx.canvas.width = size;
                ctx.canvas.height = size;

                quadrants.forEach((color, i) => {
                  ctx.fillStyle = color;
                  ctx.fillRect((i % 2) * (size / 2), Math.floor(i / 2) * (size / 2), size / 2, size / 2);
                });

                return ctx.canvas.toDataURL();
              },
            },
          },
        }}
        style={{ height: '700px' }}
      />
    </div>
  );
};

export default GraphComponent;