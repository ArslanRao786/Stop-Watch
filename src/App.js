//libs
import React, { Component } from "react";

//src
import "./App.css";
import Timer from "./Timer/Timer";
import Actions from "./Actions/Actions";
import LogTable from "./LogTable/LogTable";
import SplitTimer from "./SplitTimer/SplitTimer";
import { EVENTS } from "./constants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
      logs: [],
      timerTime: 0
    };
  }

  render() {
    const { timerTime, logs, timerOn } = this.state;
    let centiseconds = ("00" + (Math.floor(timerTime) % 1000)).slice(-3);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    let time = ` ${hours} : ${minutes} : ${seconds} : ${centiseconds}`;
    return (
      <div className="container">
        <div className="stopWatch">
          <Timer
            timerOn={timerOn}
            time={timerTime}
            setTime={newTime => this.setState(() => ({ timerTime: newTime }))}
          />

          {
            <SplitTimer
              data={logs.filter(log => log.action === EVENTS.SPLIT)}
            />
          }

          <Actions
            timerOn={timerOn}
            addLogEntry={actionType =>
              this.setState({
                logs: [...this.state.logs, { action: actionType, time: time }]
              })
            }
            handleStart={() => this.setState({ timerOn: true })}
            handleStop={() => this.setState({ timerOn: false })}
            handleReset={() => this.setState({ timerOn: false })}
          />
          <p>____________________________________________</p>

          <LogTable data={logs} />
        </div>
      </div>
    );
  }
}

export default App;
