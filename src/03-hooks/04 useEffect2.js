import React, { useState, useEffect } from 'react'

export default function App4() {
  const [name, setname] = useState("kerwin")
  useEffect(() => {
    setname(name.substring(0,1).toUpperCase()+name.substring(1))
  }, [name])


  return (
    <div>
      <ul>
      <button onClick={()=>{
        setname("ddasda")
      }}>set</button>
        {name}
      </ul>

    </div>
  )
}
