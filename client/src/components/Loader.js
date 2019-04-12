import React, { Component } from "react";
import { Spin, Icon } from "antd";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Loader extends Component {
  state = {};
  render() {
    return <Spin indicator={antIcon} />;
  }
}

export default Loader;
