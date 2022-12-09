import React, { Component } from 'react'

export default class App20 extends Component {
  state ={
    name:"ddd"
  }
  static getDerivedStateFromProps(nextProps,nextState) {
    console.log(nextState)
    // 与原state合并
    return {
      text:"321321",
      name:nextState.name+"大撒大撒"
    }
  }

  render() {
    return (
      <div>
        {this.state.name+this.state.text}
      </div>
    )
  }
}
