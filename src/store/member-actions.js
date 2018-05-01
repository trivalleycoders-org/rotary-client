import { createRequestThunk, logReturnValue } from './action-helpers'
import api from 'api'
import { requestKeyReadMembers, actionAppReplaceMembers } from '../constants'
import { yellow } from 'logger'

export const actionReplaceMembers = (members) => {
  // ku.log('replaceMembers: members', members, 'orange')
//   log('actions.replaceMembers', '', 'yellow')
  return({
    type: actionAppReplaceMembers,
    payload: members,
  })
}

export const thunkRequestReadMembers = createRequestThunk({
  request: api.members.read,
  key: requestKeyReadMembers,
  success: [ actionReplaceMembers ],
})
