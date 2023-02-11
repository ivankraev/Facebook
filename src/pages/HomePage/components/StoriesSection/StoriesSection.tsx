import { FC, useState } from 'react'
import { Box, styled } from '@mui/material'

import { IReelsOrStories } from './components/SwitchButtons/components/SwitchButton/types'
import SwitchButtons from './components/SwitchButtons'
import Stories from './components/Stories'

const Wrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(0.5),
}))

const StoriesSection: FC = () => {
  const [section, setSection] = useState<IReelsOrStories>('stories')

  const toggleStories = () => {
    if (section !== 'stories') {
      setSection('stories')
    }
  }

  const toggleReels = () => {
    if (section !== 'reels') {
      setSection('reels')
    }
  }

  return (
    <Wrapper>
      <SwitchButtons active={section} toggleReels={toggleReels} toggleStories={toggleStories} />
      <Stories />
    </Wrapper>
  )
}

export default StoriesSection
