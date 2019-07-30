import React, { Component } from "react";
import "./App.css";
import Sanctlogo from "./images/sanctlogo.png";
import Clock from "./Components/Clock";
import "./add.css";
import PersonalDiplay from "./Components/PersonalDisplay";
//import Text2 from "./references/Text2"
// import TaskView from "./Components/TaskView";
export default class App extends Component {
  render() {
    return (
      <div>
        <ul id="background" className="background">
          <li className="background-item fadein" />
        </ul>
        <div className="background-overlay show" />
        <div className="App">
          <div className="logo">
            <img className="Titlelogo" src={Sanctlogo} alt="" />
          </div>
          <div className="content">
            <div className="app-container clock">
              <div className="defaut-clock">
                <div className="time">
                  <Clock />
                </div>
                <div >
                  <span>Welcome to The Sanctuary On Task</span>
                </div>
              </div>
              <PersonalDiplay />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
