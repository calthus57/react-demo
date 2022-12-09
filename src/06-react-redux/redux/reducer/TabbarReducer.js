const tabbarReducer = (prevState = {
  showTabbar: true,
}, action) => {

  let newState = { ...prevState }
  switch (action.type) {
    case "hide-tabbar":
      newState.showTabbar = false
      break
    case "show-tabbar":
      newState.showTabbar = true
      break
  }
  return newState
}

export default tabbarReducer  