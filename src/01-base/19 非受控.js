import React, { Component } from 'react'

export default class App19 extends Component {
  username=React.createRef()
  render() {
    return (
      <div>
        <input type="text" ref={this.username} defaultValue="dsa"></input>
        <button>提交</button>
        <button onClick={()=>{
          this.username.current.value=""
        }}>重置</button>
      </div>
    )
  }
}
