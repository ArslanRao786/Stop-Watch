//libs
import React, { Component } from "react";
import PropTypes from "prop-types";

//src
import prettyPrintTime from "../Utils/Utils";
import "./SplitTimer.css";

class SplitTimer extends Component {
  render() {
    const { splitLog } = this.props;
    return splitLog.map(item => (
      <div id="splitFormatter">
        <td>{prettyPrintTime(item.time)}</td>
      </div>
    ));
  }
}

SplitTimer.propTypes = {
  splitLog: PropTypes.array.isRequired
};

export default SplitTimer;
