import axios from 'axios'
import { createAction } from 'redux-actions'

import config from 'config'

const tplFetched = createAction('TPL_FETCHED')

export const fetchTpl = () => dispatch => {
  return axios.get(`${config.apiFull}/tpl`)
    .then(res => {
      dispatch(tplFetched(res.data))
    })
}

export const updateNode = createAction('UPDATE_NODE')
