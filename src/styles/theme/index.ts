import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles'
import { palette } from './palette'
import { components } from './components'
import { typography } from './typography'

export const themeOptions: ThemeOptions = {
  palette,
  components,
  typography,
}

const theme: Theme = createTheme(themeOptions)
const appTheme = responsiveFontSizes(theme)

export default appTheme
