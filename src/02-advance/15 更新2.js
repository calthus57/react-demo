import React, { Component } from 'react'

export default class App15 extends Component {
  state = {
    name: "小明"
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            name: "西西"
          })
        }}>点击</button>
        {this.state.name}
      </div>
    )
  }
  //scu 性能优化
  shouldComponentUpdate(nextProps,nextState){
    // if(this.state.name!==nextState.name){
    //   return true
    // }
    if(JSON.stringify(this.state)!==JSON.stringify(nextState.name)){
      return true
    }
    return false
  }
  componentDidUpdate() {
    console.log("update")
  }
}
