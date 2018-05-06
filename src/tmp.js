import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createPalette from 'material-ui/styles/palette'
import createTypography from 'material-ui/styles/typography'
import { createMuiTheme } from 'material-ui/styles'

const primary = {
  // custom
}

const accent = {
  // custom
}

const palette = createPalette({
  primary,
  accent,
})

let theme = createMuiTheme({
  palette,
  typography: createTypography(palette, {
    fontFamily: "'Font 1', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Font 1
    fontWeightRegular: 400, // Font 1
    fontWeightMedium: 700, // Font 2
  }),
})

const fontFamilySecondary = "'Font 2', sans-serif"
const fontHeader = {
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: fontFamilySecondary,
  textTransform: 'uppercase',
}

theme = {
  ...theme,
  palette: {
    ...theme.palette,
    background: {
      ...theme.palette.background,
      default: white,
    },
  },
  typography: {
    ...theme.typography,
    fontFamilySecondary,
    display4: {
      ...theme.typography.display4,
      ...fontHeader,
      fontSize: 60,
    },
    display3: {
      ...theme.typography.display3,
      ...fontHeader,
      fontSize: 48,
    },
    display2: {
      ...theme.typography.display2,
      ...fontHeader,
      fontSize: 42,
    },
    display1: {
      ...theme.typography.display1,
      ...fontHeader,
      fontSize: 36,
    },
    headline: {
      ...theme.typography.headline,
      fontSize: 20,
      fontWeight: theme.typography.fontWeightLight,
    },
    title: {
      ...theme.typography.title,
      ...fontHeader,
      fontSize: 18,
    },
    subheading: {
      ...theme.typography.subheading,
      fontSize: 18,
    },
    body2: {
      ...theme.typography.body2,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body1: {
      ...theme.typography.body1,
      fontSize: 14,
    },
  },
}

const createDefaultContext = () => {
  const { styleManager } = MuiThemeProvider.createDefaultContext({ theme })

  return {
    styleManager,
    theme,
  }
}

export default createDefaultContext
