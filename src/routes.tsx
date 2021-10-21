import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './pages/HomePage'
import RoomPage from './pages/RoomPage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/rooms/:roomId' component={RoomPage}/>

      </Switch>
    </BrowserRouter>
  )
}