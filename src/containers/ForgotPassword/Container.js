import React from 'react'
import ForgotPassword from './ForgotPassword'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ForgotPassword
        {...this.state}
      />
    )
  }
}

export default Container
