import { ThemeOptions } from '@mui/material'

export const colors = {
  midnight: {
    light: '#4AC3FF',
    main: '#242526',
    dark: '#18191a',
  },
  sierraBlue: {
    main: '#2374e1',
    dark: '#F6992B',
  },
  gray: {
    main: '#F5F5F5',
  },
  text: { primary: '#E4E6EB', secondary: '#b0b3b8' },
}

export const palette: ThemeOptions['palette'] = {
  mode: 'dark',
  primary: {
    main: colors.sierraBlue.main,
  },
  secondary: {
    main: colors.gray.main,
  },
  text: {
    primary: colors.text.primary,
    secondary: colors.text.secondary,
  },
  background: {
    default: colors.midnight.dark,
  },
}
