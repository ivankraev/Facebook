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
        paddingInline: 32,
        display: 'flex',
        justifyContent: 'center',
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
        top: APPBAR_HEIGHT,
        display: 'flex',
        boxSizing: 'border-box',
        border: 'none',
        backgroundColor: 'unset',
        overflowY: 'auto',
        padding: '0.5rem',
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiDivider: {
    defaultProps: {
      variant: 'middle',
    },
    styleOverrides: {
      root: {
        borderBottomWidth: 2,
        marginInline: 8,
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '.MuiListItemButton-root': {
          borderRadius: '8px',
          padding: '0.5rem',
        },
        '.MuiListItemIcon-root': {
          minWidth: '48px',
        },
        '.MuiListItemAvatar-root': {
          minWidth: '48px',
        },
        '.MuiAvatar-root': {
          width: '36px',
          height: '36px',
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
