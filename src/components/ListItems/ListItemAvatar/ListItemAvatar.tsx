import { FC } from 'react'
import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar as ListItemAvatarComponent,
  styled,
} from '@mui/material'

const ItemWrapper = styled(ListItem)(({ theme }) => ({
  '.MuiListItemText-root': {
    marginLeft: theme.spacing(1),
  },
}))

export interface IListItemAvatarProps {
  src: string
  label: string
}

const ListItemAvatar: FC<IListItemAvatarProps> = ({ src, label }) => {
  return (
    <ItemWrapper disablePadding>
      <ListItemButton>
        <ListItemAvatarComponent>
          <Avatar src={src} />
        </ListItemAvatarComponent>
        <ListItemText primary={label} />
      </ListItemButton>
    </ItemWrapper>
  )
}

export default ListItemAvatar
