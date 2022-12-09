import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: "red" }}>
        <button onClick={()=>{
          this.props.event()
        }}>dianji</button>
        <span>navbar</span>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: "blue" }}>
        <ul>
          <li>eqweqw</li>
          <li>eqweqw</li>
          <li>eqweqw</li>
        </ul>
      </div>
    )
  }
}

export default class App1 extends Component {
  state={
    isShow:true
  }
  render() {
    return (
      <div>
        <Navbar event={()=>{
          this.setState({
            isShow:!this.state.isShow
          })
        }}></Navbar>
        {this.state.isShow&&<Sidebar></Sidebar>}
      </div>
    )
  }
}
