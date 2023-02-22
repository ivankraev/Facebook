import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@mui/material/styles'
import { darkThemePalette, lightThemePalette } from './palette'
import { components } from './components'
import { typography } from './typography'
import { breakpoints } from './breakpoints'

export const themeOptions: ThemeOptions = {
  components,
  typography,
  breakpoints,
}
const lightTheme: Theme = createTheme({ ...themeOptions, palette: lightThemePalette })
const darkTheme: Theme = createTheme({ ...themeOptions, palette: darkThemePalette })
const darkAppTheme = responsiveFontSizes(darkTheme)
const lightAppTheme = responsiveFontSizes(lightTheme)

export { darkAppTheme, lightAppTheme }
