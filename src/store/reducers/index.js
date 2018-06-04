import { combineReducers } from 'redux'
import members from './members'
import requests from './requests'
import roles from './roles'
import memberDialogAction from './memberDialogAction'
import openMemberId from './openMemberId'
import memberEditing from './memberEditing'

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
