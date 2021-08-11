import { Component } from "react";
import { Steps, Step } from "react-step-builder";
import { Button, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((themes) => ({
  tutorial: {
    [themes.breakpoints.down("md")]: {
      width: "auto",
      height: "auto",
      padding: "5px",
      marginBottom: "5px",
    },
    [themes.breakpoints.up("md")]: {
      width: "30vw",
      height: "auto",
      marginLeft: "10px",
      padding: "10px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    backgroundColor: "white",
    borderRadius: "10px",
  },
  next: {
    color: "#000",
    backgroundColor: "#77b287",
  },
  list: {
    paddingLeft: "50px",
  },
}));
class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
  }
  Step1 = (props) => {
    return (
      <div>
        <h3>Welcome to the Curriculum Vitae of Clément MARCEL.</h3>
        <p>This is a little introduction for use and understand my CV.</p>
        {props.hasNext() && (
          <Button className={this.classes.next} onClick={props.next}>
            Next
          </Button>
        )}
      </div>
    );
  };
  Step2 = (props) => {
    return (
      <div>
        <h3>This is a terminal like a linux bash or cmd in Windows.</h3>
        <p>You need to use command line for have information about me.</p>
        {props.hasNext() && (
          <Button className={this.classes.next} onClick={props.next}>
            Next
          </Button>
        )}
      </div>
    );
  };
  Step3 = (props) => {
    return (
      <div>
        <p>
          To use the terminal, you will find a list of commands to get to know
          me better with the <strong>help</strong> command.
        </p>
      </div>
    );
  };
  render() {
    return (
      <Box className={this.classes.tutorial}>
        <Steps>
          <Step component={this.Step1} />
          <Step component={this.Step2} />
          <Step component={this.Step3} />
        </Steps>
      </Box>
    );
  }
}

export default () => {
  const classes = useStyles();
  return <Tutorial classes={classes} />;
};
