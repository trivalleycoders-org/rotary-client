import React from 'react'
import Section from 'elements/Section'
import Members from './Members'
import withRoot from '../withRoot'

const App = (props) => {
  return (
    <div>
      <Members />
    </div>
  )
}

export default withRoot(App)
