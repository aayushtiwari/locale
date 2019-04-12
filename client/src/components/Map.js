import React, { Component } from "react";
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl
} from "react-map-gl";
import axios from "axios";
import CityPin from "./CityPin";
import { Layout } from "antd";
import CityInfo from "./CityInfo";
import Loader from "./Loader";
import { Row, Col } from "antd";

// import CITIES from "../../data/cities.json";

const TOKEN =
  "pk.eyJ1IjoiYWF5dXNodGl3YXJpIiwiYSI6ImNqdWM1ajJpdzAza20zeXJ5dzA5YTkxcHUifQ._Q_ngvs4Oeo1z-UewRfioA"; // Set your mapbox token here

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100vw",
        height: "90vh",
        latitude: 12.99313,
        longitude: 77.59828,
        zoom: 11,
        bearing: 0,
        pitch: 0
      },
      citid: null,
      popupInfo: null
    };
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={Number(city.from_long)}
        latitude={Number(city.from_lat)}
        captureClick={true}
      >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={Number(popupInfo.from_long)}
          latitude={Number(popupInfo.from_lat)}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }
  componentDidMount() {
    axios
      .get("/result")
      .then(data => {
        this.setState({ citid: data.data });
      })
      .catch(err => {
        console.log("error");
        console.log(err);
      });
  }

  render() {
    const { viewport } = this.state;

    return (
      <Row>
        <MapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
        >
          {this.state.citid ? (
            this.state.citid.map(this._renderCityMarker)
          ) : (
            <Loader />
          )}

          {this._renderPopup()}
          <div className="fullscreen" style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>

          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={this._updateViewport} />
          </div>
        </MapGL>
      </Row>
    );
  }
}
