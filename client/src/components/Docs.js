import React, { Component } from "react";
import { Row, Col } from "antd";

class Docs extends Component {
  state = {};
  render() {
    return (
      <div className="docs">
        <Col
          xs={{ span: 22, offset: 1 }}
          lg={{ span: 20, offset: 2 }}
          className="docsc"
        >
          <Row>
            <h1>Documentation</h1>
          </Row>
          <Row>
            <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
              <h2>about</h2>
              <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
                <p>
                  a react based application which uses csv file for getting
                  location data form the user about shows results from the user
                  provided that and renders map using the data and also provides
                  with visualization for better representation of data in the
                  form of charts.
                </p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
              <h2>packages used</h2>
              <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
                <p>
                  <span>-></span>body-parser
                </p>
                <p>
                  <span>-></span>concuttently
                </p>
                <p>
                  <span>-></span>express
                </p>
                <p>
                  <span>-></span>fast-csv
                </p>
                <p>
                  <span>-></span>multer
                </p>
                <p>
                  <span>-></span>react
                </p>
                <p>
                  <span>-></span>react-router-dom
                </p>
                <p>
                  <span>-></span>antd
                </p>
                <p>
                  <span>-></span>axios
                </p>
                <p>
                  <span>-></span>react-dom
                </p>
                <p>
                  <span>-></span>react-dropzone
                </p>
                <p>
                  <span>-></span>react-map-gl
                </p>
                <p>
                  <span>-></span>react-vis
                </p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
              <h2>installation</h2>
              <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
                <p>run => npm install</p>
                <p>followed by => npm dev</p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
              <h2>usage</h2>
              <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
                <p>open a browser and go to localhost:3000</p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
              <h2>workflow</h2>
              <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
                <p>
                  i started with creating a node server with multer package to
                  handle files upload and used csvtojson to conver csv upload to
                  json format then i started setting react in the front end and
                  using dropbox to send files in react frontend to backend then
                  the data is send to front end after conversion and cleaning
                  then i use the library react-vis for making charts for data
                  visualization and used react-map-gl for rendering map in front
                  end.
                </p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
              <h2>creator</h2>
              <Col xs={{ span: 23, offset: 1 }} lg={{ span: 23, offset: 1 }}>
                <p>aayush tiwari</p>
              </Col>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Docs;
