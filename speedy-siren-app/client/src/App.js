import React, { useState } from 'react';
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
// import GridMap from './pages/Home/Graph/Map';
// import {animatePath} from './pages/Home/Graph/animation';

// function App() {
//   // const [location, setLocation] = useState(null);

//   // const getLocation = async () => {
//   //   if (navigator.geolocation) {
//   //     navigator.geolocation.getCurrentPosition(async (position) => {
//   //       const { latitude, longitude } = position.coords;
//   //       setLocation({ lat: latitude, lng: longitude });

//   //       const response = await axios.get('http://localhost:3001/nearest-hospital', {
//   //         params: { lat: latitude, lng: longitude },
//   //       });

//   //       // Process the response and update the UI
//   //       // ...
//   //     });
//   //   } else {
//   //     alert('Geolocation is not supported by this browser.');
//   //   }
//   // };
//   return (
//     <div className="App">
//        <Router>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//       </Routes>
//     </Router>
//     </div>
//   );
// }
//class App extends React.Component {
  // render() {
  //   const blockStyles = [
  //     { backgroundColor: "red" }, // Custom style for the first block
  //     { backgroundColor: "blue" }, // Default style for the second block
  //     { backgroundColor: "green" }, // Default style for the third block
  //     { backgroundColor: "orange" }, // Default style for the fourth block
  //     { backgroundColor: "purple" }, // Default style for the fifth block
  //     { backgroundColor: "gray" }, // Default style for the sixth block
  //     { backgroundColor: "gray" }, // Default style for the seventh block
  //     { backgroundColor: "gray" }, // Default style for the eighth block
  //     { backgroundColor: "gray" }, // Default style for the ninth block
  //     { backgroundColor: "yellow" }, // Custom style for the last block
  //   ];
  //   return (
  //     <div>
  //       <GridMap blockStyles={blockStyles}/>
  //     </div>
  //   );
  // }
//import React from 'react';
//import GridMap from './GridMap';
//____________________________________yellow glow box_______________________
// const path = [0, 6, 7, 8, 13, 18, 19, 24];

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <GridMap path={path} />
//       </div>
//     );
//   }
// }
// export default App;

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

