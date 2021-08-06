import "./Tutorial.css";

import { Component } from "react";
import { Steps, Step } from "react-step-builder";
import { Button, Box } from "@material-ui/core";

const Navigation = (props) => {
  return (
    <div>
      {" "}
      {props.isLast !== true && (
        <Button id="next" onClick={props.next}>
          Next
        </Button>
      )}
    </div>
  );
};

const config = {
  navigation: {
    component: Navigation,
    location: "after",
  },
};
class Tutorial extends Component {
  render() {
    return (
      <Box class="tutorial">
        <Steps config={config}>
          <Step component={Step1} />
          <Step component={Step2} />
          <Step component={Step3} />
        </Steps>
      </Box>
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
