const express = require('express');
const cors = require('cors');
const axios = require('axios');
const hospitals = require('./hopitals.json');
const app = express();
app.use(cors());
app.use(express.json());

// app.get('/nearest-hospital', async (req, res) => {
//   // Get user's geolocation from query params
//   //const { lat, lng } = req.query;

  // Find the nearest hospital using your preferred algorithm
  // ...
  app.get('/test', (req, res) => {
    res.json({ message: 'Server is working' });
  });
  // Get the shortest path and traffic signal information
  // ...

//   // Return the result as a JSON object
//   //let hospitalData = '[{"id":1,"name":"Hospital A","address":"123 Main Street","longitude":-73.983427,"latitude":40.757896,"ambulances":5},{"id":2,"name":"Hospital B","address":"456 Central Avenue","longitude":-73.991234,"latitude":40.749823,"ambulances":3},{"id":3,"name":"Hospital C","address":"789 Market Street","longitude":-73.975642,"latitude":40.764291,"ambulances":7},{"id":4,"name":"Hospital D","address":"246 Park Lane","longitude":-73.968135,"latitude":40.769852,"ambulances":0},{"id":5,"name":"Hospital E","address":"135 Elm Street","longitude":-74.006851,"latitude":40.743219,"ambulances":6},{"id":6,"name":"Hospital F","address":"369 Oak Street","longitude":-73.964728,"latitude":40.771413,"ambulances":2},{"id":7,"name":"Hospital G","address":"852 Pine Street","longitude":-74.002197,"latitude":40.736683,"ambulances":4},{"id":8,"name":"Hospital H","address":"951 Maple Avenue","longitude":-73.976984,"latitude":40.752449,"ambulances":1},{"id":9,"name":"Hospital I","address":"753 Cedar Street","longitude":-74.010513,"latitude":40.740947,"ambulances":8},{"id":10,"name":"Hospital J","address":"159 Birch Street","longitude":-73.980865,"latitude":40.753986,"ambulances":0}]';
app.post('/find-hospital', (req, res) => {
  // Handle request and return nearest hospital
class Graph {
    constructor() {
      this.nodes = [];
      this.edges = {};
    }
  
    addNode(node) {
      this.nodes.push(node);
      this.edges[node] = {};
    }
  
    addEdge(node1, node2, weight) {
      this.edges[node1][node2] = weight;
      this.edges[node2][node1] = weight;
    }
    dijkstra(startNode, endNode) {
      const distances = {};
      const visitedNodes = [];
      const unvisitedNodes = {};
      const previousNodes = {};
      
      // Initialize distances to all nodes as Infinity, except the starting node
      for (const node of this.nodes) {
        distances[node] = Infinity;
        unvisitedNodes[node] = true;
      }
      distances[startNode] = 0;
      
      // Iterate over unvisited nodes
      while (unvisitedNodes[endNode]) {
        // Get the node with the smallest distance
        let currentNode = null;
        for (const node of this.nodes) {
          if (unvisitedNodes[node] && (currentNode === null || distances[node] < distances[currentNode])) {
            currentNode = node;
          }
        }
        
        // Stop if there's no path to the end node
        if (currentNode === null) {
          break;
        }
        
        // Update distances to neighboring nodes
        for (const neighbor in this.edges[currentNode]) {
          const distance = distances[currentNode] + this.edges[currentNode][neighbor];
          if (distance < distances[neighbor]) {
            distances[neighbor] = distance;
            previousNodes[neighbor] = currentNode;
          }
        }
        
        // Mark the current node as visited
        visitedNodes.push(currentNode);
        delete unvisitedNodes[currentNode];
      }
      
      // Reconstruct the shortest path
      const path = [];
      let currentNode = endNode;
      while (currentNode !== startNode) {
        path.unshift(currentNode);
        currentNode = previousNodes[currentNode];
      }
      path.unshift(startNode);
      
      return { distance: distances[endNode], path };
    }
    getEdges() {
        const edges = [];
        for (const nodeA in this.edges) {
          for (const nodeB in this.edges[nodeA]) {
            edges.push([nodeA, nodeB, this.edges[nodeA][nodeB]]);
          }
        }
        return edges;
    }
  }
  
  // Example usage
  const graph = new Graph();
//   graph.addNode('A');
//   graph.addNode('B');
//   graph.addNode('C');
//   graph.addNode('D');
//   graph.addNode('E');
//   graph.addEdge('A', 'B', 6);
//   graph.addEdge('A', 'D', 1);
//   graph.addEdge('B', 'C', 5);
//   graph.addEdge('B', 'D', 2);
//   graph.addEdge('B', 'E', 2);
//   graph.addEdge('C', 'E', 5);
//   graph.addEdge('D', 'E', 1);
//   const result = graph.dijkstra('A', 'C');
  //console.log(result.distance); // 7
  //console.log(result.path); // ['A', 'D', 'E', 'B', 'C']
  
  //const graph = new Graph();
  const numRows = 9;
  const numCols = 9;
  const nodes = [];
  
  // Create nodes and add them to the graph
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const node = `${i},${j}`;
      nodes.push(node);
      graph.addNode(node);
    }
  }
  
  // Add edges between adjacent nodes in the grid
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const [row, col] = node.split(",").map(Number);
  
    // Add edge to node above
    if (row > 0) {
      const aboveNode = `${row - 1},${col}`;
      const cost = Math.floor(Math.random() * 10) + 1//Math.random() * 10;
      graph.addEdge(node, aboveNode, cost);
    }
  
    // Add edge to node below
    if (row < numRows - 1) {
      const belowNode = `${row + 1},${col}`;
      const cost = Math.floor(Math.random() * 10) + 1//Math.random() * 10;
      graph.addEdge(node, belowNode, cost);
    }
  
    // Add edge to node on the left
    if (col > 0) {
      const leftNode = `${row},${col - 1}`;
      const cost = Math.floor(Math.random() * 10) + 1//Math.random() * 10;
      graph.addEdge(node, leftNode, cost);
    }
  
    // Add edge to node on the right
    if (col < numCols - 1) {
      const rightNode = `${row},${col + 1}`;
      const cost = Math.floor(Math.random() * 10) + 1//Math.random() * 10;
      graph.addEdge(node, rightNode, cost);
    }
  }
