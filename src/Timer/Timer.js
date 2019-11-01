// libs
import React, { Component } from "react";
import PropTypes from "prop-types";

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
    let centiseconds = ("00" + (Math.floor(time) % 1000)).slice(-3);
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);

    return (
      <div>
        <h1>
          {hours} : {minutes} : {seconds} : {centiseconds}
        </h1>
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
