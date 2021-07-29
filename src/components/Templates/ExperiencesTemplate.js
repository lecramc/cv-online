import { Component } from "react";

class ExperiencesTemplate extends Component {
  constructor(props) {
    super(props);
    this.date = props.date;
    this.company = props.company;
    this.type = props.type;
  }
  render() {
    return (
      <div>
        <p>
          <strong>
            {this.date} | {this.company}{" "}
          </strong>
          {this.type}
        </p>
      </div>
    );
  }
}
export default ExperiencesTemplate;
