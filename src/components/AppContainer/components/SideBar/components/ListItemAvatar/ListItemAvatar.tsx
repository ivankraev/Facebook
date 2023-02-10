import React from 'react'
import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar as ListItemAvatarComponent,
} from '@mui/material'
import { Link } from 'react-router-dom'

const ListItemAvatar = () => {
  return (
    <Link to={''}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatarComponent>
            <Avatar src="john-doe.jpg" />
          </ListItemAvatarComponent>
          <ListItemText primary={'John Doe'} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}

export default ListItemAvatar
