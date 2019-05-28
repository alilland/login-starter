class ENV {
  constructor () {
    if (process.env.NODE_ENV === 'production') {
      this.backend = ''
    } else {
      this.backend = 'http://localhost:4000'
    }
  }
}

export default (new ENV())
