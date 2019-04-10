import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import "./App.css";
import Form from "./componenets/form";
import Show from "./componenets/show";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Form} />
        <Route exact path="/show" component={Show} />
      </div>
    </Router>
  );
}

export default App;
