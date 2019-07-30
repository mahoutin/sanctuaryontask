import React, { Component } from "react";
import moment from "moment";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  currentDate() {
    this.setState({
      date: new Date()
    });
  }
  componentWillMount() {
    setInterval(() => this.currentDate(), 1000);
  }
  render() {
    const today = this.state.currentDate;
    const date = moment(today).format("h:mm ");
    return <div className="date">{date}</div>;
  }
}
