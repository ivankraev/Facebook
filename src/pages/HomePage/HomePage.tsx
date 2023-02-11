import SideBar from '@/components/AppContainer/components/SideBar'
import { Box, Container, Drawer } from '@mui/material'
import { FC } from 'react'
import Stories from './components/Stories'

const HomePage: FC = () => {
  return (
    <Box flex={1} display={'flex'}>
      <SideBar />
      <Container maxWidth={'md'} component="main">
        <Box maxWidth={680} width={'100%'} marginTop={'1rem'}>
          <Stories />
        </Box>
      </Container>
      <Drawer anchor={'right'} variant={'permanent'} />
    </Box>
  )
}

export default HomePage
