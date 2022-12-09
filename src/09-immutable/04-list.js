import { List } from 'immutable'
import React from 'react'


export default function App4() {
  var arr = List([1,"23",3])
  console.log(arr)
  console.log(arr.push("313213"))
  console.log(arr)
  return (
    <div>App4</div>
  )
}
