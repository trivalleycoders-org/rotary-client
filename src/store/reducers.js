import { combineReducers } from 'redux'

export const members = ( state = [], { type, payload }) => {
  return state
}

export const roles = ( state = [], { type, payload }) => {
  return state
}

export default combineReducers({
  members,
  roles,
})
