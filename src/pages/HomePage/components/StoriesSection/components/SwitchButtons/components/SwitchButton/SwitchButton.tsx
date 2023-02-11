import { FC } from 'react'
import { Box, styled } from '@mui/material'
import { MovieFilter as ReelsIcon, MenuBook as StoriesIcon } from '@mui/icons-material'

import { IReelsOrStories, ISwitchItemConfigOptions } from './types'
import ListItem from '@/components/ListItems/ListItem'

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '.MuiListItemText-root': {
    flex: 'unset',
  },
  '.MuiButtonBase-root': {
    justifyContent: 'center',
    padding: theme.spacing(1.2),
    color: theme.palette.text.secondary,
  },
  '.MuiListItemIcon-root': {
    marginRight: theme.spacing(1),
  },
  '.Mui-selected:hover, .Mui-selected': {
    background: 'none',
    color: theme.palette.primary.main,
  },
}))

interface ISwitchButtonProps {
  onClick: () => void
  active: IReelsOrStories
  type: IReelsOrStories
}

const SwitchButton: FC<ISwitchButtonProps> = ({ onClick, active, type }) => {
  const config: ISwitchItemConfigOptions = {
    stories: {
      borderColor: active === 'stories' ? 'primary.main' : 'background.paper',
      iconColor: active === 'stories' ? 'primary' : 'secondary',
      selected: active === 'stories',
      icon: StoriesIcon,
      label: 'Истории',
    },
    reels: {
      borderColor: active === 'reels' ? 'primary.main' : 'background.paper',
      iconColor: active === 'reels' ? 'primary' : 'secondary',
      selected: active === 'reels',
      icon: ReelsIcon,
      label: 'Ленти',
    },
  }

  const { borderColor, icon, iconColor, label, selected } = config[type]

  return (
    <Box flex={1}>
      <StyledListItem
        label={label}
        icon={icon}
        selected={selected}
        onClick={onClick}
        iconProps={{
          color: iconColor,
          fontSize: 'medium',
        }}
      />
      <Box height={'3px'} bgcolor={borderColor} />
    </Box>
  )
}

export default SwitchButton
