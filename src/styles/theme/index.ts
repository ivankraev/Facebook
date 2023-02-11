import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles'
import { darkThemePalette, lightThemePalette } from './palette'
import { components } from './components'
import { typography } from './typography'

export const themeOptions: ThemeOptions = {
  components,
  typography,
  transitions: {
    create: () => 'none',
  },
}
const lightTheme: Theme = createTheme({ ...themeOptions, palette: lightThemePalette })
const darkTheme: Theme = createTheme({ ...themeOptions, palette: darkThemePalette })
const darkAppTheme = responsiveFontSizes(darkTheme)
const lightAppTheme = responsiveFontSizes(lightTheme)

export { darkAppTheme, lightAppTheme }
