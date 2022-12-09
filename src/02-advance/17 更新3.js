import React, { Component } from 'react'


class Child extends Component {
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }
  render() {
    return (
      <div>17 更新3</div>
    )
  }
}


export default class App17 extends Component {
  state={
    text:11
  }
  
  render() {
    return (
      <div>
        {
          this.state.text
        }
        <button onClick={
          ()=>{
             this.setState({
              text:12
             })
          }
        }>点击</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}
