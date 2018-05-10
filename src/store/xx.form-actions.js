import { actionAppSetFormOpen } from '../constants'
import { orange } from 'logger'

export const actionSetFormOpen = (name, open) => {
  orange('actionSetFormOpen: name:open', `${name}:${open}`)
  // orange('actionSetFormOpen: actionAppSetFormOpen', actionAppSetFormOpen)
  return ({
    type: actionAppSetFormOpen,
    payload: {
      name,
      open,
    },
  })

}
