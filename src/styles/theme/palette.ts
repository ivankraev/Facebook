import { ThemeOptions } from '@mui/material'

export const colors = {
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

export const palette: ThemeOptions['palette'] = {
  mode: 'dark',
  primary: {
    main: colors.sierraBlue.main,
  },
  secondary: {
    main: colors.graphite.main,
  },
  text: {
    primary: colors.text.primary,
    secondary: colors.text.secondary,
  },
  background: {
    default: colors.midnight.dark,
    paper: colors.midnight.main,
  },
}
