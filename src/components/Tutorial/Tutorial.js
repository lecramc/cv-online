import "./Tutorial.css";

import { Component } from "react";
import { Steps, Step } from "react-step-builder";

const Navigation = (props) => {
  return (
    <div class="nav">
      <button id="next" onClick={props.next}>
        Next
      </button>
    </div>
  );
};
const config = {
  navigation: {
    component: Navigation,
    location: "after", // or after
  },
};

class Tutorial extends Component {
  render() {
    return (
      <div class="tutorial">
        <Steps config={config}>
          <Step component={Step1} />
          <Step component={Step2} />
          <Step component={Step3} />
        </Steps>
      </div>
    );
  }
}
function Step1(props) {
  return (
    <div>
      <h3>Welcome to the Curriculum Vitae of Clément MARCEL.</h3>
      <p>This is a little introduction for use and understand my CV.</p>
    </div>
  );
}
function Step2(props) {
  return (
    <div>
      <h3>This is a terminal like a linux bash or cmd in Windows.</h3>
      <p>You need to use command line for have information about me.</p>
    </div>
  );
}
function Step3(props) {
  return (
    <div>
      <p>
        For beggining use <strong>Clement --help</strong>, all of commands are
        listed !
      </p>
    </div>
  );
}

export default Tutorial;
