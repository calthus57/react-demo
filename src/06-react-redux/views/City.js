import React, { useState } from 'react'
import { connect } from 'react-redux'

function City(props) {
  const [list] = useState(["北京", "上海", "深圳", "广州"])
  return (
    <div>
      city

      <ul>
        {
          list.map(item =>
            <li key={item} onClick={() => {
              props.changeCity(item)
              // props.history.push(`/cinemas`)
              props.history.goBack()
            }}>{item}</li>
          )
        }
      </ul>
    </div>
  )
}
export default connect(null, {
  changeCity(item) {
    return {
      type: "change-city",
      payload: item
    }
  }
})(City)