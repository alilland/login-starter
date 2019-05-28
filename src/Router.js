import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import LoginContainer from './containers/Login/Container'
import Signup from './containers/Signup'

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            exact
            path='/login'
            component={LoginContainer}
          />
          <Route
            exact
            path='/signup'
            component={Signup}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
