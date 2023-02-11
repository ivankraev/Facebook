import { FC } from 'react'
import { Box } from '@mui/material'
import { MovieFilter as ReelsIcon, MenuBook as StoriesIcon } from '@mui/icons-material'

import { ISwitchItemConfigOptions } from './types'
import ListItem from '@/components/ListItems/ListItem'

const listItemStyles = {
  '.MuiListItemText-root': {
    flex: 'unset',
  },
  '.MuiButtonBase-root': {
    justifyContent: 'center',
    padding: '0.6rem',
    color: 'secondary.main',
  },
  '.MuiListItemIcon-root': {
    marginRight: '0.5rem',
  },
  '.Mui-selected:hover': {
    background: 'none',
  },
  '.Mui-selected': {
    background: 'none',
    color: 'primary.main',
  },
} as const

interface ISwitchButtonProps {
  onClick: () => void
  active: 'reels' | 'stories'
  type: 'reels' | 'stories'
}

const SwitchButton: FC<ISwitchButtonProps> = ({ onClick, active, type }) => {
  const config: ISwitchItemConfigOptions = {
    stories: {
      iconColor: active === 'stories' ? 'primary' : 'secondary',
      selected: active === 'stories',
      borderColor: active === 'stories' ? 'primary.main' : 'background.paper',
      icon: StoriesIcon,
      label: 'Истории',
    },
    reels: {
      iconColor: active === 'reels' ? 'primary' : 'secondary',
      selected: active === 'reels',
      borderColor: active === 'reels' ? 'primary.main' : 'background.paper',
      icon: ReelsIcon,
      label: 'Ленти',
    },
  }

  const { borderColor, icon, iconColor, label, selected } = config[type]

  return (
    <Box flex={1}>
      <ListItem
        label={label}
        icon={icon}
        selected={selected}
        sx={listItemStyles}
        onClick={onClick}
        iconProps={{
          color: iconColor,
          fontSize: 'medium',
        }}
      />
      <Box width={'100%'} height={'3px'} bgcolor={borderColor} />
    </Box>
  )
}

export default SwitchButton
