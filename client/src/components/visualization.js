import React from "react";
import axios from "axios";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  MarkSeriesCanvas,
  Hint,
  RadialChart
} from "react-vis";
import Loader from "./Loader";
import Card from "./Card";
import Cardpie from "./Cardpie";
import { Row, Col } from "antd";

function getRandomData() {
  var arr;
  axios
    .get("/result")
    .then(data => {
      arr = data.data.map(i => ({
        x: i.from_lat,
        y: i.from_long,
        color: i.online_booking,
        opacity: i.Car_Cancellation,
        size: i.travel_type_id
      }));
    })
    .catch(err => {
      console.log("error");
      console.log(err);
    });
  return arr;
}
const colorRanges = {
  typeA: ["#59E4EC", "#0D676C"],
  typeB: ["#EFC1E3", "#B52F93"]
};

const randomData = getRandomData();
const nextType = {
  typeA: "typeB",
  typeB: "typeA"
};

const nextModeContent = {
  canvas: "SWITCH TO SVG",
  svg: "SWITCH TO CANVAS"
};

const drawModes = ["canvas", "svg"];

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      drawMode: 0,
      data: null,
      colorType: "typeA",
      value: false,
      pie: null
    };
  }
  componentDidMount() {
    var m = 0;
    var o = 0;
    axios
      .get("/result")
      .then(data => {
        var arr = data.data.map(i => {
          if (i.online_booking > 0) {
            m++;
          } else if (i.mobile_site_booking > 0) {
            o++;
          }
          var op;
          if (i.Car_Cancellation == "0") {
            op = 0.1;
          } else {
            op = i.Car_Cancellation;
          }
          return {
            x: i.from_lat,
            y: i.from_long,
            color: i.online_booking,
            opacity: op,
            size: i.travel_type_id / 3
          };
        });
        this.setState({ data: arr });
        this.setState({ pie: (m / arr.length) * 360 });
      })
      .catch(err => {
        console.log("error");
        console.log(err);
      });
  }
  render() {
    var { data } = this.state;
    const { drawMode, data, colorType } = this.state;
    const markSeriesProps = {
      animation: true,
      className: "mark-series-example",
      sizeRange: [5, 15],
      seriesId: "my-example-scatterplot",
      colorRange: colorRanges[colorType],
      opacityType: "literal",
      data,
      onNearestXY: value => this.setState({ value })
    };

    const mode = drawModes[drawMode];
    return (
      <div className="container">
        <Row className="container1" align="middle" type="flex">
          <Col
            xs={{ span: 22, offset: 1 }}
            lg={{ span: 15, offset: 1 }}
            className="vis"
          >
            {this.state.data ? (
              <div className="canvas-wrapper">
                <XYPlot
                  width={1000}
                  height={500}
                  onMouseLeave={() => this.setState({ value: false })}
                >
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  {mode === "canvas" && (
                    <MarkSeriesCanvas {...markSeriesProps} />
                  )}
                  {mode === "svg" && <MarkSeries {...markSeriesProps} />}
                  {this.state.value ? <Hint value={this.state.value} /> : null}
                </XYPlot>
              </div>
            ) : (
              <Loader />
            )}
          </Col>
          <Col
            xs={{ span: 22, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
            className="viscard"
          >
            <Card />
          </Col>
        </Row>
        <Row className="container2" align="middle" type="flex">
          >
          <Col
            xs={{ span: 22, offset: 1 }}
            lg={{ span: 6, offset: 2 }}
            className="piec"
          >
            <RadialChart
              className="radial"
              data={[
                {
                  angle: this.state.pie,
                  radius: 5,
                  subLable: "online booking",
                  color: "#9b59b6"
                },
                {
                  angle: 360 - this.state.pie,
                  radius: 5,
                  subLable: "mobile booking",
                  color: "8e44ad"
                }
              ]}
              width={300}
              height={300}
            />
          </Col>
          <Col xs={{ span: 22, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Cardpie />
          </Col>
        </Row>
      </div>
    );
  }
}
