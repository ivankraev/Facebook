import { FC, ReactNode } from 'react'
import {
  ListItemButton,
  ListItemIcon,
  ListItem as ListItemComponent,
  ListItemText,
  ListItemProps,
} from '@mui/material'

export interface IListItemProps extends ListItemProps {
  icon: ReactNode
  label?: string
  selected?: boolean
  onClick?: () => void
}

const ListItem: FC<IListItemProps> = ({
  icon,
  label,
  selected = false,
  onClick,
  ...rest
}) => {
  return (
    <ListItemComponent disablePadding onClick={onClick} {...rest}>
      <ListItemButton selected={selected}>
        <ListItemIcon>{icon}</ListItemIcon>
        {label && <ListItemText primary={label} />}
      </ListItemButton>
    </ListItemComponent>
  )
}

export default ListItem
