import { fromJS } from 'immutable'
import React, { useState } from 'react'

export default function App6() {
  const [state, setstate] = useState({
    info: fromJS({
      name: "xs",
      age: 100,
      location: {
        city: "dada"
      },
      favor: ["dada", "dadad", "额外企鹅去"]
    })
  })
  console.log(state.info)
  return (
    <div>
      App6
      <button onClick={() => {
        setstate({
          info: state.info.set("name", "热望热望").setIn(["location", "city"], "shenyang")
            .setIn(["favor", 0], "恶气恶气")
        })
      }}>dianji</button>
      {state.info.get("location").get("city")}<br/>
      {state.info.get("favor").get(0)}
    </div>
  )
}
