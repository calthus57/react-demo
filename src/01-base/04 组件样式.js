import React, { Component } from 'react'
import './css/01-index.css'

export default class App4 extends Component {
  render() {
    var style1 = {
        background:"yellow"
    }
    return (
      // <div class='active' style={style1}>{1+4}</div>
      // className 和 htmlFor 比较特殊
      <div className='active'>
        {1+4} <br/>
        <label htmlFor='username'>dsadas</label>
        <input type="text" id="username"></input>
      </div>
    )
  }
}
