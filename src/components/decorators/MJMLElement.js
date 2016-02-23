import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateNode } from 'actions'

import * as mjElements from 'components/mjml'

const createComponent = (ComposedComponent, defaultAttributes) => {

  @connect()
  class MJMLElement extends Component {

    updateNode = (updater) => {
      const { path, node } = this.props
      this.props.dispatch(updateNode({ path, updater }))
    }

    setMJAttribute = (attr, val) => {
      this.updateNode(node => node.setIn(['attributes', attr], val))
    }

    childPath (i) {
      const { path } = this.props
      return (path || []).concat(['children', i])
    }

    generateChildren () {
      return this.props.node.get('children').map((node, i) => {
        const tag = node.get('tagName').substr(3)
        const El = mjElements[tag]
        return (
          <El
            key={node.get('id')}
            node={node}
            path={this.childPath(i)} />
        )
      })
    }

    childProps () {
      return {
        ...this.props,
        children: this.generateChildren(),
        updateNode: this.updateNode,
        setMJAttribute: this.setMJAttribute
      }
    }

    render () {
      return (
        <div className='mjel'>
          <ComposedComponent {...this.childProps()} />
        </div>
      )
    }

  }

  return MJMLElement

}

export default (defaultAttributes) => {
  if (typeof defaultAttributes === 'function') {
    return createComponent(defaultAttributes)
  }
  return ComposedComponent => createComponent(ComposedComponent, defaultAttributes)
}
