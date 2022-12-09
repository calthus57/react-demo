import React, { useEffect, useState } from 'react'
import Tabbar from './components/Tabbar'
import IndexRoute from './router/IndexRoute'
import './App.css'
import store from './redux/store'

export default function App() {
  const [state, setState] = useState({ ishow: true })

  useEffect(() => {
    store.subscribe(() => {
      if (store.getState().tabbarReducer.showTabbar !== state) {
        setState({
          ishow: store.getState().tabbarReducer.showTabbar
        })
      }

    })
  }, [])

  return (
    <div>
      <IndexRoute>
        {state.ishow && <Tabbar></Tabbar>}
      </IndexRoute>

    </div>
  )
}
