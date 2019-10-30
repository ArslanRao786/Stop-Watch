import React, { Component } from "react";
import "./LogTable.css";

class LogTable extends Component {
  render() {
    const { data } = this.props;
    return data.map((item, i) => (
      <div id="width">
        {item.action === "Start" && (
          <div className="formatting" key={i}>
            <td>#{i}</td>
            <td id="timeColorStart">{item.time}</td>
            <td>{item.action}</td>
          </div>
        )}
        {item.action === "Pause" && (
          <div className="formatting" key={i}>
            <td>#{i}</td>
            <td id="timeColorPause">{item.time}</td>
            <td>{item.action}</td>
          </div>
        )}
        {item.action === "Split" && (
          <div className="formatting" key={i}>
            <td>#{i}</td>
            <td id="timeColorSplit">{item.time}</td>
            <td>{item.action}</td>
          </div>
        )}
      </div>
    ));
  }
}

export default LogTable;
