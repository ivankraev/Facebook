import { ThemeOptions } from '@mui/material'

const darkThemeColors = {
  midnight: {
    main: '#242526',
    dark: '#18191a',
  },
  sierraBlue: {
    main: '#2374e1',
  },
  graphite: {
    main: '#B0B3B8',
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
