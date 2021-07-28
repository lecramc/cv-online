import { Component } from "react";

class CoursesTemplate extends Component {
  constructor(props) {
    super(props);
    this.what = props.what;
    this.formation = props.formation;
    this.where = props.where;
  }
  render() {
    return (
      <div>
        <p>
          <strong>{this.what}</strong>
          <br /> {this.formation}
          <br /> <i>{this.where}</i>
        </p>
      </div>
    );
  }
}
export default CoursesTemplate;
