import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import CssBaseline from 'material-ui/core/CssBaseline'
import blue from 'material-ui/colors/blue'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  // ...darkBaseTheme,
  palette: {
    type: 'dark',
    primary: blue,
  },
  // typography: {
  //   display1: {
  //     fontSize: '3rem',
  //   }
  // }
})

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
