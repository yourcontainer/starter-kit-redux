import React, { Component } from 'react'

import MJMLElement from 'components/decorators/MJMLElement'

@MJMLElement
class Section extends Component {

  render () {
    return (
      <div>
        {'Section'}
        {this.props.children}
      </div>
    )
  }

}

export default Section
