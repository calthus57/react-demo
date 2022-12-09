import React, { useEffect } from 'react'
import store from '../redux/store'

export default function Detail(props) {
  useEffect(() => {
    store.dispatch({
      type:"hide-tabbar"
    })
  
    return () => {
      store.dispatch({
        type:"show-tabbar"
      })
    }
  }, [])
  
  // console.log(props)
  return (
    <div>Detail</div>
  )
}
