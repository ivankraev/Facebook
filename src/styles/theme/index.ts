import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles'
import { palette } from './palette'
import { components } from './components'
import { typography } from './typography'

export const themeOptions: ThemeOptions = {
  palette,
  components,
  typography,
  transitions: {
    create: () => 'none',
  },
}

const darkTheme: Theme = createTheme(themeOptions)
const darkAppTheme = responsiveFontSizes(darkTheme)

export { darkAppTheme }
