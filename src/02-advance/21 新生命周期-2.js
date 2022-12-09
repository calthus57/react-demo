import React, { Component } from 'react'

export default class App21 extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 67, 6]
  }

  myRef = React.createRef()

  getSnapshotBeforeUpdate(){
     return this.myRef.current.scrollHeight
  }

  componentDidUpdate(prevProps,prevState,value){
    this.myRef.current.scrollTop+=this.myRef.current.scrollHeight-value
  }

  render() {
    return (
      <div>
        <h1>邮箱</h1>
        <button onClick={()=>{
          this.setState({
            list:[...[13,32],...this.state.list]
          })
        }}>收取</button>
        <div style={{
          height:"300px",
          overflow:"auto"
        }} ref={this.myRef}>
          <ul>
            {
              this.state.list.map(item => <li key={item} style={{height:"60px"}}>{item}</li>)
            }
          </ul>
        </div>

      </div>
    )
  }
}
