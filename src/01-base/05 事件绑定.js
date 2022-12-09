import React, { Component } from 'react'

export default class App5 extends Component {
  render() {
    return (
      <div>
        <input></input>
        <button onClick={this.handleClick}>add</button>
      </div>
    )
  }

  handleClick(){
    console.log("dsa")
  }

  
}
