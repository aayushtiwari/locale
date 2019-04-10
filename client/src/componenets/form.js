import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class Form extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handelSubmit = this.handelSubmit.bind(this);
  // }

  render() {
    return (
      <div>
        <form action="/file" method="post" enctype="multipart/form-data">
          <label for="">file</label>
          <input type="file" name="data" />
          <button method="submit">submit</button>
          <Link to="/show">show</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(Form);
