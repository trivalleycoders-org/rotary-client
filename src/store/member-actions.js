import { createRequestThunk } from './action-helpers'
// import { logReturnValue } from './action-helpers'
import api from 'api'
import { orange } from 'logger'

export const keyReplaceAllMembers = 'actionkeyReplaceAllMembers'
export const keyReplaceOneMember = 'actionreplaceOneMembers'

export const keyMemberEditing = 'actionkeyMemberEditing'
export const keySetMemberEditing = 'actionkeySetMemberEditing'
export const keyUnsetMemberEditing = 'actionkeyUnsetMemberEditing'
export const keyUpdateMemberEditing = 'actionkeyUpdateMemberEditing'

export const keySetOpenMemberId = 'actionkeySetOpenMemberId'
export const keyUnsetOpenMemberId = 'actionkeyUnsetOpenMemberId'

export const requestKeyReadAllMembers = 'requestKeyReadMembers'
export const requestKeyReplaceOneMember = 'requestKeyReplaceOnemember'

export const replaceOneMember = (member) => {
  orange('replaceOneMember: member', member)
  return (
    {
      type: replaceOneMember,
      payload: { member }
    }
  )
}

export const setOpenMemberId = (id) => {
  // orange('2) setOpenMemberId', id)
  return (
    {
      type: keySetOpenMemberId,
      payload: {
        id
      }
    }
  )
}

export const unsetOpenMemberId = () => {
  return (
    {
      type: keyUnsetOpenMemberId,
    }
  )
}

export const setMemberEditing = (member) => {
  // orange('setMemberEditing: member', member)
  return ({
    type: keySetMemberEditing,
    payload: {
      member,
    }
  })
}

export const unsetMemberEditing = () => {
  // orange('unsetMemberEditing')
  return ({
    type: keyUnsetMemberEditing,
  })
}

export const updateMemberEditing = (field, value, _id) => {
  // orange('updateMemberEditing', `${field}: ${value}`)
  return ({
    type: keyUpdateMemberEditing,
    payload: {
      field,
      value,
      _id,
    }
  })
}

export const replaceAllMembers = (members) => {
  // ku.log('replaceMembers: members', members, 'orange')
//   log('actions.replaceMembers', '', 'yellow')
  return({
    type: keyReplaceAllMembers,
    payload: members,
  })
}

export const requestReadAllMembers = createRequestThunk({
  request: api.members.read,
  key: requestKeyReadAllMembers,
  success: [ replaceAllMembers ],
})

export const requestReplaceOneMember = createRequestThunk({
  request: api.members.replaceOne,
  key: requestKeyReplaceOneMember,
  success: [ replaceOneMember ],
})


///////////////////////////////////////////////////////
// Not in use
export const appAddMember = 'actionAppAddMember' // not used
export const addMember = (member) => {
  return (
    {
    type: appAddMember,
    payload: {
      member
    }
  })
}
///////////////////////////////////////////////////////



// above is newer
// export const actionMemberEditingId = (id) => {
//   return ({
//     type: keyMemberEditingId,
//     payload: { id, }
//   })
// }

// export const actionMemberEditing = (props) => {
//   // orange('actionMemberEditing: props', props)
//   return ({
//     type: keyMemberEditing,
//     payload: { props, }
//   })
// }
