import React, { useReducer } from 'react'

const reducer = (prevState, action) => {
  let newState = { ...prevState }
  if (action.type === "add") {
    newState.count++
  } else {
    newState.count--
  }
  return newState
}

const initialState = {
  count: 0
}

export default function App13() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: "add"
        })
      }}>+</button>
      {state.count}
      <button onClick={() => {
        dispatch({
          type: "minus"
        })
      }}>-</button>
    </div>
  )
}
