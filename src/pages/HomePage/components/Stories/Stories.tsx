import { FC, useState } from 'react'
import { Box } from '@mui/material'
import SwitchButtons from './components/SwitchButtons'

const Stories: FC = () => {
  const [section, setSection] = useState<'stories' | 'reels'>('stories')

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
    <Box sx={{ pt: '0.5rem' }}>
      <SwitchButtons active={section} toggleReels={toggleReels} toggleStories={toggleStories} />
    </Box>
  )
}

export default Stories
