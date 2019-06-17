// Step 1 - Import the React and ReactDOM libraries - since we are using react - then we are using the bundler / webpack
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = { text: "Click Me!" };
  const labelText = "Enter name:";

  //Instead of using a function keyword, we can re-written using ES 2015 the arrow function () =>
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  ); // return the jsx components
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
