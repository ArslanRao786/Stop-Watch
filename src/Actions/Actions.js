import React, { Component } from "react";
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
          <button id="reset" onClick={this.props.handleReset}>
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

export default Actions;
