import { ThemeOptions } from '@mui/material'

const APPBAR_HEIGHT = 56

export const components: ThemeOptions['components'] = {
  MuiContainer: {
    defaultProps: {
      disableGutters: true,
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        fontWeight: 400,
      },
      root: {
        borderRadius: 50,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingInline: 16,
      },
    },
  },

  MuiDrawer: {
    styleOverrides: {
      root: {
        width: `clamp(280px, 24vw, 360px)`,
        position: 'sticky',
      },
      paper: {
        width: `clamp(280px, 24vw, 360px)`,
        height: `calc(100vh - ${APPBAR_HEIGHT + 1}px)`,
        top: `${APPBAR_HEIGHT + 1}px`,
        position: 'sticky',
        padding: 8,
        boxSizing: 'border-box',
        backgroundColor: 'initial',
        border: 'none',
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
      circular: {
        width: 36,
        height: 36,
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeSmall: {
        width: 21,
        height: 21,
      },
      fontSizeMedium: {
        width: 28,
        height: 28,
      },
      fontSizeLarge: {
        width: 36,
        height: 36,
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '.MuiListItemText-root': {
          flex: 'initial',
          marginLeft: 12,
        },
        '.MuiListItemButton-root': {
          borderRadius: 8,
          padding: 8,
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: 'initial',
          },
        },
        '.MuiListItemIcon-root, .MuiListItemAvatar-root': {
          minWidth: 'initial',
        },
      },
    },
  },
}
