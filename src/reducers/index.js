import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'

import tpl from './tpl'

export default combineReducers({
  router,
  tpl
})
