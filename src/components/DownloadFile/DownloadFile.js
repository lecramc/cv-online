import { Component } from "react";
import { Button, Box, makeStyles } from "@material-ui/core";
import pdf from "../../files/CV Clément MARCEL G.pdf";

const useStyles = makeStyles((themes) => ({
  box: {
    width: "100%",
    textAlign: "center",
  },
  download: {
    color: "#000",
    backgroundColor: "#fff",
    padding: "10px",
    marginBottom: "5px",
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
          No time to play :
          <a href={pdf} download>
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
