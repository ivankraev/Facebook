import { FC } from 'react'
import { Box, Divider, List, styled } from '@mui/material'

import { IReelsOrStories } from './components/SwitchButton/types'
import SwitchButton from './components/SwitchButton'

const StyledList = styled(List)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1, 1, 0, 0),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0.5, 2, 0, 2),
}))
interface ISwitchButtonsProps {
  active: IReelsOrStories
  toggleStories: () => void
  toggleReels: () => void
}

const SwitchButtons: FC<ISwitchButtonsProps> = ({ active, toggleReels, toggleStories }) => {
  return (
    <Box>
      <StyledList>
        <SwitchButton onClick={toggleStories} active={active} type={'stories'} />
        <SwitchButton onClick={toggleReels} active={active} type={'reels'} />
      </StyledList>
      <Divider />
    </Box>
  )
}

export default SwitchButtons
