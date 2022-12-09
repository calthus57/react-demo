const cityReducer = (prevState = {
  cityName: "Nanjing"
}, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case "change-city":
      newState.cityName = action.payload
      break
  }
  return newState
}

export default cityReducer