import React, { Component, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'


export default function App9() {

  const [cinemalist, setcinemalist] = useState([])
  const [text, settext] = useState("")

  useEffect(() => {
    axios.get("http://localhost:8000/listdata").then(res => {
      console.log(res.data)
      setcinemalist(res.data)
      new BetterScroll(".wrapper")
    })
  },[])

  const getlist = useMemo(() => cinemalist.filter(item => item.name.includes(text)), [text, cinemalist])

  return (
    <div>
      <input onInput={(evt) => {
        settext(evt.target.value)
      }} value={text}></input>

      <div className='wrapper' style={{
        height: '200px',
        backgroundColor: 'yellow',
        overflow: 'hidden'
      }}>

        <div>
          {getlist.map(item =>
            <div key={item.id}>
              {item.name}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

