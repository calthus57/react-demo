import React, { PureComponent } from 'react'

export default class App24 extends PureComponent {
  state = {
    name: "小明"
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            name: "西西"
          })
        }}>点击</button>
        {this.state.name}
      </div>
    )
  }
  //scu 性能优化
  // shouldComponentUpdate(nextProps,nextState){
  //   // if(this.state.name!==nextState.name){
  //   //   return true
  //   // }
  //   if(JSON.stringify(this.state.name)!==JSON.stringify(nextState.name)){
  //     return true
  //   }
  //   return false
  // }
  componentDidUpdate() {
    console.log("update")
  }
}
