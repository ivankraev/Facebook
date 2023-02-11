import { FC } from 'react'
import { Box, Divider, List } from '@mui/material'

import SwitchButton from './components/SwitchButton'
interface ISwitchButtonsProps {
  active: 'reels' | 'stories'
  toggleStories: () => void
  toggleReels: () => void
}

const listStyles = {
  display: 'flex',
  p: '0.25rem 1rem 0 1rem',
  backgroundColor: 'background.paper',
  borderRadius: '8px 8px 0px 0px',
}

const SwitchButtons: FC<ISwitchButtonsProps> = ({ active, toggleReels, toggleStories }) => {
  return (
    <Box>
      <List sx={listStyles}>
        <SwitchButton onClick={toggleStories} active={active} type={'stories'} />
        <SwitchButton onClick={toggleReels} active={active} type={'reels'} />
      </List>
      <Divider />
    </Box>
  )
}

export default SwitchButtons
