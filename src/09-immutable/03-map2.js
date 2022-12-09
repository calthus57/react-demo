import { Map } from 'immutable'
import React, { useState } from 'react'

var obj = {
  name: "ddd",
  age: 100
}

var state = Map(obj)
console.log(state)
var newstate = state.set("name", "dfada")
console.log(newstate)
//转成js对象
console.log(newstate.toJS())

export default function App3() {
  const [state, setstate] = useState({
    info: Map({
      name: "xs",
      age: 100,
      filter: Map({
        up: true,
        down: false
      })
    })
  })
  console.log(state)
  return (
    <div onClick={() => {
      setstate({
        info: Map(state.info).set("name", "zhangsan").toJS()
      })
    }}>{state.info.name}{state.info.age}</div>
  )
}
