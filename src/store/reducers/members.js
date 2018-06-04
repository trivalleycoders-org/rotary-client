import {
  keyReplaceAllMembers,
  keyUpdateOneMember,
  keyCreateOneMember,
  keySetMemberEditing,
} from 'store/member-actions'
import { remove, insert, append } from 'ramda'
import { blue } from 'logger'


// https://github.com/facebook/flow/issues/307
const members = ( state = [], { type, payload }) => {
  // blue('members.state', state)
  switch (type) {
    case keyReplaceAllMembers:
      return payload.members
    case keyUpdateOneMember:
      // blue('members.payload.member', payload.member)
      const id = payload.member.id
      const idx = state.findIndex(m => m.id === id)
      const removed = remove(idx, 1, state)
      blue('removed', removed)

      return insert(idx, payload.member , removed)
    // case replaceOneMember:
    //   const _id = payload.member._id
    //   const idx = state.findIndex(m => m._id === _id)
    //   const removed = remove(idx, 1, state)
    //   blue('removed', removed)
    //   const newState = insert(idx, payload.member , removed)
    //   return newState
    case keyCreateOneMember:
      const newState = append(payload.member, state)
      blue('keyCreateOneMember: newState', newState)
      return newState
    default:
      return state
  }
}

export default members
