import React from 'react'

class NotFound extends React.Component {
  render () {
    return (
      <div style={{ textAlign: 'center', marginTop: 25 }}>
        <h1 style={{ margin: 0 }}>Page Not Found</h1>
        <h3 style={{ margin: 0, marginTop: 15 }}>404 Error</h3>
        <p style={{ margin: 0 }}>Sorry, the requested location <span style={{ fontWeight: 'bold' }}>{this.props.location.pathname}</span> was not found</p>
      </div>
    )
  }

  componentDidMount () {
    console.log({
      props: this.props
    })
  }
}

export default NotFound
