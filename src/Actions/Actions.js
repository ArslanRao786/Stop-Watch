//libs
import React, { Component } from "react";
import PropTypes from "prop-types";

//src
import "./Actions.css";
import { EVENTS } from "../constants";

class Actions extends Component {
  render() {
    const {
      timerOn,
      handleStart,
      handleReset,
      handleStop,
      addLogEntry
    } = this.props;
    if (timerOn === false) {
      return (
        <div className="buttons">
          <button
            id="start"
            onClick={() => {
              handleStart();
              addLogEntry(EVENTS.START);
            }}
          >
            Start
          </button>
          <button disabled>Split</button>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      );
    } else {
      return (
        <div className="buttons">
          <button
            id="stop"
            onClick={() => {
              handleStop();
              addLogEntry(EVENTS.PAUSE);
            }}
          >
            Pause
          </button>
          <button
            id="split"
            onClick={() => {
              addLogEntry(EVENTS.SPLIT);
            }}
          >
            Split
          </button>
          <button onClick={handleReset} disabled>
            Reset
          </button>
        </div>
      );
    }
  }
}

Actions.propTypes = {
  timerOn: PropTypes.bool.isRequired,
  addLogEntry: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default Actions;
