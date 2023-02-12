import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider, Box, CssBaseline, Toolbar, Divider } from '@mui/material'

import AppBar from '@/components/AppContainer/components/AppBar'
import { darkAppTheme } from '@/styles/theme'

const AppContainer: FC = () => {
  return (
    <ThemeProvider theme={darkAppTheme}>
      <CssBaseline />
      <Box minHeight={'100vh'}>
        <AppBar />
        <Toolbar variant={'dense'} />
        <Divider />
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}

export default AppContainer
