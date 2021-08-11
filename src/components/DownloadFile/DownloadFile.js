import { Component } from "react";
import { Button, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((themes) => ({
  box: {
    width: "100%",
  },
  download: {
    color: "#77b287",
    backgroundColor: "#fff",
    padding: "10px",
    textAlign: "center",
  },
}));

class DownloadFile extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;
  }
  render() {
    return (
      <Box className={this.classes.box}>
        <Button className={this.classes.download}>
          <a href="" download>
            Download my Curriculum Vitae
          </a>
        </Button>
      </Box>
    );
  }
}
export default () => {
  const classes = useStyles();
  return <DownloadFile classes={classes} />;
};
