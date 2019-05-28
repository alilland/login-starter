import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './containers/Home'
import LoginContainer from './containers/Login/Container'
import Register from './containers/Register/Container'
import ForgotPassword from './containers/ForgotPassword/Container'

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
            path='/registration'
            component={Register}
          />
          <Route
            exact
            path='/forgot-password'
            component={ForgotPassword}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
