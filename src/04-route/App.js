import React from 'react'
import Tabbar from './components/Tabbar'
import IndexRoute from './router/IndexRoute'
import './App.css'

export default function App() {
  return (
    <div>
      <IndexRoute>
        <Tabbar></Tabbar>
      </IndexRoute>

    </div>
  )
}
