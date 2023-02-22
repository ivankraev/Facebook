import { FC } from 'react'
import { Box, Container, Drawer, styled } from '@mui/material'

import SideBar from '@/components/AppContainer/components/SideBar'
import StoriesSection from './components/StoriesSection'

const ResponsiveMainContainer = styled(Box)(({ theme }) => ({
  maxWidth: theme.spacing(85),
  width: '100%',
}))

const ResponsiveComplimentaryBar = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

const ResponsiveContainer = styled(Container)(({ theme }) => ({
  paddingInline: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    paddingInline: 0,
  },
}))

const HomePage: FC = () => {
  return (
    <Box display={'flex'}>
      <SideBar />
      <ResponsiveContainer maxWidth={'md'}>
        <ResponsiveMainContainer component={'main'}>
          <StoriesSection />
        </ResponsiveMainContainer>
      </ResponsiveContainer>
      <ResponsiveComplimentaryBar anchor={'right'} variant={'permanent'}>
        <p> some adds here</p>
        <p> some adds here</p>
        <p> some adds here</p>
      </ResponsiveComplimentaryBar>
    </Box>
  )
}

export default HomePage
