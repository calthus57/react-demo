import React, { useState, useEffect } from 'react'

export default function App3() {
  const [list, setlist] = useState([])
  useEffect(() => {
    setlist(["31231", "32131", "32131434"])
  }, [])


  return (
    <div>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>

    </div>
  )
}
