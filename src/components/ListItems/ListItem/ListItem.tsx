import { FC } from 'react'
import {
  ListItemButton,
  ListItemIcon,
  ListItem as ListItemComponent,
  ListItemText,
  SvgIconProps,
  SvgIcon,
  SxProps,
} from '@mui/material'

export interface IListItemProps {
  icon: typeof SvgIcon
  label?: string
  iconProps?: SvgIconProps
  selected?: boolean
  onClick?: () => void
  sx?: SxProps
}

const ListItem: FC<IListItemProps> = ({
  icon: Icon,
  label,
  iconProps,
  selected = false,
  onClick,
  ...rest
}) => {
  return (
    <ListItemComponent disablePadding onClick={onClick} {...rest}>
      <ListItemButton selected={selected}>
        <ListItemIcon>
          <Icon {...iconProps} />
        </ListItemIcon>
        {label && <ListItemText primary={label} />}
      </ListItemButton>
    </ListItemComponent>
  )
}

export default ListItem
