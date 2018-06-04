import {
  keySetOpenMemberId,
  keyUnsetOpenMemberId,
} from 'store/member-actions'

const openMemberId = ( state = '', { type, payload }) => {
  try {
    switch (type) {
      case keySetOpenMemberId:
        return payload.id
      case keyUnsetOpenMemberId:
        return ''
      default:
        return state
    }
  } catch (e) {
    red('ERROR: openMemberId: ', e)
  }
}

export default openMemberId
