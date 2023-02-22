import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider, Box, CssBaseline } from '@mui/material'

import AppBar from '@/components/AppContainer/components/AppBar'
import { darkAppTheme } from '@/styles/theme'

const AppContainer: FC = () => {
  return (
    <ThemeProvider theme={darkAppTheme}>
      <CssBaseline />
      <Box>
        <AppBar />
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}

export default AppContainer
