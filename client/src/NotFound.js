import React, { Component } from 'react'
import { Row } from 'react-foundation'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render () {
    return <Row text textAlign='center'>
      <h1>404: Not found</h1>
      <a href="/">Back to home</a>
    </Row>
  }
}

export default NotFound