import React, { Component } from 'react'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'

export default function Films() {
  return (
    <div>
      <div style={{ height: "200px", background: "yellow" }}>大轮播</div>

      <ul>
        <li><NavLink to="/films/nowplaying" activeClassName='selected'>正在热映</NavLink></li>
        <li><NavLink to="/films/comingsoon" activeClassName='selected'>即将上映</NavLink></li>
      </ul>

      {/* 路由配置 嵌套路由 */}

      <Switch>
        <Route path="/films/nowplaying" component={Nowplaying} />
        <Route path="/films/comingsoon" component={Comingsoon} />
        <Redirect from='/films' to="/films/nowplaying"></Redirect>
      </Switch>

    </div>
  )
}
