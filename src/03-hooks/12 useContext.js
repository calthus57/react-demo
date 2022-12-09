import React, { Component, useContext, useState } from 'react'
import './css/communication.css'

const GlobalContext = React.createContext() // 创建context对象

const FilmItem = (props) => {
  let { name, detail } = props
  const context = useContext(GlobalContext)

  return <div onClick={() => { context.changeInfo(detail) }}>{name}</div>

}

const FilmDetail = () => {
  const context = useContext(GlobalContext)

  return <div className='filmdetail' >{context.info}</div>      
}


export default function App10() {
  const [list, setlist] = useState([
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
  ])
  const [info, setinfo] = useState("")

  return (
    <GlobalContext.Provider value={{
      info: info,
      changeInfo: value => setinfo(value)
    }}>
      <div>
        {
          list.map((item) => <FilmItem key={item.id} {...item}></FilmItem>)
        }
        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  )
}
