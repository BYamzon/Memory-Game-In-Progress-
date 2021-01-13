import React, { Component, useState, useEffect } from "react";
import e1 from "./e1new.png";
import e2 from "./e2new.png";
import e3 from "./e3new.png";
import e4 from "./e4new.png";
import e5 from "./e5new.png";
import e6 from "./e6new.png";
import e7 from "./e7new.png";
import e8 from "./e8new.png";
import "./styles.css";

// import gameLevels from "./App";
const Button = (props) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="row">
      <button
        type="button"
        className={props.className}
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className={show ? "show" : "hide"}>{props.children}</span>
      </button>
    </div>
  );
};

var imagesArray = [
  {
    name: "e1",
    img: e1,
    id: 1
  },
  {
    name: "e2",
    img: e2,
    id: 2
  },
  {
    name: "e3",
    img: e3,
    id: 3
  },
  {
    name: "e4",
    img: e4,
    id: 4
  },
  {
    name: "e5",
    img: e5,
    id: 5
  },
  {
    name: "e6",
    img: e6,
    id: 6
  },
  {
    name: "e7",
    img: e7,
    id: 7
  },
  {
    name: "e8",
    img: e8,
    id: 8
  }
];

// const items = [0, 1, 2, 3, 4, 5, 6, 7];
const createGrid = () => {
  const seen = {};
  const output = [];
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      let randomIdx;
      while (randomIdx === undefined || seen[randomIdx] === 2) {
        randomIdx = Math.floor(Math.random() * imagesArray.length);
      }
      if (seen[randomIdx] === undefined) {
        seen[randomIdx] = 1;
      } else {
        seen[randomIdx]++;
      }
      row.push(imagesArray[randomIdx]);
    }
    output.push(row);
  }
  return output;
};

export default function App() {
  const grid = createGrid();

  const imageMatch = (imagesArray) => {
    if (imagesArray[0] === imagesArray[1]) {
      console.log("it's a match");
      return true;
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Memory Game</h1>
        <h2>Find the matching image pair!</h2>
        {/* <div className="row"> */}
        {grid.map((row, rowIdx) => {
          return (
            // <div key={rowIdx}>
            //       {row.map((value, colIdx) => {
            //         return (

            <div className="row">
              {row.map((value, colIdx) => {
                return (
                  <div className="row">
                    <Button key={colIdx + rowIdx} value={value}>
                      <div className="column">
                        <img
                          src={value.img}
                          alt=""
                          class="center"
                          height="150"
                        />
                      </div>
                    </Button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
    // </div>
  );
}

// return (
//   <div className="App-header">
//     <h1>Memory Game</h1>
//     <h2>Find the matching image pair!</h2>
//     <div className="row">
//     {grid.map((row, rowIdx) =>
//     (
//       <div key={rowIdx}>
//             {row.map((value, colIdx) => (
//               <div className="row">
//                 <Button key={colIdx + rowIdx} value={value}>
//                   <img src={value.img} alt="" class="center" />
//                     </Button>
//                </div>
//             ))}
//       </div>
//     ))}
//   </div>
//   </div>
// );
// }

// // return (
// //   <div className="App">
// //     <header className="App-header">
// //       {grid &&
// //         grid.map((v, i) => {
// //           return (
// //             <div className="row">
// //               {v.map((vc, ic) => {
// //                 return (
// //                   <div className="column" onClick={() => clickHandle(i, ic)}>
// //                     {vc}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           );
// //         })}
// //     </header>
// //   </div>
// // );
// }
