import React from 'react'
import Section from 'elements/Section'
import Members from './Members'
import { withStyles } from 'material-ui/styles'
import withRoot from '../withRoot'
import Typography from 'material-ui/Typography'
import { withTheme } from 'material-ui/styles';
import H1 from 'elements/H1'
import H2 from 'elements/H2'
const App = (props) => {
  return (
    <div>
      <Members />
    </div>
  )
}

export default withRoot(App)
// import { withTheme } from 'material-ui/styles'
// export default withTheme()(MyComponent);
