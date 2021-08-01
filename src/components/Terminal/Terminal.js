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
            task={el.tasks.map((task) => (
              <p>{task.value}</p>
            ))}
          />
        ))}
      </div>
    ),
  },
  interests: {
    description: "My Interests",
    usage: "interests",
    fn: () => data.interests,
  },
  contact: {
    description: "How to contact me",
    usage: "contact",
    fn: () => (
      <div>
        <p>Phone : {data.contact.phone}</p>
        <p>Mail : {data.contact.mail}</p>
        <p>LinkedIn : {data.contact.linkedin}</p>
        <p>GitHub : {data.contact.github}</p>
        <p>GitLab : {data.contact.gitlab}</p>
      </div>
    ),
  },
  hardskills: {
    description: "My Hard Skills",
    usage: "hardskills",
    fn: () => (
      <div>
        {data.hard.map((el) => (
          <p>
            <strong>{el.title}</strong>
            <br />
            {el.value}
          </p>
        ))}
      </div>
    ),
  },
  softskills: {
    description: "My Soft Skills",
    usage: "softskills",
    fn: () => data.soft,
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
        promptLabel={<span class="promptLabel">clement@marcel:~$</span>}
        inputTextStyle={{ color: "#ffc50a" }}
      />
    );
  }
}
export default MyTerminal;
