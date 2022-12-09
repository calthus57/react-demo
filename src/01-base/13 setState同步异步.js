import React, { Component } from 'react'

export default class App13 extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          }, () => {
            // setState第二个参数回调函数里,状态已经更新完
            console.log(this.state.count)
            this.setState({
              count: this.state.count + 1
            }, () => {
              // setState第二个参数回调函数,状态更新完后触发
              console.log(this.state.count)
            })
          })
          this.setState({
            count: this.state.count + 1
          }, () => {
            console.log(this.state.count)
          })
          this.setState({
            count: this.state.count + 1
          }, () => {
            console.log(this.state.count)
          })
        }}>add</button>
      </div>
    )
  }
}
