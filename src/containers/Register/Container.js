import React from 'react'
import Register from './Register'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      firstName: null,
      firstNameError: null,
      lastName: null,
      lastNameError: null,
      email: null,
      emailError: null,
      password: null,
      passwordError: null,
      passwordConfirmation: null,
      passwordConfirmationError: null
    }
  }

  render () {
    return (
      <div>
        <Register
          {...this.state}
          handleChange={(field, val) => this.handleChange(field, val)}
          handleSubmit={() => this.handleSubmit()}
        />
      </div>
    )
  }

  validateNames (field, val) {
    if (val.length > 30) return
    let errorField = `${field}Error`
    let error = null
    if (val === '') error = 'field is required'
    if (!/^[a-zA-Z- ]{0,30}$/.test(val)) error = 'not a valid name'
    this.setState({ [field]: val, [errorField]: error })
  }
  validEmail (val) {
    if (val.length > 130) return
    let error = null
    if (val === '') error = 'field is required'
    if (val.includes('.') && val.includes('@') === false) error = 'email is missing @ symbol'
    if (val.includes('@') && val.includes('.') === false) error = 'not a valid email'
    if (!/[\p{ASCII}]+/u.test(val)) error = 'Use only letters A to Z with no accents'
    this.setState({ email: val, emailError: error })
  }
  passwordComplexity (password) {
    if (password.length > 130) return
    let error = null
    let matchError = this.state.passwordConfirmationError
    if (password === '') error = 'field is required'
    if (!/\d/.test(password)) error = 'Must contain a number'
    if (!/[a-z]/.test(password)) error = 'Must contain a lower case letter'
    if (!/[A-Z]/.test(password)) error = 'Must contain an upper case letter'
    if ((password.length >= 8) === false) error = 'Must be a minumum of 8 characters'
    if (!/[\p{ASCII}]+/u.test(password)) error = 'No Characters with Accents Allowed'
    if (error === null && password === this.state.passwordConfirmation) {
      matchError = null
    }
    this.setState({
      password: password,
      passwordError: error,
      passwordConfirmationError: matchError
    })
  }
  passwordMatch (val) {
    if (val.length > 130) return
    let error = null
    if (this.state.password !== val) error = 'passwords do not match'
    if (val === '') error = 'field is required'
    this.setState({
      passwordConfirmation: val,
      passwordConfirmationError: error
    })
  }

  handleChange (field, val) {
    if (['firstName', 'lastName'].includes(field)) this.validateNames(field, val)
    if (field === 'email') this.validEmail(val)
    if (field === 'password') this.passwordComplexity(val)
    if (field === 'passwordConfirmation') this.passwordMatch(val)
  }

  handleSubmit () {
    console.log('submit')
  }
}

export default Container
