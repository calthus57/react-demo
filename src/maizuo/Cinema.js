import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class Cinema extends Component {
  constructor() {
    super()
    // 第三方库axios用于请求
    axios.get("http://localhost:8000/listdata").then(res => {
      console.log(res.data)
      this.setState({
        backList: res.data
      })

    }).catch()
  }
  state = {
    backList: [],
    list: []
  }

  handleInput(event) {
    console.log(event)
    //filter不会影响原数组
    var newList = this.state.backList.filter(item => item.name.includes(event.target.value))
    console.log(newList)
    this.setState({
      list: newList
    }, () => {
      new BetterScroll('.wrapper')
    })
  }

  render() {
    return (
      <div>
        <input onInput={(event) => {
          this.handleInput(event)
        }}></input>
        <div className='wrapper' style={{
          height: '200px',
          backgroundColor: 'yellow',
          overflow: 'hidden'
        }}>

          <div>
            {this.state.list.map(item =>
              <div key={item.id}>
                {item.name}
              </div>
            )}
          </div>

        </div>
      </div>

    )
  }
}
