import React, { Component } from 'react'

import MJMLElement from 'components/decorators/MJMLElement'

@MJMLElement
class Column extends Component {

  render () {
    return (
      <div>
        {'Column'}
        {this.props.children}
      </div>
    )
  }

}

export default Column
