import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Dropzone from "./components/Dropzone";
import Map from "./components/Map";
import Vis from "./components/visualization";
import "mapbox-gl/dist/mapbox-gl.css";
import Header from "./components/header";
import Footerc from "./components/Footer";
import Doc from "./components/Docs";

function App() {
  return (
    <Router>
      <div clas="body">
        <Header />
        <Route exact path="/" component={Dropzone} />
        <Route path="/map" component={Map} />
        <Route path="/vis" component={Vis} />
        <Route path="/doc" component={Doc} />
        <Footerc />
      </div>
    </Router>
  );
}

export default App;
