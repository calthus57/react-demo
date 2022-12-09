import React, { Component } from 'react'


export default class App9 extends Component {
  state = {
    list:["dada",1,"dasa"]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item,index)=><li key={index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}
