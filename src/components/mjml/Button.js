import React, { Component } from 'react'

import MJMLElement from 'components/decorators/MJMLElement'

@MJMLElement
class Button extends Component {

  render () {
    return (
      <div>
        {'Button'}
        {this.props.children}
      </div>
    )
  }

}

export default Button
