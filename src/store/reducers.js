import { combineReducers } from 'redux'
import { merge } from 'ramda'
import {
  /*appMemberEditing,*/
  appMemberEditingId,
  appReplaceMembers,
  appSetOpenMemberId,
  appSetMemberEditing,
  appUnsetOpenMemberId,
  appUpdateMemberEditing,
} from 'store/member-actions'
import { blue, red } from 'logger'


export const openMemberId = ( state = '', { type, payload }) => {
  blue('3) appSetOpenMemberId: type', type)
  blue('3) appSetOpenMemberId: payload', payload)
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

export const memberEditingId = (state= '', { type, payload }) => {
  switch (type) {
    case appMemberEditingId:
      return payload.id
    default:
      return state
  }
}

export const memberEditing = (state = {}, { type, payload }) => {
  // blue('memberEditing: state', state)
  // blue('memberEditing: payload', payload)
  switch (type) {
    case appSetMemberEditing:
      return payload.member
    case appUnsetOpenMemberId:
      return {}
    case appUpdateMemberEditing:
      return merge(state, { [payload.field]: payload.value })
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
  memberEditingId,
  memberEditing,

})
