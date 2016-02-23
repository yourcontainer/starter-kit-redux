import React, { Component } from 'react'

import MJMLElement from 'components/decorators/MJMLElement'

@MJMLElement
class Image extends Component {

  changeSrc = (e) => {
    this.props.setMJAttribute('src', e.target.value)
  }

  setAlign (align) {
    this.props.setMJAttribute('align', align)
  }

  render () {
    const { node } = this.props
    const attributes = node.get('attributes')

    return (
      <div className='box'>
        {'Image'}
        <hr />
        <input
          value={attributes.get('src')}
          onChange={this.changeSrc} />

        <button onClick={this.setAlign.bind(this, 'left')}>
          {'align left'}
        </button>

        <button onClick={this.setAlign.bind(this, 'center')}>
          {'align center'}
        </button>

        <button onClick={this.setAlign.bind(this, 'right')}>
          {'align right'}
        </button>

      </div>
    )
  }

}

export default Image
