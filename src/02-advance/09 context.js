import React, { Component } from 'react'
import './css/communication.css'

const GlobalContext = React.createContext() // 创建context对象

const FilmItem = (props) => {
  let {name,detail} = props
  return (
    <GlobalContext.Consumer>
      {
        (value) => {
          return <div onClick={() => {
            value.changeInfo(detail)
          }}>{name}</div>
        }
      }
    </GlobalContext.Consumer>
  )
}

const FilmDetail = () => {

  return (
    <GlobalContext.Consumer>
      {
        (value) => {
          return <div className='filmdetail' >{value.info}</div>
        }
      }
    </GlobalContext.Consumer>

  )
}


export default class App9 extends Component {
  state = {
    list: [
      {
        id: 1,
        name: "das",
        detail: "dsadsa"
      },
      {
        id: 2,
        name: "das",
        detail: "VS但是"
      },
      {
        id: 3,
        name: "das",
        detail: "发发我"
      }, {
        id: 4,
        name: "das",
        detail: "恶趣味请问"
      }
    ],
    info: ""
  }

  render() {
    return (
      <GlobalContext.Provider value={{
         info:this.state.info,
         changeInfo:(value)=>{
           this.setState({
            info:value
           })
         }
      }}>
        <div>
          {
            this.state.list.map((item) => <FilmItem key={item.id} {...item}></FilmItem>)
          }
          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    )
  }
}