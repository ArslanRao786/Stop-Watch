// libs
import React, { Component } from "react";
import PropTypes from "prop-types";

//src
import prettyPrintTime from "../Utils/Utils";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timerStart: 0
    };
  }

  componentDidUpdate(prevProps) {
    const { timerOn } = this.props;
    if (timerOn === true && prevProps.timerOn === false) {
      this.startTimer();
    } else if (timerOn === false && prevProps.timerOn === true) {
      this.stopTimer();
    } else if (timerOn === false && prevProps.timerOn === false) {
      this.resetTimer();
    }
  }

  startTimer = () => {
    const { setTime, time } = this.props;

    this.setState(() => {
      return { timerStart: Date.now() - time };
    });
    this.timer = setInterval(() => {
      const { timerStart } = this.state;
      setTime(Date.now() - timerStart);
    }, 1);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  resetTimer = () => {
    const { setTime, time } = this.props;
    if (time > 0) {
      setTime(0);
      this.setState({
        timerStart: 0
      });
    }
  };
  render() {
    const { time } = this.props;

    return (
      <div>
        <h1>{prettyPrintTime(time)}</h1>
      </div>
    );
  }
}

Timer.propTypes = {
  timerOn: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  setTime: PropTypes.func.isRequired
};

export default Timer;
