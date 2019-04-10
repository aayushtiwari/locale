import React, { Component } from "react";
import axios from "axios";
import Maps from "./map";
var work;
var result;
var items;
class Show extends Component {
  constructor() {
    super();
    this.state = {
      lat: [],
      sLat: "",
      sLon: "",
      eLat: "",
      eLon: "",
      show: false
    };
    this.requestDone = this.requestDone.bind(this);
    this.stateUpdate = this.stateUpdate.bind(this);
  }

  showMap() {
    this.requestDone();
    this.setState({ show: true });
  }
  requestDone() {
    var working = this.stateUpdate;
    var { sLat, sLon, eLat, eLon } = this.state;
    axios.get("/result").then(function(res) {
      items = res.data.map(e => {
        if (
          e.from_lat > sLat &&
          eLat < e.to_lat &&
          sLon < e.from_long &&
          eLon > e.to_long
        ) {
          return e.vehicle_model_id;
        }
      });
      items = items.filter(function(element) {
        return element !== undefined;
      });
      working(items);
    });
  }
  stateUpdate(dat) {
    this.setState({ lat: dat });
  }
  handleChangeLats(event) {
    this.setState({ sLat: event.target.value });
  }
  handleChangeLons(event) {
    this.setState({ sLon: event.target.value });
  }
  handleChangeLate(event) {
    this.setState({ eLat: event.target.value });
  }
  handleChangeLone(event) {
    this.setState({ eLon: event.target.value });
  }
  render() {
    let greeting;
    if (this.state.show) {
      greeting = <Maps data={this.state} />;
    } else {
      greeting = <h2>loading</h2>;
    }

    return (
      <div>
        {/* <select>
          {this.state.lat.map((option, key) => (
            <option key={key}>{option}</option>
          ))}
        </select> */}
        <label htmlFor="">start lat</label>
        <input
          type="text"
          value={this.state.sLat}
          onChange={e => {
            this.handleChangeLats(e);
          }}
        />
        <label htmlFor="">start long</label>
        <input
          type="text"
          value={this.state.sLon}
          onChange={e => {
            this.handleChangeLons(e);
          }}
        />
        <label htmlFor="">end lat</label>
        <input
          type="text"
          value={this.state.eLat}
          onChange={e => {
            this.handleChangeLate(e);
          }}
        />
        <label htmlFor="">end lon</label>
        <input
          type="text"
          value={this.state.eLon}
          onChange={e => {
            this.handleChangeLone(e);
          }}
        />
        <button onClick={e => this.showMap(e)}>map</button>
        {greeting}
      </div>
    );
  }
}

export default Show;
