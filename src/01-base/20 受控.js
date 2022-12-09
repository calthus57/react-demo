import React, { Component } from 'react'

export default class App20 extends Component {
  state={
    username:""
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.username} value={this.state.username} onChange={(evt)=>{
           this.setState({
            username:evt.target.value
           })
        }}></input>
        <button>提交</button>
        <button onClick={()=>{
          this.setState({
            username:""
          })
        }}>重置</button>
      </div>
    )
  }
}
