import React from 'react'
import Section from 'elements/Section'
import Members from './Members'
import { withStyles } from 'material-ui/styles'
import withRoot from '../withRoot'
import Typography from 'material-ui/Typography'

const App = (props) => {
  return (
    <div>
      <Members />
    </div>
  )
}

export default withRoot(App)
