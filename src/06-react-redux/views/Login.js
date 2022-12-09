import React from 'react'

export default function Login(props) {
  return (
    <div>
      <h1>登录</h1>
      <input></input>
      <button onClick={()=>{
        localStorage.setItem("token","123")
        props.history.push('center')
      }}>登录</button>
    </div>
  )
}
