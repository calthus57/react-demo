import React, { useEffect, useState } from 'react'
import Tabbar from './components/Tabbar'
import IndexRoute from './router/IndexRoute'
import './App.css'
import { connect } from 'react-redux'
import './util/request'

function App(props) {

  return (
    <div>
      <IndexRoute>
        {props.isShow && <Tabbar></Tabbar>}
      </IndexRoute>

    </div>
  )
}

export default connect((state) => {
  return {
    isShow: state.tabbarReducer.showTabbar
  }
})(App)