import {
  keySetMemberDialogAction,
  keyUnsetMemberDialogAction,
} from 'store/member-actions'

const memberDialogAction = ( state = '', { type, payload }) => {
  try {
    switch (type) {
      case keySetMemberDialogAction:
        return payload.id
      case keyUnsetMemberDialogAction:
        return ''
      default:
        return state
    }
  } catch (e) {
    red('ERROR: memberDialogAction: ', e)
  }
}

export default memberDialogAction
