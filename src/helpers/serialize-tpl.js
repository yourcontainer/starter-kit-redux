import _ from 'lodash'
import { fromJS } from 'immutable'
import shortid from 'shortid'

const cleanAttributes = attributes => {
  return _.omitBy(attributes, (val, key) => !key)
}

const serializeNode = node => ({
  ...node,
  id: shortid.generate(),
  ui: {
    open: false
  },
  attributes: cleanAttributes(node.attributes),
  children: node.children.map(serializeNode)
})

const serializeTpl = tpl => {
  return fromJS(serializeNode(tpl))
}

export default serializeTpl
