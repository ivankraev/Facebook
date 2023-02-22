import { FC } from 'react'
import { Drawer, List, Divider, styled } from '@mui/material'

import { listItems } from './config'
import ListItemLink from '@/components/ListItems/ListItemLink'
import ListItemAvatarLink from '@/components/ListItems/ListItemAvatarLink'

const ResponsiveDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}))

const SideBar: FC = () => {
  return (
    <ResponsiveDrawer variant="permanent" anchor={'left'}>
      <List>
        <ListItemAvatarLink src={'john-doe.jpg'} label={'John Doe'} link={'/'} />
        {listItems.map(({ label, link, icon }) => (
          <ListItemLink label={label} key={label} link={link} icon={icon} />
        ))}
      </List>
      <Divider variant={'middle'} sx={{ borderBottomWidth: 2, marginInline: 1 }} />
    </ResponsiveDrawer>
  )
}

export default SideBar
