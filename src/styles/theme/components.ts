import { ThemeOptions } from '@mui/material'

const DRAWER_WIDTH = 360
const APPBAR_HEIGHT = 56

export const components: ThemeOptions['components'] = {
  MuiContainer: {
    defaultProps: {
      disableGutters: true,
    },
    styleOverrides: {
      root: {
        display: 'flex',
        justifyContent: 'center',
        paddingInline: 32,
      },
    },
  },

  MuiToolbar: {
    defaultProps: {
      disableGutters: true,
    },
    styleOverrides: {
      dense: {
        height: APPBAR_HEIGHT,
        minHeight: APPBAR_HEIGHT,
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 16,
      },
    },
  },

  MuiDrawer: {
    styleOverrides: {
      root: {
        width: DRAWER_WIDTH,
      },
      paper: {
        width: DRAWER_WIDTH,
        height: `calc(100vh - ${APPBAR_HEIGHT}px)`,
        position: 'fixed',
        display: 'flex',
        top: APPBAR_HEIGHT,
        padding: '0.5rem',
        boxSizing: 'border-box',
        border: 'none',
        backgroundColor: 'unset',
        overflowY: 'auto',
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '.MuiListItemButton-root': {
          borderRadius: '8px',
          padding: '0.5rem',
        },
        '.MuiListItemIcon-root, .MuiListItemAvatar-root': {
          minWidth: 'unset',
          marginRight: '0.75rem',
        },
        '.MuiAvatar-root': {
          width: '2.25rem',
          height: '2.25rem',
        },
        '.MuiTypography-body1': {
          marginTop: '0.25rem',
        },
      },
    },
  },
  MuiSvgIcon: {
    defaultProps: {
      fontSize: 'large',
    },
  },
}
