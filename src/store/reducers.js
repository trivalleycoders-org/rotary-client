import { combineReducers } from 'redux'
import { merge, clone, remove, insert } from 'ramda'
import {
  /*keyMemberEditing,*/
  keyReplaceAllMembers,
  updateOneMember,
  keySetMemberDialogAction,
  keySetOpenMemberId,
  keySetMemberEditing,
  keyUnsetMemberDialogAction,
  keyUnsetMemberEditing,
  keyUnsetOpenMemberId,
  keyUpdateMemberEditing,
} from 'store/member-actions'
import { blue, red } from 'logger'

export const memberDialogAction = ( state = '', { type, payload }) => {
  try {
    switch (type) {
      case keySetMemberDialogAction:
        return payload.id
      case keyUnsetMemberDialogAction:
        return ''
      default:
        return state
    }
  } catch (e) {
    red('ERROR: memberDialogAction: ', e)
  }
}

export const openMemberId = ( state = '', { type, payload }) => {
  // blue('3) keySetOpenMemberId: type', type)
  // blue('3) keySetOpenMemberId: payload', payload)
  try {
    switch (type) {
      case keySetOpenMemberId:
        return payload.id
      case keyUnsetOpenMemberId:
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
  // blue('members.state', state)
  // blue('state', state)
  switch (type) {
    case keyReplaceAllMembers:
      return payload.members
    case updateOneMember:
      // blue('members.payload.member', payload.member)
      const _id = payload.member._id
      const idx = state.findIndex(m => m._id === _id)
      const removed = remove(idx, 1, state)
      blue('removed', removed)
      const newState = insert(idx, payload.member , removed)
      return newState
    // case replaceOneMember:
    //   const _id = payload.member._id
    //   const idx = state.findIndex(m => m._id === _id)
    //   const removed = remove(idx, 1, state)
    //   blue('removed', removed)
    //   const newState = insert(idx, payload.member , removed)
    //   return newState
    default:
      return state
  }
}

export const roles = ( state = [], { type, payload }) => {
  return state
}

export const memberEditing = (state = {}, { type, payload }) => {

  switch (type) {
    case keySetMemberEditing:
      return payload.member
    case keyUnsetMemberEditing:
      return {} // { firstName: '' }
    case keyUpdateMemberEditing:
      // field are sometimes sent in as '|' delimited strings
      // e.g., 'roles|photographer'
      // blue('memberEditing: state', state)
      // blue('memberEditing: payload', payload)
      const fields = payload.field.split('|')
      // for now, there will only be field & subField, no
      // further levels
      const field = fields[0]
      const subField = fields.length === 2 ? fields[1] : null
      const _id = payload._id
      // blue('field', field)
      // blue('subField', subField)
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
  uiData: combineReducers({
    members: combineReducers({
      memberDialogAction,
      openMemberId,
      memberEditing,
    })
  })
})
