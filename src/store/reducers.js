import { combineReducers } from 'redux'
import { merge, clone } from 'ramda'
import {
  /*appMemberEditing,*/
  appReplaceMembers,
  appSetOpenMemberId,
  appSetMemberEditing,
  appUnsetMemberEditing,
  appUnsetOpenMemberId,
  appUpdateMemberEditing,
} from 'store/member-actions'
import { blue, red } from 'logger'


export const openMemberId = ( state = '', { type, payload }) => {
  // blue('3) appSetOpenMemberId: type', type)
  // blue('3) appSetOpenMemberId: payload', payload)
  try {
    switch (type) {
      case appSetOpenMemberId:
        return payload.id
      case appUnsetOpenMemberId:
        return ''
      default:
        return state
    }
  } catch (e) {
    red('ERROR: openMemberId: ', e)
  }

}

// newer above
export const members = ( state = [], { type, payload }) => {
  switch (type) {
    case appReplaceMembers:
      return payload.members
    default:
      return state
  }
}

export const roles = ( state = [], { type, payload }) => {
  return state
}

export const memberEditing = (state = {}, { type, payload }) => {

  switch (type) {
    case appSetMemberEditing:
      return payload.member
    case appUnsetMemberEditing:
      return {} // { firstName: '' }
    case appUpdateMemberEditing:
      // field are sometimes sent in as '|' delimited strings
      // e.g., 'roles|photographer'
      blue('memberEditing: state', state)
      blue('memberEditing: payload', payload)
      const fields = payload.field.split('|')
      // for now, there will only be field & subField, no
      // further levels
      const field = fields[0]
      const subField = fields.length === 2 ? fields[1] : null
      const _id = payload._id
      blue('field', field)
      blue('subField', subField)
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
        newState.phone = state.phone.map(p => {
          if (p._id === _id) {
            return merge(p, {[subField]: payload.value})
          }
          return p
        })
        return newState
      } else {
        return merge(state, { [payload.field]: payload.value })
      }

    default:
      return state
  }
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
  openMemberId,
  memberEditing,

})
