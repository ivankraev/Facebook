import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@/components/AppContainer/components/AppBar'

const AppContainer = () => {
  return (
    <Box>
      <CssBaseline />
      <AppBar />
      <Toolbar variant={'dense'} />
      <Outlet />
    </Box>
  )
}

export default AppContainer
