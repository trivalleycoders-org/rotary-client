import React from 'react'
import Section from 'elements/Section'
import Members from './Members'
import { withStyles } from 'material-ui/styles'
import withRoot from '../withRoot'
import Typography from 'material-ui/Typography'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
// import { darkBaseTheme } from
  'material-ui/styles/baseThemes/darkBaseTheme'

const theme = createMuiTheme({
  // ...darkBaseTheme,
  palette: {
    type: 'dark',
  },
  typography: {
    display1: {
      fontSize: '1rem',
    }
  }
})

const App = (props) => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Typography variant='display1' gutterBottom>
          Display1
        </Typography>
        <Members />
      </MuiThemeProvider>
    </div>
  )
}

export default withRoot(App)
// import { withTheme } from 'material-ui/styles'
// export default withTheme()(MyComponent);
