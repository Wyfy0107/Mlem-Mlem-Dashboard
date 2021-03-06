import React from 'react'
import './App.css'

import { Switch, Route } from 'react-router-dom'
import Login from './pages/login'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  )
}

export default App
