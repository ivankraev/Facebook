import { FC } from 'react'
import { Box, Divider, styled, Toolbar } from '@mui/material'
import { MovieFilter as ReelsIcon, MenuBook as StoriesIcon } from '@mui/icons-material'

import SwitchButton from '@/components/SwitchButton'
import { IReelsOrStories } from '../../types'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1, 1, 0, 0),
  height: theme.spacing(7.5),
}))

const StyledSwitchButton = styled(SwitchButton)(({ theme }) => ({
  '.MuiButtonBase-root': {
    height: theme.spacing(6.5),
  },
  '.Mui-selected:hover, .Mui-selected': {
    '&::after': {
      bottom: -4,
    },
  },
}))
interface ISwitchButtonsProps {
  active: IReelsOrStories
  toggleStories: () => void
  toggleReels: () => void
}

const SwitchButtons: FC<ISwitchButtonsProps> = ({
  active,
  toggleReels,
  toggleStories,
}) => {
  return (
    <Box>
      <StyledToolbar variant={'dense'}>
        <StyledSwitchButton
          onClick={toggleStories}
          selected={active === 'stories'}
          label={'Истории'}
          icon={<StoriesIcon />}
        />
        <StyledSwitchButton
          onClick={toggleReels}
          selected={active === 'reels'}
          label={'Ленти'}
          icon={<ReelsIcon />}
        />
      </StyledToolbar>
      <Divider />
    </Box>
  )
}

export default SwitchButtons
