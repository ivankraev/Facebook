import { FC } from 'react'
import { Box, Container, Drawer } from '@mui/material'
import SideBar from '@/components/AppContainer/components/SideBar'
import StoriesSection from './components/StoriesSection'

const HomePage: FC = () => {
  return (
    <Box flex={1} display={'flex'}>
      <SideBar />
      <Container maxWidth={'md'} component="main">
        <Box maxWidth={680} width={'100%'}>
          <StoriesSection />
        </Box>
      </Container>
      <Drawer anchor={'right'} variant={'permanent'} />
    </Box>
  )
}

export default HomePage
