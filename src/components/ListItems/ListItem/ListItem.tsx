import React, { FC, memo } from 'react'
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
  label: string
  icon: typeof SvgIcon
  onClick?: () => void
  iconProps?: SvgIconProps
  sx?: SxProps
  selected?: boolean
}

const ListItem: FC<IListItemProps> = ({
  label,
  icon: Icon,
  onClick,
  iconProps,
  selected = false,
  ...rest
}) => {
  return (
    <ListItemComponent disablePadding onClick={onClick} {...rest}>
      <ListItemButton selected={selected}>
        <ListItemIcon>
          <Icon {...iconProps} />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItemComponent>
  )
}

export default memo(ListItem)