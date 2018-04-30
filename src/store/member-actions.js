import { createRequestThunk, logReturnValue } from './action-helpers'
import api from 'api'
import { yellow } from 'logger'

export const replaceMembers = (members) => {
  // ku.log('replaceMembers: members', members, 'orange')
//   log('actions.replaceMembers', '', 'yellow')
  return({
    type: 'app/replaceMembers',
    payload: members,
  })
}

export const requestReadMembers = createRequestThunk({
  request: api.members.read,
  key: 'api/getReadMembers',
  success: [ replaceMembers,  (value) => logReturnValue(value)],
})

export const sayHi = () => {
  return 'hello'
}
