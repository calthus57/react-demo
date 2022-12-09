import React, { useEffect } from 'react'
import store from '../mobx/store'


export default function Detail(props) {
  console.log(props)
  useEffect(()=>{
    store.tabbarHide()
    return ()=>{
      console.log("destory")
      store.tabbarShow()
    }
  },[])
  return (
    <div>Detail</div>
  )
}