function printGraph(graph) {
  const nodes = graph.nodes;
  const edges = graph.getEdges();
  console.log("Nodes:");
  console.log(nodes);

  console.log("Edges:");
  edges.forEach((edge) => {
    const [nodeA, nodeB, cost] = edge;
    console.log(`${nodeA} --(${cost})--> ${nodeB}`);
  });
}
// const temp_array = [];
// for(let i = 0; i < hospitals.length; i++){
//   const loc = '${hospitals[i].x_axis},${hospitals[i].y_axis}';
//   const temp_ans = graph.dijkstra('2,0', loc);
//   temp_array.push(temp_ans);
// }
// console.log('working');
// const nearest_hospital = Math.min(...temp_array);
// //const result = graph.dijkstra('2,0', '4,1');
// console.log(result.distance); // 7
// console.log(result.path);
// console.log(nearest_hospital);


const {row, column } = req.body;
// const row= 1;
// const column=2;
const start = `${row},${column}`;
<<<<<<< HEAD

const result = graph.dijkstra(start, '4,1');
console.log(result.distance); // 7
console.log(result.path);
res.json({ distance: result.distance });
=======
const temp_dist_array = [];
const dict = {};
let key = 0;
let val = [];
for(let i = 0; i <hospitals.length; i++){
  //console.log("len", hospitals.length);
  const r = String(hospitals[i].x_axis);
  const c = String(hospitals[i].y_axis);
  const loc = r.concat(',', c);//${hospitals[i].x_axis},${hospitals[i].y_axis}';
  //console.log("loc",loc);
  const temp_ans = graph.dijkstra(start, loc);
  key = temp_ans.distance;
  val = temp_ans.path;
  console.log("val", val);
  console.log("key", key);
  dict[key] = val;
  console.log(dict);
  //const dist = temp_ans.distance
  //temp_array.push(temp_ans);
}
const firstKey = Object.keys(dict)[0];
console.log(firstKey);
const firstArray = dict[firstKey];
const lastElement = firstArray[firstArray.length - 1];
console.log(lastElement);
let current=1;
for(let i = 0; i <hospitals.length; i++){
  current=i;
  //console.log("len", hospitals.length);
  const r = String(hospitals[i].x_axis);
  const c = String(hospitals[i].y_axis);
  const loc = r.concat(',', c);
  console.log(loc)
  console.log(lastElement)
  if(loc===lastElement){
     break;
    //  temp123=hospitals[i].id;
  }
  else{
    console.log('not working');
  }
}
const temp123=hospitals[current].id;
console.log(temp123);
//const shortest_info = Math.min(...temp_array);
//const nearest_hospital = array.indexOf(shortest_info);
//const result = graph.dijkstra('2,0', '4,1');
//console.log(result); // 7
//console.log(result.path);
//console.log(nearest_hospital);


try{
  res.json({ distance: result.distance });//result.distance
}
catch{
  res.json({ message: 'good job boi!' });
}//result.distance
>>>>>>> 36373361677877c6754e2ecaf3378580aac52fae
// });
});
// const result = graph.dijkstra(start, '4,1');
// console.log(result.distance); // 7
// console.log(result.path);
// res.json({ distance: result.distance });
// // });
// });


const PORT = process.env.PORT ||3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));