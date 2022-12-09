import React, { Component } from 'react'

export default class App11 extends Component {
  myref = React.createRef()
  state = {
    list: ["dada", "dada", "dasda"],
    myHtml:"<h1>dada</h1>"
  }
  handleDelClick(index){
    console.log(index)
    let newList = this.state.list.slice()
    newList.splice(index,1)
    this.setState({
      list:newList
    })
    
  }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={
            {
              __html:this.state.myHtml
            }
        }></div>
        <input ref={this.myref}></input>
        <button onClick={() => {
          console.log(this.myref.current.value)
          this.setState({
            list: [...this.state.list, this.myref.current.value]
          })
          this.myref.current.value=""
        }}>add2</button>
        <ul>
          {this.state.list.map((item, index) =>
            <li key={index}>
              {item}
              <button onClick={()=>this.handleDelClick(index)}>del</button>
            </li>
          )}
        </ul>
        {/* {this.state.list.length===0?<div>anwu</div>:null} */}
        { this.state.list.length===0&&<div>anwu</div>}
      </div>
    )
  }
}
