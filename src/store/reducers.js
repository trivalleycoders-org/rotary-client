import { combineReducers } from 'redux'
import { merge } from 'ramda'
import { actionAppReplaceMembers } from '../constants'

export const members = ( state = [], { type, payload }) => {
  switch (type) {
    case actionAppReplaceMembers:
      return payload.members
    default:
      return state
  }
}

export const roles = ( state = [], { type, payload }) => {
  return state
}

export const requests = (state = {}, { type, payload, meta }) => {
  switch (type) {
    case 'app/markRequestPending':
      return merge(state, { [meta.key]: { status: 'pending', error: null } })
    case 'app/markRequestSuccess':
      return merge(state, { [meta.key]: { status: 'success', error: null } })
    case 'app/markRequestFailed':
      return merge(state, { [meta.key]: { status: 'failure', error: payload } })
    default:
      return state
  }
}

export default combineReducers({
  members,
  requests,
  roles,
})
