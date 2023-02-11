import { Outlet } from 'react-router-dom'
import { ThemeProvider, Box, CssBaseline, Toolbar } from '@mui/material'

import AppBar from '@/components/AppContainer/components/AppBar'
import { darkAppTheme } from '@/styles/theme'

const AppContainer = () => {
  return (
    <ThemeProvider theme={darkAppTheme}>
      <CssBaseline />
      <Box>
        <AppBar />
        <Toolbar variant={'dense'} />
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}

export default AppContainer
