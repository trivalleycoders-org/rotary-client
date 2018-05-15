import { createRequestThunk } from './action-helpers'
// import { logReturnValue } from './action-helpers'
import api from 'api'
import { orange } from 'logger'

export const keyReplaceAllMembers = 'actionkeyReplaceAllMembers'
export const keyUpdateOneMember = 'actionUpdateOneMembers'

export const keyMemberEditing = 'actionkeyMemberEditing'
export const keySetMemberEditing = 'actionkeySetMemberEditing'
export const keyUnsetMemberEditing = 'actionkeyUnsetMemberEditing'
export const keyUpdateMemberEditing = 'actionkeyUpdateMemberEditing'

export const keySetOpenMemberId = 'actionkeySetOpenMemberId'
export const keyUnsetOpenMemberId = 'actionkeyUnsetOpenMemberId'

export const requestKeyReadAllMembers = 'requestKeyReadAllMembers'
export const requestKeyUpdateOneMember = 'requestKeyUpdateOneMember'

export const updateOneMember = (member) => {
  orange('updateOneMember: member', member)
  return (
    {
      type: updateOneMember,
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

export const requestUpdateOneMember = createRequestThunk({
  request: api.members.patch,
  key: requestKeyUpdateOneMember,
  success: [ updateOneMember ],
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
