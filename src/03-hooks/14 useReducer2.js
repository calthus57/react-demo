import React, { useReducer, useContext } from 'react'

const reducer = (prevState, action) => {
  let newState = { ...prevState }
  if (action.type === "a") {
    newState.a++
  } else {
    newState.b++
  }
  return newState
}

const initialState = {
  a: 1,
  b: 1
}

const GlobalContext = React.createContext()

export default function App14() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <GlobalContext.Provider value={
        {
          state: state,
          dispatch: dispatch
        }
      }>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
      </GlobalContext.Provider>
    </div>
  )
}


function Child1() {
  const { dispatch } = useContext(GlobalContext)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: "a"
        })
      }}>change2</button>
      <button onClick={() => {
        dispatch({
          type: "b"
        })
      }}>change3</button>
    </div>
  )
}

function Child2() {
  const { state } = useContext(GlobalContext)
  return (
    <div>{state.a}</div>
  )
}

function Child3() {
  const { state } = useContext(GlobalContext)
  return (
    <div>{state.b}</div>
  )
}


