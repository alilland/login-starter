import React from 'react'
import Login from './Login'
import { backend } from '../../lib/backend'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      email: null,
      password: null,
      rememberMe: false,
      emailError: null,
      passwordError: null,
      serverErrors: []
    }
  }
  render () {
    return (
      <div>
        <Login
          {...this.state}
          handleChange={(field, val) => this.handleChange(field, val)}
          handleSubmit={() => this.handleSubmit()}
        />
      </div>
    )
  }

  handleChange (field, val) {
    this.setState({ [field]: val })
  }
  handleSubmit () {
    if (this.validEmail(this.state.email) && this.validPassword(this.state.password)) {
      this.setState({ isLoading: true, emailError: null, passwordError: null })
      backend.post('/auth', {
        email: this.state.email,
        password: this.state.password,
        rememberMe: this.state.rememberMe
      })
        .then(res => {
          this.setState({ isLoading: false })
          console.log({
            file: 'Container.js',
            res: res
          })
        })
        .catch(err => {
          console.error({ err: err.response.data })
          this.setState({ serverErrors: err.response.data, isLoading: false })
        })
    } else {
      let emailError = null
      let passwordError = null
      if (!this.validEmail(this.state.email)) emailError = 'Please provide a valid email'
      if (!this.validPassword(this.state.password)) passwordError = 'Please provide a valid password'
      this.setState({ emailError: emailError, passwordError: passwordError })
    }
  }
  validEmail (email) {
    if (!email) return false
    if (!email.includes('@')) return false
    if (!email.includes('.')) return false
    return true
  }
  validPassword (password) {
    if (!password) return false
    if (!password.length >= 3) return false
    return true
  }
}

export default Container
