import React, { Component } from 'react'


class Field extends Component {
  state = {
    value: ""
  }
  clear(){

  }
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(evt) => {
          this.setState({
            value: evt.target.value
          })
        }}></input>
      </div>
    )
  }
}


export default class App5 extends Component {
  username = React.createRef()
  password = React.createRef()
  render() {
    return (
      <div>
        <h1>登录</h1>
        <Field label='用户名' type='text' ref={this.username}/>
        <Field label='密码' type='password' ref={this.password}/>
        <button onClick={() => {
          console.log(this.username.current)
          console.log(this.username.current.state.value)
        }}>tijiao</button>
        <button onClick={() => {
          // this.username.current.form.reset()
        }}>重置</button>
      </div>
    )
  }
}
