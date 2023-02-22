import { Theme } from '@mui/material'

export const userStatusIndicatorStyles = (
  isOnline: boolean,
  theme: Theme,
  offset: number,
) => {
  if (!isOnline) return
  return {
    '::after': {
      content: '""',
      position: 'absolute',
      top: theme.spacing(offset),
      left: theme.spacing(offset),
      width: theme.spacing(1.5),
      height: theme.spacing(1.5),
      backgroundColor: theme.palette.success.main,
      border: `${theme.spacing(0.25)} solid ${theme.palette.background.paper}`,
      borderRadius: '50%',
    },
  } as const
}
