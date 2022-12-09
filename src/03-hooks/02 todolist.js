import React,{useState} from 'react'

export default function App2() {

  const [text, settext] = useState("")
  const [list, setlist] = useState(["31231","32131","32131434"])

  const handleChange=(evt)=>{
    settext(evt.target.value)
  }

  return (
    <div>
      <input onChange={handleChange} value={text}></input>
      <button onClick={()=>{
        setlist([text,...list])
        settext("")
      }}>add</button>
      <ul>
         {list.map(item=><li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}
