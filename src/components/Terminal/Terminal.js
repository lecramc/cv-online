import "./Terminal.css";

import React, { Component } from "react";
import Terminal from "react-console-emulator";

const commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },
  about: {
    description: "Short description about me.",
    usage: "about",
    fn: () =>
      "My name is Clément, I'm 23 years old. \n I live in Bordeaux and I am Software Developper. ",
  },
  course: {
    description: "My course",
    usage: "courses",
    fn: () =>
      "2019/2021 - Software Developper \n => Formation BAC +2 \n CESI Apprenticeship | Bordeaux",
  },
};
const styles = {
  maxHeight: "400px",
  maxWidth: "720px",
  margin: "10% auto",
  backgroundColor: "#3f3d3d",
};

class MyTerminal extends Component {
  render() {
    return (
      <Terminal
        style={styles}
        commands={commands}
        welcomeMessage={"Welcome to my home ! "}
        promptLabel={<strong>clement@marcel:~$</strong>}
        promptLabelStyle={{ color: "#7cd697" }}
        inputTextStyle={{ color: "#ffc50a" }}
      />
    );
  }
}
export default MyTerminal;
