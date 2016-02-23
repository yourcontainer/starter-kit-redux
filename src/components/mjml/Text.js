import React, { Component } from 'react'

import MJMLElement from 'components/decorators/MJMLElement'

@MJMLElement
class Text extends Component {

  render () {
    return (
      <div>
        {'Text'}
        {this.props.children}
      </div>
    )
  }

}

export default Text
