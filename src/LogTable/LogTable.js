//libs
import React, { Component } from "react";
import PropTypes from "prop-types";

//src
import "./LogTable.css";
import prettyPrintTime from "../Utils/Utils";

class LogTable extends Component {
  render() {
    const { data } = this.props;
    const timerColors = action => {
      switch (action) {
        case "Start":
          return "rgb(135, 232, 235)";
        case "Pause":
          return "pink";
        case "Split":
          return "rgb(122, 83, 21)";
        default:
          return "white";
      }
    };
    return data.map((item, i) => (
      <div className="formatting" key={i}>
        <td>#{i}</td>
        <td style={{ color: timerColors(item.action) }}>
          {prettyPrintTime(item.time)}
        </td>
        <td>{item.action}</td>
      </div>
    ));
  }
}

LogTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default LogTable;
