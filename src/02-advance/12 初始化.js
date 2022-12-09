import React, { Component } from 'react'

export default class App12 extends Component {
  state={
    info:""
  }
  componentWillMount() {
    // 挂载前最后一次修改状态机会
    console.log("will")
    this.setState({
      info:"额为邱琦雯日期"
    })
  }

  componentDidMount() {
    console.log("did")
    // 可以数据请求axios
  }
  render() {
    // render中setState会导致死循环
    // 基于创建完dom之后进行的操作 如BetterScroll
    console.log("render")
    return (
      <div>{this.state.info}</div>
    )
  }
}
