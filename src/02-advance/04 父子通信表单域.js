import React, { Component } from 'react'


const Field = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input type={props.type} onChange={(evt)=>{
        props.onChangeFunc(evt.target.value)
      }}></input>
    </div>
  )
}


export default class App4 extends Component {
  state = {
    username: "",
    password: ""
  }
  render() {
    return (
      <div>
        <h1>登录</h1>
        <Field label='用户名' type='text' onChangeFunc={(value) => {
          this.setState({
            username: value
          })
        }} />
        <Field label='密码' type='password' onChangeFunc={(value) => {
          this.setState({
            password: value
          })
        }}/>
        <button onClick={()=>{
           console.log(this.state.username,this.state.password)
        }}>tijiao</button>
      </div>
    )
  }
}
