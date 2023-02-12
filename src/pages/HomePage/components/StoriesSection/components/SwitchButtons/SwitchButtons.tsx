import { FC } from 'react'
import { Box, Divider, List, styled } from '@mui/material'
import { MovieFilter as ReelsIcon, MenuBook as StoriesIcon } from '@mui/icons-material'

import SwitchButton from '@/components/SwitchButton'
import { IReelsOrStories } from '../../types'
import { APPBAR_HEIGHT } from '@/styles/theme/components'

const StyledList = styled(List)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1, 1, 0, 0),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0, 2),
  height: APPBAR_HEIGHT,
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
        <SwitchButton
          onClick={toggleStories}
          selected={active === 'stories'}
          label={'Истории'}
          icon={StoriesIcon}
        />
        <SwitchButton
          onClick={toggleReels}
          selected={active === 'reels'}
          label={'Ленти'}
          icon={ReelsIcon}
        />
      </StyledList>
      <Divider />
    </Box>
  )
}

export default SwitchButtons
