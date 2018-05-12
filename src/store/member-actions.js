import { createRequestThunk } from './action-helpers'
// import { logReturnValue } from './action-helpers'
import api from 'api'
import { orange } from 'logger'

// actionAppSetMemberEditing

export const appAddMember = 'actionAppAddMember'
export const appReplaceMembers = 'actionAppReplaceMembers'

export const appMemberEditing = 'actionAppMemberEditing'
export const appSetMemberEditing = 'actionAppSetMemberEditing'
export const appUnsetMemberEditing = 'actionAppUnsetMemberEditing'
export const appUpdateMemberEditing = 'actionAppUpdateMemberEditing'




export const appSetOpenMemberId = 'actionAppSetOpenMemberId'
export const appUnsetOpenMemberId = 'actionAppUnsetOpenMemberId'




export const requestKeyReadMembers = 'requestKeyReadMembers'

export const setOpenMemberId = (id) => {
  // orange('2) setOpenMemberId', id)
  return (
    {
      type: appSetOpenMemberId,
      payload: {
        id
      }
    }
  )
}

export const unsetOpenMemberId = () => {
  return (
    {
      type: appUnsetOpenMemberId,
    }
  )
}

export const addMember = (member) => {
  return (
    {
    type: appAddMember,
    payload: {
      member
    }
  })
}

export const setMemberEditing = (member) => {
  // orange('setMemberEditing: member', member)
  return ({
    type: appSetMemberEditing,
    payload: {
      member,
    }
  })
}

export const unsetMemberEditing = () => {
  // orange('unsetMemberEditing')
  return ({
    type: appUnsetMemberEditing,
  })
}

export const updateMemberEditing = (field, value, _id) => {
  // orange('updateMemberEditing', `${field}: ${value}`)
  return ({
    type: appUpdateMemberEditing,
    payload: {
      field,
      value,
      _id,
    }
  })
}

// above is newer
// export const actionMemberEditingId = (id) => {
//   return ({
//     type: appMemberEditingId,
//     payload: { id, }
//   })
// }

export const actionMemberEditing = (props) => {
  // orange('actionMemberEditing: props', props)
  return ({
    type: appMemberEditing,
    payload: { props, }
  })
}


export const actionReplaceMembers = (members) => {
  // ku.log('replaceMembers: members', members, 'orange')
//   log('actions.replaceMembers', '', 'yellow')
  return({
    type: appReplaceMembers,
    payload: members,
  })
}

export const thunkRequestReadMembers = createRequestThunk({
  request: api.members.read,
  key: requestKeyReadMembers,
  success: [ actionReplaceMembers ],
})
