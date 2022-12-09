import React, { Component } from 'react'


class Child extends Component {
  render() {
    return (
      <div>
        Child
        {this.props.children}
      </div>
    )
  }
}


export default class App10 extends Component {
  

  render() {
    
    return (
      
      <div>
        <Child>
          <div>dadas</div>
        </Child>
      </div>
    )
  }
}

// 插槽 1.代码复用 2.减少父子通信
 
