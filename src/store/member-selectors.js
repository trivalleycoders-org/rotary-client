import { yellow } from 'logger'

export const getMembers = (state) => {
  // yellow('getMembers: state', state.members)
  yellow('state.members', state.members)
  return state.members
}
