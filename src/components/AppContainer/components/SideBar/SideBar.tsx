import { FC } from 'react'
import { Drawer, List, Divider } from '@mui/material'
import { listItems } from './config'
import ListItemComponent from './components/ListItem'
import ListItemAvatar from './components/ListItemAvatar'

const SideBar: FC = () => {
  return (
    <Drawer variant="permanent" anchor={'left'}>
      <List>
        <ListItemAvatar />
        {listItems.map(({ label, link, icon }) => (
          <ListItemComponent label={label} key={label} link={link} icon={icon} />
        ))}
      </List>
      <Divider />
    </Drawer>
  )
}

export default SideBar
