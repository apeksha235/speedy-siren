import React, { useState } from 'react';
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Graph from './pages/Graph/Map';



class App extends React.Component {
  render() {
    const blockStyles = [
      null, null, null, null, null,
      null, null, null, null, null,
      null, { backgroundColor: 'red' }, null, null, null,
      null, null, null, null, null,
      null, null, null, null, { backgroundColor: 'blue' },
    ];

    const path = [11, 12, 17, 22, 23, 24];

    return (
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </Router>
      </div>
    );
  }
}

export default App;
//import React from 'react';
//import GridMap from './GridMap';
//import { animatePath } from './animation';

// const ROWS = 5;
// const COLUMNS = 5;
// // const BLOCK_SIZE = 50;
// // const GRID_GAP = 10;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       path: null
//     };
//   }

//   handleClick(fromBlock, toBlock) {
//     const roadStyles = this.generateRoadStyles(fromBlock, toBlock);
//     const roadStylesArray = [];
//     for (const key in roadStyles) {
//       roadStylesArray.push(roadStyles[key]);
//     }
//     animatePath(fromBlock, toBlock, roadStylesArray);
//   }
  

//   render() {
//     const { path } = this.state;
//     const roadStyles = {};

//     if (path) {
//       // Set the style of each road in the path
//       for (let i = 0; i < path.length - 1; i++) {
//         const currentBlock = path[i];
//         const nextBlock = path[i + 1];
//         const isHorizontal = currentBlock % COLUMNS !== nextBlock % COLUMNS;

//         if (isHorizontal) {
//           const row = Math.floor(currentBlock / COLUMNS);
//           const columnStart = Math.min(currentBlock % COLUMNS, nextBlock % COLUMNS);
//           const columnEnd = Math.max(currentBlock % COLUMNS, nextBlock % COLUMNS);
//           for (let j = columnStart; j <= columnEnd; j++) {
//             roadStyles[`${row}-${j}-${row + 1}-${j}`] = { backgroundColor: 'yellow' };
//           }
//         } else {
//           const column = currentBlock % COLUMNS;
//           const rowStart = Math.min(Math.floor(currentBlock / COLUMNS), Math.floor(nextBlock / COLUMNS));
//           const rowEnd = Math.max(Math.floor(currentBlock / COLUMNS), Math.floor(nextBlock / COLUMNS));
//           for (let j = rowStart; j <= rowEnd; j++) {
//             roadStyles[`${j}-${column}-${j}-${column + 1}`] = { backgroundColor: 'yellow' };
//           }
//         }
//       }
//     }

//     return (
//       <div>
//         <GridMap
//           blockStyles={{ 0: { backgroundColor: 'green' }, 24: { backgroundColor: 'red' } }}
//           roadStyles={roadStyles}
//           fromBlock={0}
//           toBlock={24}
//           onClick={this.handleClick}
//         />
//       </div>
//     );
//   }
// }

// export default App;

