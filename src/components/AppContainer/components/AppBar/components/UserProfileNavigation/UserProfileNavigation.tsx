import { FC } from 'react'
import { Avatar, Box, styled } from '@mui/material'
import {
  AppsRounded as AppsIcon,
  MapsUgcRounded as MessagesIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material'

import RoundedIconButton from '@/components/RoundedIconButton'

const Wrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(45),
  gap: theme.spacing(1),
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}))

const UserProfileNavigation: FC = () => {
  return (
    <Wrapper>
      <RoundedIconButton icon={<AppsIcon fontSize="small" />} />
      <RoundedIconButton icon={<MessagesIcon fontSize="small" />} />
      <RoundedIconButton icon={<NotificationsIcon fontSize="small" />} />
      <RoundedIconButton icon={<Avatar src={'john-doe.jpg'} />} />
    </Wrapper>
  )
}

export default UserProfileNavigation
