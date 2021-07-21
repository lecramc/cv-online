import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Terminal from "react-console-emulator";

const commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },
};

class MyTerminal extends Component {
  render() {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={"Welcome to the React terminal!"}
        promptLabel={"clement@marcel:~$"}
      />
    );
  }
}
export default MyTerminal;
