import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default function Tabbar() {
  // console.log(style)
  return (
    <div className={style.tabbar}>
      <ul>
        <li>
          {/* <a href='#/films'>电影</a> */}
          <NavLink to="/films" activeClassName={style.selected}>电影</NavLink>
        </li>
        <li>
          {/* <a href='#/cinemas'>影院</a> */}
          <NavLink to="/cinemas" activeClassName={style.selected}>影院</NavLink>
        </li>
        <li>
          {/* <a href='#/cinemas'>影院</a> */}
          <NavLink to="/center" activeClassName={style.selected}>我的</NavLink>
        </li>

      </ul>
    </div>
  )
}
