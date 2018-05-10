// import { yellow } from 'logger'

export const isFormOpen = (state, name) => {
  const r = state.formsOpen.memberDialog || false
  // yellow(`form-selectors.isFormOpen: ${name}:`, r)
  return r
}
