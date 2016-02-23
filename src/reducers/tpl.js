import { handleActions } from 'redux-actions'

import serializeTpl from 'helpers/serialize-tpl'

const state = null

export default handleActions({

  TPL_FETCHED: (state, { payload: tpl }) => {
    return serializeTpl(tpl)
  },

  UPDATE_NODE: (state, { payload }) => {
    const { path, updater } = payload
    if (!path) { return updater(state) }
    return state.updateIn(path, updater)
  }

}, state)
