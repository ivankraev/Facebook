import { FC } from 'react'
import { AppBar as AppBarComponent, Toolbar } from '@mui/material'

import MainContentNavigation from './components/MainContentNavigation'
import UserProfileNavigation from './components/UserProfileNavigation'
import LogoContainer from './components/LogoContainer'

const AppBar: FC = () => {
  return (
    <AppBarComponent>
      <Toolbar variant="dense">
        <LogoContainer />
        <MainContentNavigation />
        <UserProfileNavigation />
      </Toolbar>
    </AppBarComponent>
  )
}

export default AppBar
