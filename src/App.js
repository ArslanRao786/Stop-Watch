//libs
import React, { Component } from "react";

//src
import "./App.css";
import Timer from "./Timer/Timer";
import Actions from "./Actions/Actions";
import LogTable from "./LogTable/LogTable";
import SplitTimer from "./SplitTimer/SplitTimer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
      logs: [],
      timerTime: 0,
      splitTimer: []
    };
  }

  render() {
    const { timerTime, logs, timerOn, splitTimer } = this.state;
    return (
      <div className="container">
        <div className="stopWatch">
          <Timer
            timerOn={timerOn}
            time={timerTime}
            setTime={newTime => this.setState(() => ({ timerTime: newTime }))}
          />

          <SplitTimer splitLog={splitTimer} />

          <Actions
            timerOn={timerOn}
            addLogEntry={actionType => {
              if (actionType === "Split") {
                this.setState({
                  logs: [
                    ...this.state.logs,
                    { action: actionType, time: timerTime }
                  ],
                  splitTimer: [{ action: actionType, time: timerTime }]
                });
              } else {
                this.setState({
                  logs: [
                    ...this.state.logs,
                    { action: actionType, time: timerTime }
                  ]
                });
              }
            }}
            handleStart={() => this.setState({ timerOn: true })}
            handleStop={() => this.setState({ timerOn: false })}
            handleReset={() =>
              this.setState({ timerOn: false, splitTimer: [] })
            }
          />

          <LogTable data={logs} />
        </div>
      </div>
    );
  }
}

export default App;
