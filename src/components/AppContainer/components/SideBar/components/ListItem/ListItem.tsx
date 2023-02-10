import React from 'react'
import { Link } from 'react-router-dom'
import {
  ListItemButton,
  ListItemIcon,
  ListItem as ListItemComponent,
  ListItemText,
  SvgIconTypeMap,
} from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

interface IListItem {
  label: string
  link: string
  icon: OverridableComponent<SvgIconTypeMap<Record<string, never>, 'svg'>> & {
    muiName: string
  }
}

const ListItem = ({ icon: Icon, label, link }: IListItem) => {
  return (
    <Link to={link} key={label}>
      <ListItemComponent key={label} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItemComponent>
    </Link>
  )
}

export default ListItem
