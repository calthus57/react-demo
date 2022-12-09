import React, { Component } from 'react'

export default class App7 extends Component {
    myref = React.createRef()
    render() {
        return (
            <div>
                {/* <input ref="mytext"></input> */}
                <input ref={this.myref}></input>
                <button onClick={() => {
                    console.log(this.myref.current.value)
                }}>add2</button>
            </div>
        )
    }
}
