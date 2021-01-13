import React, { Component } from "react";
import buttonEasy from "/src/easy.png";
import buttonMedium from "./medium.png";
import buttonHard from "./hard.png";
import "./styles.css";

// const [box, setBox] = useState(3);
// const [grid, setGrid] = useState(gameLevels());

// class gameLevels extends Component {
  // componentDidMount() {}
  // componentDidUpdate() {}
  // componentWillUnmount() {}
  // function gameLevels() {
  //   return Array.from({ length: box }, () =>
  //   Array.from({ length: box }, () => null)
  // );

function Buttons() {

  // render() {
    return (
      <div className="levels">
        <div id="column1">
          <img src={buttonEasy} alt="1" />
        </div>
        <div id="column2">
          <img src={buttonMedium} alt="2" />
        </div>
        <div id="column3">
          <img src={buttonHard} alt="3" />
        </div>
      </div>
    );
  }

export default Buttons;

  // }

// export default gameLevels;
//{
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
