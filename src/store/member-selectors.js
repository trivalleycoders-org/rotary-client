import { yellow } from 'logger'

export const getAllMembers = (state) => {
  return state.members || {}
}

export const getOneMember = (state, _id) => {
  const m = state.members.filter(m => m._id === _id)
  // yellow('getOneMember: m', m[0])
  return m[0] || {}
}

export const memberEditingId = (state) => {
  return state.memberEdit.memberEditingId || null
}

export const getOpenMemberId = (state) => {
  // yellow('getOpenMemberId: state', state)
  const r = state.openMemberId || null

  return r
}

export const getMemberEditing = (state) => {
  return state.memberEditing || null
}
