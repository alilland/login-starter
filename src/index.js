import React from 'react'
import ReactDOM from 'react-dom'
import './lib/css/index.css'
import Router from './Router'
import { ThemeProvider } from '@material-ui/styles'
import * as serviceWorker from './lib/serviceWorker'
import theme from './lib/theme'
import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router />
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
