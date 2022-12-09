import React, { Component } from 'react'

export default class App8 extends Component {
  // state = {
  //   prefer:true
  // }
  constructor() {
    super()
    this.state = {
      prefer: true
    }
  }
  render() {
    return (
      <div>
        <h1>dasda</h1>
        <button onClick={() => {
          // 对象合并
          this.setState({
            prefer: !this.state.prefer
          })
        }}>{this.state.prefer ? "收藏" : "取消收藏"}</button>
      </div>
    )
  }
}
