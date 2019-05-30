import React from 'react'
import Register from './Register'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      firstName: [],
      lastName: [],
      email: [],
      password: [],
      checkPassword: [],
      passwordConfirmation: []
    }
  }

  render () {
    return (
      <div>
        <Register
          {...this.state}
          handleChange={(field, val) => this.handleChange(field, val)}
        />
      </div>
    )
  }

  handleChange (field, val) {
    this.setState({ [field]: val })
  }
}

export default Container
