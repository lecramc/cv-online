import "./Terminal.css";

import React, { Component } from "react";
import Terminal from "react-console-emulator";
import CoursesTemplate from "../Templates/CoursesTemplate";
import ExperiencesTemplate from "../Templates/ExperiencesTemplate";
import data from "../../json/data.json"

const commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },
  about: {
    description: "Short description about me.",
    usage: "about",
    fn: () => data.about
  },
  courses: {
    description: "My course",
    usage: "courses",
    fn: () => (
      <div>
        <CoursesTemplate
          date="2019/2021"
          what="Software Developper"
          formation="=> Fromation BAC +2"
          where="CESI Apprenticeship | Bordeaux, Gironde"
        />
        <CoursesTemplate
          date="2017/2019"
          what="BTS SNEC"
          formation="Electronic and Digital System"
          where="CFAI Aquitaine | Bruges, Gironde"
        />
      </div>
    ),
  },
  xp: {
    description: "My Experiences",
    usage: "experiences",
    fn: () => (
      <div>
        <ExperiencesTemplate
          date="2019-2021"
          company="WININFO"
          type="(Alternance)"
        />
        <ExperiencesTemplate
          date="2017-2019"
          company="CENOV' Sécurité"
          type="(Alternance)"
        />
        <ExperiencesTemplate
          date="2017 (2 mois)"
          company="Centre Hospitalier Arcachon"
          type="(Stage)"
        />
        <ExperiencesTemplate
          date="2016 (1 mois)"
          company="Isis Médical"
          type="(Stage)"
        />
        <ExperiencesTemplate
          date="2016 (2 mois)"
          company="SYDEC"
          type="(Stage)"
        />
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
