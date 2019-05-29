import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Home from './containers/Home'
import LoginContainer from './containers/Login/Container'
import Register from './containers/Register/Container'
import ForgotPassword from './containers/ForgotPassword/Container'

class Router extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render () {
    const { isLoggedIn } = this.state
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path='/'
            render={() => (!isLoggedIn ? (<Redirect to='/login' />) : (<Route path='/' component={Home} />))}
          />
          <Route
            exact
            path='/login'
            render={(routeProps) => {
              if (isLoggedIn) {
                return (
                  <Redirect to='/' />
                )
              } else {
                return (
                  <LoginContainer
                    {...routeProps}
                    {...this.props}
                    handleLogin={(bool) => this.handleLogin(bool)}
                  />
                )
              }
            }}
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
  componentDidMount () {}
  handleLogin (bool) {
    this.setState({ isLoggedIn: bool })
  }
}

export default Router
