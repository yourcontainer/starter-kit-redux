import React, { Component } from 'react'

import MJMLElement from 'components/decorators/MJMLElement'

@MJMLElement
class Body extends Component {

  render () {
    return (
      <div>
        {'Body'}
        {this.props.children}
      </div>
    )
  }

}

export default Body
