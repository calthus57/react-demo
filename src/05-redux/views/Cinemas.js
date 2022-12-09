import React, { useState, useEffect } from 'react'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import store from '../redux/store'

export default function Cinemas(props) {
  // console.log(store.getState())
  const [cityName, setcityName] = useState(store.getState().cityReducer.cityName)
  const [cinemalist, setcinemalist] = useState(store.getState().cinemaListReducer.list)
  useEffect(() => {
    if (store.getState().cinemaListReducer.list.length === 0) {
      //去后台取数据
      store.dispatch(getCinemaListAction())
    } else {
      console.log("store 缓存")
    }
    //订阅
    var unsubscribe = store.subscribe(() => {
      // console.log("订阅")
      setcinemalist(store.getState().cinemaListReducer.list)
    })

    return () => {
      // 取消订阅
      unsubscribe()
    }
  }, [])
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <div onClick={() => {
          props.history.push(`/city`)
        }} style={{ float: "left" }}>
          {cityName}
        </div>
        <div onClick={() => {
          props.history.push(`/cinemas/search`)
        }} style={{ float: "right" }}>搜索</div>
      </div>

      {
        cinemalist.map(item =>
          <dl key={item.cinemaId} style={{ padding: "10px" }}>
            <dt>{item.name}</dt>
            <dd style={{ fontSize: "12px", color: "gray" }}>{item.address}</dd>
          </dl>
        )
      }
    </div>
  )
}
