import React, { Component } from "react";
import "./App.css";
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponents";

class App extends Component {
  state = {
    result: ""
  };

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    let checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }
    // Try lets you test a block of code for errors
    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      });
      // catch lest you handle the error
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1> Simple Calculator </h1>
          <ResultComponent result={this.state.result} />

          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
