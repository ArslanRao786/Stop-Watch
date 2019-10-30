//libs
import React, { Component } from "react";
import PropTypes from "prop-types";

//src
import "./SplitTimer.css";

class SplitTimer extends Component {
  render() {
    const { data } = this.props;
    return data.map(item => (
      <div id="splitFormatter">
        <td>{item.time}</td>
      </div>
    ));
  }
}

SplitTimer.propTypes = {
  timerOn: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  setTime: PropTypes.func.isRequired
};

export default SplitTimer;
