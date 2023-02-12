import { ThemeOptions } from '@mui/material'

const DRAWER_WIDTH = 360
export const APPBAR_HEIGHT = 56

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
        alignItems: 'center',
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
  MuiAvatar: {
    styleOverrides: {
      root: {
        width: '36px',
        height: '36px',
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        width: '28px',
        height: '28px',
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '.MuiListItemText-root': {
          flex: 'unset',
          marginTop: '0.25rem',
          marginLeft: '1rem',
          paddingBlock: '0.25rem',
        },
        '.MuiListItemButton-root': {
          borderRadius: '8px',
          padding: '0.5rem',
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: 'unset',
          },
        },
        '.MuiListItemIcon-root, .MuiListItemAvatar-root': {
          minWidth: 'unset',
        },
        '.MuiListItemIcon-root': {
          margin: 0,
        },
      },
    },
  },
}
