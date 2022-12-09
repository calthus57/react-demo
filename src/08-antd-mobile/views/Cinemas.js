import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavBar, Space, Toast } from 'antd-mobile'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'


function Cinemas(props) {
  useEffect(() => {
    if (props.cinemalist.length === 0) {
      Toast.show({
        icon: 'loading',
        content: '加载中…',
        duration:0
      })
      //去后台取数据
      props.getCinemaListAction()
    } else {
      console.log("store 缓存")
    }
  }, [props.list])

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline onClick={() => {
          props.history.push(`/cinemas/search`)
        }} />
        <MoreOutline />
      </Space>
    </div>
  )

  const left = (
    <div onClick={() => {
      props.history.push(`/city`)
    }}>
      {props.cityName}
    </div>
  )

  return (
    <div>
      {/* <div style={{ overflow: "hidden" }}>
        <div onClick={() => {
          props.history.push(`/city`)
        }} style={{ float: "left" }}>
          {props.cityName}
        </div>
        <div onClick={() => {
          props.history.push(`/cinemas/search`)
        }} style={{ float: "right" }}>搜索</div>
      </div> */}

      <NavBar right={right} left={left} back={null}>
        影院
      </NavBar>

      {
        props.cinemalist.map(item =>
          <dl key={item.cinemaId} style={{ padding: "10px" }}>
            <dt>{item.name}</dt>
            <dd style={{ fontSize: "12px", color: "gray" }}>{item.address}</dd>
          </dl>
        )
      }
    </div>
  )
}

export default connect((state) => {
  return {
    cinemalist: state.cinemaListReducer.list,
    cityName: state.cityReducer.cityName
  }
}, {
  getCinemaListAction
})(Cinemas)