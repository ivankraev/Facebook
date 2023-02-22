import { FC, ReactNode } from 'react'
import { IconButton, styled, Box, BoxProps } from '@mui/material'

interface IRoundedIconButtonProps extends BoxProps {
  icon: ReactNode
}

const StyledIconButton = styled(Box)(({ theme }) => ({
  '.MuiButtonBase-root:not(:has(.MuiAvatar-root))': {
    padding: theme.spacing(1.2),
    backgroundColor: theme.palette.secondary.dark,
    '&:hover': {
      filter: 'brightness(1.3)',
    },
  },
  '.MuiButtonBase-root:has(.MuiAvatar-root)': {
    padding: 0,
  },
  '.MuiAvatar-root': {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}))

const RoundedIconButton: FC<IRoundedIconButtonProps> = ({ icon, ...rest }) => {
  return (
    <StyledIconButton {...rest}>
      <IconButton>{icon}</IconButton>
    </StyledIconButton>
  )
}

export default RoundedIconButton
