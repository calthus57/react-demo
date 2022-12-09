import React, { useEffect, useState } from 'react'
import Tabbar from './components/Tabbar'
import IndexRoute from './router/IndexRoute'
import './App.css'
import { autorun } from 'mobx'
import store from './mobx/store'


export default function App() {
  const [ishow, setishow] = useState(false)
  useEffect(() => {
    autorun(() => {
      setishow(store.isTabbarShow)
    })
  })
  return (
    <div>
      <IndexRoute>
        {ishow && <Tabbar></Tabbar>}
      </IndexRoute>

    </div>
  )
}
