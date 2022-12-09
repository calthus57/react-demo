import React, { Component } from 'react'
import Cinema from '../maizuo/Cinema'
// import './css/02-选项卡.css'


export default class App12 extends Component {
  myref = React.createRef()
  state = {
    list: [
      {
        id: 1,
        text: "dasda"
      },
      {
        id: 2,
        text: "dasda"
      },
      {
        id: 3,
        text: "dasda"
      }
    ],
    current: 1
  }

  render() {
    return (
      <div>
        <Cinema></Cinema>
        <ul>
          {this.state.list.map(item =>
            <li key={item.id} className={this.state.current === item.id ? "active" : ""}
              onClick={() => {
                this.setState({
                  current: item.id
                })
              }}>
              {item.text}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
