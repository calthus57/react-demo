import React, { useEffect } from 'react'

function NotFound(props) {
  useEffect(() => {
    console.log(props)

  }, [])

  return (
    <div>NotFound</div>
  )
}

function dcfconnect(cb,obj) {
  var value = cb()
  return (MyComponent) => {
    return (props) => {
      return <div>
        <MyComponent {...value} {...props} {...obj}/>
      </div>
    }
  }
}

export default dcfconnect(() => {
  return {
    a: 1
  }
},{
  aa(){}
})(NotFound)
