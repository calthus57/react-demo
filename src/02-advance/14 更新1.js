import React, { Component } from 'react'

export default class App14 extends Component {
  state={
    info:"去恶趣味"
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            info:"日期日期为"
          })
        }}>点击</button>
         <span id='id'>{this.state.info}</span>
      </div>
    )
  }

  componentWillUpdate(){
    console.log(this.state.info,document.getElementById("id").innerHTML)
  }

  componentDidUpdate(prevState,curState){
    console.log(this.state.info,document.getElementById("id").innerHTML)
  }
}
