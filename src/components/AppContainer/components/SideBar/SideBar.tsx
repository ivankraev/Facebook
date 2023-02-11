import { FC } from 'react'
import { Drawer, List, Divider } from '@mui/material'

import { listItems } from './config'
import ListItemLink from '@/components/ListItems/ListItemLink'
import ListItemAvatarLink from '@/components/ListItems/ListItemAvatarLink'

const SideBar: FC = () => {
  return (
    <Drawer variant="permanent" anchor={'left'}>
      <List>
        <ListItemAvatarLink src={'john-doe.jpg'} label={'John Doe'} link={'/'} />
        {listItems.map(({ label, link, icon }) => (
          <ListItemLink label={label} key={label} link={link} icon={icon} />
        ))}
      </List>
      <Divider variant={'middle'} sx={{ borderBottomWidth: 2, marginInline: 1 }} />
    </Drawer>
  )
}

export default SideBar
