// @flow
import {
  keyReplaceAllMembers,
  updateOneMember,
  keySetMemberEditing,
} from 'store/member-actions'
import { remove, insert } from 'ramda'
import { blue } from 'logger'

type State = Array<{
  _id: string,
  comments: string,
  exempt: boolean,
  firstName: string,
  lastName: string,
  phones: Array<{ id: string, phoneType: string, phoneNumber: string }>,
  roles: Array<string>,
}>

type Payload = any
type Action = {type: string, payload: Payload}


// https://github.com/facebook/flow/issues/307
const members = ( state: State = [], { type, payload }: Payload) => {
  // blue('members.state', state)
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

export default members
