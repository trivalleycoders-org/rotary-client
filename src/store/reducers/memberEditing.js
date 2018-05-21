import {
  keyMemberEditingAddPhone,
  keySetMemberEditing,
  keyUnsetMemberEditing,
  keyUpdateMemberEditing,
} from 'store/member-actions'

import { append, clone, merge } from 'ramda'


const updateMemberEditing = (state, payload) => {
  const fields = payload.field.split('|')
  const field = fields[0]
  const subField = fields.length === 2 ? fields[1] : null
  blue(`${field}>${subField}`)
  const _id = payload._id
  if (field === 'roles') {
    const newState = clone(state)
    newState.roles = state.roles.map(p => {
      if (p._id === _id) {
        return merge(p, {[subField]: payload.value})
      }
      return p
    })
    return newState
  } else if (field === 'phone') {
    const newState = clone(state)
    newState.phones = state.phones.map(p => {
      if (p._id === _id) {
        return merge(p, {[subField]: payload.value})
      }
      return p
    })
    return newState
  } else {
    return merge(state, { [payload.field]: payload.value })
  }
}


const memberEditing = (state = {}, { type, payload }) => {
  switch (type) {
    case keySetMemberEditing:
      return payload.member
    case keyUnsetMemberEditing:
      return {}
    case keyMemberEditingAddPhone:
      const phones = append(payload.phone, state.phones)
      const newState = merge(state, {phones: phones})
      return newState
    case keyUpdateMemberEditing:
      return updateMemberEditing(state, payload)
    default:
      return state
  }
}
export default memberEditing
