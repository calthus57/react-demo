import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>17 更新3</div>
    )
  }
  componentWillUnmount() {
    console.log("umount")
    window.onresize = null
  }
}


export default class App19 extends Component {
  state = {
    isCreated: true
  }

  render() {
    window.onresize = () => {
      console.log("resize")
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            isCreated: !this.state.isCreated
          })

        }}>点击</button>
        {this.state.isCreated && <Child></Child>}
      </div>
    )
  }
}
