import "./Terminal.css";

import React, { Component } from "react";
import Terminal from "react-console-emulator";
import CoursesTemplate from "../Templates/CoursesTemplate";
import ExperiencesTemplate from "../Templates/ExperiencesTemplate";
import data from "../../json/data.json";

class MyTerminal extends Component {
  constructor(props) {
    super(props);
    this.terminal = React.createRef();
  }
  styles = {
    maxWidth: "920px",
    minHeight: "520px",
    margin: "auto",
    backgroundColor: "#3f3d3d",
  };
  commands = {
    about: {
      description: "A short description about me",
      fn: () => {
        this.clearTerminal();
        return (
          <div>
            <h2> | About me | </h2>
            <p>{data.about.me}</p>
            <p>{data.about.who}</p>
            <p>{data.about.why}</p>
          </div>
        );
      },
    },
    studies: {
      description: "My studies since 4 years",
      fn: () => {
        this.clearTerminal();
        return (
          <div>
            <h2> | Studies |</h2>

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
        );
      },
    },
    xp: {
      description: "My professional experiences",
      fn: () => {
        this.clearTerminal();
        return (
          <div>
            <h2> | Professional Experiences |</h2>

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
        );
      },
    },
    interests: {
      description: "My Interests and what I love in my life",
      fn: () => {
        this.clearTerminal();
        return (
          <div>
            <h2> | Interests | </h2>
            {data.interests.map((el) => (
              <p>{el.value}</p>
            ))}
          </div>
        );
      },
    },
    contact: {
      description: "How to contact me ? ",
      fn: () => {
        this.clearTerminal();
        return (
          <div>
            <h2> | Contact |</h2>
            <p>
              <strong>Phone : </strong>
              {data.contact.phone}
            </p>
            <p>
              <strong>Mail : </strong>
              {data.contact.mail}
            </p>
            <p>
              <strong>LinkedIn : </strong>{" "}
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here{" "}
              </a>
            </p>
            <p>
              <strong>GitHub : </strong>
              <a
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </p>
            <p>
              <strong>GitLab : </strong>{" "}
              <a
                href={data.contact.gitlab}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </p>
          </div>
        );
      },
    },
    hardskills: {
      description: "The things I'm good at",
      fn: () => {
        this.clearTerminal();
        return (
          <div>
            <h2> | Hard Skills |</h2>
            {data.hard.map((el) => (
              <p>
                <strong>{el.title}</strong>
                <br />
                {el.value}
              </p>
            ))}
          </div>
        );
      },
    },
    softskills: {
      description: "My personality traits",
      fn: () => {
        this.clearTerminal();
        return (
          <div>
            {" "}
            <h2> | Soft Skills |</h2>
            {data.soft.map((el) => (
              <p>{el.value}</p>
            ))}
          </div>
        );
      },
    },
  };

  clearTerminal() {
    const terminal = this.terminal.current;
    terminal.clearStdout();
  }
  render() {
    return (
      <Terminal
        ref={this.terminal}
        style={this.styles}
        commands={this.commands}
        welcomeMessage={"Welcome to my home ! "}
        promptLabel={<span class="promptLabel">clement@marcel:~$</span>}
        inputTextStyle={{ color: "#ffc50a" }}
        ignoreCommandCase
        autofocus
      />
    );
  }
}
export default MyTerminal;
