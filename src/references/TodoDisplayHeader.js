import React, { Component } from 'react'
import Sanctlogo from "../images/sanctlogo.png";

export default class TodoDisplayHeader extends Component {
    render() {
        return (
            
            <thead>
            <tr>
            <p className="logo">
            <img className="Titlelogo" src={Sanctlogo} alt="" />
            <p>Here is your Task List</p>
          </p>
            </tr>
        </thead>
        )
    }
}
