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
const styles = {
  maxHeight: "300px",
  maxWidth: "720px",
  margin: "10% auto",
};

class MyTerminal extends Component {
  render() {
    return (
      <Terminal
        style={styles}
        commands={commands}
        welcomeMessage={"Welcome to my home !"}
        promptLabel={"clement@marcel:~$"}
      />
    );
  }
}
export default MyTerminal;
