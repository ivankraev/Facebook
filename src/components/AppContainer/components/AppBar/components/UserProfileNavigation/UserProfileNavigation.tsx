import { FC } from 'react'
import { Avatar, Box, IconButton, styled } from '@mui/material'
import {
  AppsRounded as AppsICon,
  MapsUgcRounded as MessagesIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material'

const Wrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(45),
  gap: theme.spacing(1),
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '.MuiButtonBase-root:not(:has(.MuiAvatar-root))': {
    padding: theme.spacing(1.2),
    backgroundColor: theme.palette.secondary.dark,
  },
  '.MuiSvgIcon-root': {
    width: '22px',
    height: '22px',
  },
  '.MuiAvatar-root': {
    width: '40px',
    height: '40px',
  },
}))

const UserProfileNavigation: FC = () => {
  return (
    <Wrapper>
      <IconButton>
        <AppsICon />
      </IconButton>
      <IconButton>
        <MessagesIcon />
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <IconButton>
        <Avatar src={'john-doe.jpg'} />
      </IconButton>
    </Wrapper>
  )
}

export default UserProfileNavigation
