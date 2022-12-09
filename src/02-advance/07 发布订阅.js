import React, { Component } from 'react'
import './css/communication.css'

const FilmItem = (props) => {
  let { name,detail } = props
  return (
    <div onClick={()=>{
      props.onEvent(detail)
    }}>{name}</div>
  )
}

const FilmDetail = (props) => {
  
  return (
    <div className='filmdetail' >{props.info}</div>
  )
}


export default class App7 extends Component {
  state = {
    list: [
      {
        id: 1,
        name: "das",
        detail:"dsadsa"
      },
      {
        id: 2,
        name: "das",
        detail:"VS但是"
      },
      {
        id: 3,
        name: "das",
        detail:"发发我"
      }, {
        id: 4,
        name: "das",
        detail:"恶趣味请问"
      }
    ],
    info:""
  }

  render() {
    return (
      <div>
        {
          this.state.list.map((item) => <FilmItem key={item.id} {...item} onEvent={(value)=>{
            this.setState({
              info:value
            })
          }}></FilmItem>)
        }
        <FilmDetail info={this.state.info}></FilmDetail>
      </div>
    )
  }
}