import { FC } from 'react'
import { Box, styled } from '@mui/material'
import StoriesSlider from './components/StoriesSlider'
import { data } from '@/mocks/stories.json'

const Wrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(0, 0, 1, 1),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'hidden',
}))

const Stories: FC = () => {
  return (
    <Wrapper>
      <StoriesSlider items={data} />
    </Wrapper>
  )
}

export default Stories
