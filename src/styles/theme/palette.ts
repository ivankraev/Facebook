import { ThemeOptions } from '@mui/material'

const darkThemeColors = {
  midnight: {
    light: '#3a3b3c',
    main: '#242526',
    dark: '#18191a',
  },
  sierraBlue: {
    main: '#2374e1',
  },
  graphite: {
    main: '#b0b3b8',
  },
  text: { primary: '#E4E6EB', secondary: '#b0b3b8' },
}

export const darkThemePalette: ThemeOptions['palette'] = {
  mode: 'dark',
  primary: {
    main: darkThemeColors.sierraBlue.main,
  },
  secondary: {
    main: darkThemeColors.graphite.main,
    dark: darkThemeColors.midnight.light,
  },
  text: {
    primary: darkThemeColors.text.primary,
    secondary: darkThemeColors.text.secondary,
  },
  background: {
    default: darkThemeColors.midnight.dark,
    paper: darkThemeColors.midnight.main,
  },
}

export const lightThemePalette: ThemeOptions['palette'] = {
  mode: 'light',
}
