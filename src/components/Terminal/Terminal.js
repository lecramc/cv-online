import "./Terminal.css";

import React, { Component } from "react";
import Terminal from "react-console-emulator";
import CoursesTemplate from "../Templates/CoursesTemplate";
import ExperiencesTemplate from "../Templates/ExperiencesTemplate";
import data from "../../json/data.json";

const commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },
  about: {
    description: "Short description about me.",
    usage: "about",
    fn: () => data.about,
  },
  courses: {
    description: "My course",
    usage: "courses",
    fn: () => (
      <div>
        {data.courses.map((el) => (
          <CoursesTemplate
            key={el.id}
            date={el.date}
            what={el.what}
            formation={el.formation}
            where={el.where}
          />
        ))}
      </div>
    ),
  },
  xp: {
    description: "My Experiences",
    usage: "experiences",
    fn: () => (
      <div>
        {data.xp.map((el) => (
          <ExperiencesTemplate
            key={el.id}
            date={el.date}
            company={el.company}
            type={el.type}
            tasks={el.tasks.value}
          />
        ))}
      </div>
    ),
  },
};
const styles = {
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
        promptLabel={"clement@marcel:~$"}
        promptLabelStyle={{ color: "#7cd697" }}
        inputTextStyle={{ color: "#ffc50a" }}
      />
    );
  }
}
export default MyTerminal;
