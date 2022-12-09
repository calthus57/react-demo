import React, { Component } from 'react'

export default class App6 extends Component {
  a = 1
  render() {
    return (
      <div>
        <input></input>
        {/* 这种写法需要绑定this */}
        <button onClick={this.handleClick.bind(this)}>add</button>
        <button onClick={() => {
          console.log("dsa", this.a)
        }}>add2</button>
      </div>
    )
  }

  handleClick() {
    console.log("dsa", this.a)
  }


}
