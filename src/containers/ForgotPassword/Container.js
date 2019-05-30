import React from 'react'
import ForgotPassword from './ForgotPassword'

class Container extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emailError: null
    }
  }

  render () {
    return (
      <div>
        <ForgotPassword
          {...this.state}
        />
      </div>
    )
  }
}

export default Container
