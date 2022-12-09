import React, { Component, useEffect, useMemo, useState } from 'react'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { Tabs, Space, Swiper, Toast } from 'antd-mobile'
import axios from 'axios'


export default function Films(props) {
  const [swiperlist, setswiperlist] = useState([])
  useEffect(() => {
    axios({
      url: `http://localhost:8000/getSwiperData`,
      // headers: {
      //   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
      //   'X-Host': 'mall.cfg.common-banner'
      // }
    }).then(res => {
      console.log(res.data)
      setswiperlist(res.data)
    })
  }, [])


  const getswiperitems = useMemo(
    () => swiperlist.map(item => (
      <Swiper.Item key={item.bannerId}>
        <img src={item.imgUrl} alt={item.name} style={{ width: "100%", height: "200px" }}></img>
      </Swiper.Item>
    )), [swiperlist]
  )


  return (
    <div>
      <Swiper autoplay loop>{getswiperitems}</Swiper>

      {/* <ul>
        <li><NavLink to="/films/nowplaying" activeClassName='selected'>正在热映</NavLink></li>
        <li><NavLink to="/films/comingsoon" activeClassName='selected'>即将上映</NavLink></li>
      </ul> */}
      {/* acticveKey 刷新后自动获取路径确定哪一个tab激活 */}
      <div style={{ position: "sticky", top: 0 ,zIndex:88,backgroundColor:"white"}}>
        <Tabs onChange={(key) => {
          props.history.push(key)
        }} activeKey={props.location.pathname}>
          <Tabs.Tab title='正在热映' key='/films/nowplaying'></Tabs.Tab>
          <Tabs.Tab title='即将上映' key='/films/comingsoon'></Tabs.Tab>
        </Tabs>
      </div>

      {/* 路由配置 嵌套路由 */}

      <Switch>
        <Route path="/films/nowplaying" component={Nowplaying} />
        <Route path="/films/comingsoon" component={Comingsoon} />
        <Redirect from='/films' to="/films/nowplaying"></Redirect>
      </Switch>

    </div>
  )
}
