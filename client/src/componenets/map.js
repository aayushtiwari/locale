import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  constructor() {
    super();
    var state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: this.props.data.sLat, lng: this.props.data.sLon }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"starting point"}
          position={{ lat: this.props.data.sLat, lng: this.props.data.sLon }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"end point"}
          position={{ lat: this.props.data.eLat, lng: this.props.data.eLon }}
        />
        <InfoWindow
          marker={() => this.state.activeMarker}
          visible={() => this.state.showingInfoWindow}
          onClose={() => this.onClose}
        >
          <div>
            <h4>works</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCcnJzrSWJdEOh6bHaY9bWKnkliWzHmSwc"
})(MapContainer);
