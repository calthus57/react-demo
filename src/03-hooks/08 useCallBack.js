import React, { useState, useCallback } from 'react'

export default function App8() {

  const [text, settext] = useState("")
  const [list, setlist] = useState(["31231", "32131", "32131434"])

  // 重新渲染不会重新创建函数
  const handleChange = useCallback(
    evt => {
      settext(evt.target.value)
    },[]
  )

  const handleAdd = useCallback(
    () => {
      console.log(text)
      setlist([text, ...list])
      settext("")
    },[text]
  )

  return (
    <div>
      <input onChange={handleChange} value={text}></input>
      <button onClick={handleAdd}>add</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}
