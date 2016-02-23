import React, { Component } from 'react'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'

import { fetchTpl } from 'actions'

import { body as Body } from 'components/mjml'

@provideHooks({
  fetch: ({ dispatch }) => dispatch(fetchTpl())
})
@connect(
  state => ({
    tpl: state.tpl
  })
)
class Home extends Component {

  render () {
    const { tpl } = this.props

    return (
      <div className='container'>

        <Body node={tpl} />

        <pre className='code'>
          {JSON.stringify(tpl.toJS(), null, 2)}
        </pre>
      </div>
    )
  }

}

export default Home
