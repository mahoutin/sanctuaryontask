import React, { Component } from "react";

export default class Text extends Component {
  state = {
    countries: []
  };

  addcountry() {
    this.setState({ countries: [...this.state.countries, ""] });
  }
  handleChange(e, index) {
    this.setState.countries[index] = e.target.value;

    this.setState({ countries: this.state.countries });
  }

  handleRemove(index){
      // remove an item at the index
      this.state.countries.splice(index,1)
    // upadte the state
      this.setState({countries:this.state.countries})
      
  }

  render() {
    return (
      <div>
        {this.state.countries.map((country, index) => {
          return (
            <div key={index}>
              <input
                onChange={e => this.handleChange(e, index)}
                value={country}
              />
              <button onClick={()=>this.handleRemove(index)}>Remove</button>
            </div>
          );
        })}

        <button onClick={e => this.addcountry(e)}>Add</button>
      </div>
    );
  }
}
