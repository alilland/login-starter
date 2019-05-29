import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import NotFound from './containers/NotFound'
import Home from './containers/Home'
import LoginContainer from './containers/Login/Container'
import Register from './containers/Register/Container'
import ForgotPassword from './containers/ForgotPassword/Container'

const ColorCircularProgress = withStyles({
  root: {
    color: '#FE6B8B'
  }
})(CircularProgress)

class Router extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      isLoggedIn: false,
      redirectUrl: '/'
    }
  }
  render () {
    const { isLoading, redirectUrl, isLoggedIn } = this.state
    if (!isLoading) {
      return (
        <BrowserRouter>
          <div>
            <Switch>
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
                      <Redirect to={redirectUrl} />
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
              <Route
                component={NotFound}
              />
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
    if (isLoading) {
      return (
        <div style={{ textAlign: 'center', height: '100vh', position: 'relative' }}>
          <ColorCircularProgress
            size={90}
            style={{
              background: 'rgba(221,221,221, 0.50)',
              borderRadius: 100,
              padding: 5,
              textAlign: 'center',
              margin: 0,
              position: 'absolute',
              top: '40%'
            }}
          />
        </div>
      )
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, (1500 * 1))
  }
  handleLogin (bool) {
    this.setState({ isLoggedIn: bool })
  }
}

export default Router
