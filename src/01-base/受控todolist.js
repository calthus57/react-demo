import React, { Component } from 'react'

export default class App22 extends Component {
  state = {
    list: [{
      text: "dada",
      finished: false
    }, {
      text: "dada",
      finished: false
    }, {
      text: "dada",
      finished: false
    }],
    curtext:""
  }
  handleDelClick(index) {
    let newList = this.state.list.slice()
    newList[index].finished=!newList[index].finished
    this.setState({
      list: newList
    })

  }
  render() {
    return (
      <div>
        <input value={this.state.curtext} onChange={(evt) => {
          this.setState({
            curtext: evt.target.value
          })
        }}></input>
        <button onClick={() => {
          this.setState({
            list: [...this.state.list, {
              text:this.state.curtext,
              finished:false
            }],
            curtext: ""
          })
        }}>add</button>
        <ul>
          {this.state.list.map((item, index) =>
            <li key={index}>
              <span style={{textDecoration:item.finished&&"line-through"}}>{item.text}</span>
              <button onClick={() => this.handleDelClick(index)}>完成</button>
            </li>
          )}
        </ul>
        {/* {this.state.list.length===0?<div>anwu</div>:null} */}
        {this.state.list.length === 0 && <div>zanwu</div>}
      </div>
    )
  }
}
