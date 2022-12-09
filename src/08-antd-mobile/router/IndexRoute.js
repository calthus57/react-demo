import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Films from "../views/Films"
import Cinemas from "../views/Cinemas"
import Center from "../views/Center"
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'

function isAuth(){
  return localStorage.getItem("token")
}

export default function IndexRoute(props) {
  return (
    <HashRouter>
      {/* Switch 类似switch case break 解决刷新后Redirect匹配到的问题 */}
      <Switch>
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cinemas} exact></Route>
        <Route path="/cinemas/search" component={Search}></Route>
        <Route path="/center" render={()=>{
          return isAuth()?<Center/>:<Redirect to="/login"></Redirect>
        }}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/city" component={City}></Route>

        <Redirect from='/' to="/films" exact></Redirect>
        <Route component={NotFound}></Route>
      </Switch>
      {props.children}
    </HashRouter>
  )
}
