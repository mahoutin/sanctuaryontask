import React from 'react'
import 'C:/Users/hooty/Desktop/sanctuaryontask/src/App.css'

const userInput = (props) =>{
    return (
        <div>
            <input className="userIn" type="text" onChange={props.changed} value={props.name} ></input>
        </div>
    )
}
export default userInput