import React, { Component } from "react";
import { Card } from "antd";
import { withRouter } from "react-router-dom";

class Cardcase extends Component {
  state = {};
  change() {
    this.props.history.push("/map");
  }
  render() {
    return (
      <div className="visc">
        <h1>
          <span>Car Cancelation Patern</span>
        </h1>
        <p>
          <span>X&nbsp; :&nbsp; </span>lat
        </p>
        <p>
          <span>Y&nbsp; :&nbsp; </span>long
        </p>
        <p>
          <span>Color&nbsp; :&nbsp; </span>online booking
        </p>
        <p>
          <span>Size&nbsp; :&nbsp; </span>travel type id
        </p>
        <p>
          <span>Opacity&nbsp; :&nbsp; </span>car cancelation
        </p>
        <button onClick={() => this.change()}>Map</button>
      </div>
    );
  }
}
export default withRouter(Cardcase);
