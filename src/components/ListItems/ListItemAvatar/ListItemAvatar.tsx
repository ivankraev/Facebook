import React, { FC } from 'react'
import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar as ListItemAvatarComponent,
} from '@mui/material'

export interface IListItemAvatarProps {
  src: string
  label: string
}

const ListItemAvatar: FC<IListItemAvatarProps> = ({ src, label }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemAvatarComponent>
          <Avatar src={src} />
        </ListItemAvatarComponent>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  )
}

export default ListItemAvatar
