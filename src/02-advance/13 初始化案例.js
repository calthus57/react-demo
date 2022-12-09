import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App13 extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    axios.get("http://localhost:8000/listdata").then(res => {
      this.setState({
        list: res.data
      }, () => {
        new BetterScroll('.wrapper')
      })

    })
  }

  render() {
    return (
      <div>
        <div className='wrapper' style={{
          height: '200px',
          backgroundColor: 'yellow',
          overflow: 'hidden'
        }}>
          <ul>
            {this.state.list.map(item =>
              <li key={item.id}>
                {item.name}
              </li>
            )}
          </ul>
        </div>
      </div >

    )
  }
}
