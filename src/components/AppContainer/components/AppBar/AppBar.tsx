import { FC } from 'react'
import { AppBar as AppBarComponent, Toolbar, Divider } from '@mui/material'

import MainContentNavigation from './components/MainContentNavigation'
import UserProfileNavigation from './components/UserProfileNavigation'
import LogoContainer from './components/LogoContainer'

const AppBar: FC = () => {
  return (
    <AppBarComponent elevation={0} position="sticky">
      <Toolbar variant="dense">
        <LogoContainer />
        <MainContentNavigation />
        <UserProfileNavigation />
      </Toolbar>
      <Divider variant={'fullWidth'} />
    </AppBarComponent>
  )
}

export default AppBar
