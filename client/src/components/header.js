import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { Layout } from "antd";
const { Header } = Layout;

class header extends Component {
  state = {};
  render() {
    return (
      <Header>
        <Link to="/" className="header">
          Locale.ai
        </Link>
        <Link to="/doc" className="docn">
          Docs
        </Link>
      </Header>
    );
  }
}

export default header;
