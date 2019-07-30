import React, { Component } from 'react'

export default class Text2 extends Component {
   constructor(props){
       super(props)
       this.state ={
           fullname: ""
       }
   }
   
   
    handlenameSubmit = (event) => {
       event.preventDefault()
       const data = this.state
       console.log("final data is", data)

   }

   handleInputChange = (event) =>{
       this.setState({
        //    fullname: event.target.value
        [event.target.name]: event.target.value
       })

   }

    render() {
        const {fullname} = this.state
        return (
            <div>
                <h1>Form and Inputs</h1>
                <form onSubmit={this.handlenameSubmit}> 
                    <p><input type="text"  placeholder="your name" name="fullname" onChange={this.handleInputChange}  /></p>
                    <p><button>send Message</button></p>
                </form>
                
            </div>
        )
    }
}
