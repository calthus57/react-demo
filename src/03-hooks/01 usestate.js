import React, { useState } from 'react'

export default function App1() {

  const [state, setState] = useState("initialState")

  return (
    <div>
      <button onClick={()=>{
        setState("xiaoming")
      }}>点击</button>
      {state}
    </div>
  )
}
