import { FC } from 'react'
import { styled } from '@mui/material'

import ListItem from '@/components/ListItems/ListItem'
import { IListItemProps } from '@/components/ListItems/ListItem/ListItem'

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '.MuiSvgIcon-root': {
    color: theme.palette.text.secondary,
  },
  '.MuiButtonBase-root': {
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  },
  '.MuiListItemText-root': {
    marginLeft: theme.spacing(1),
  },
  '.Mui-selected:hover, .Mui-selected': {
    transition: theme.transitions.create('background-color', { duration: 0 }),
    color: theme.palette.primary.main,
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: theme.spacing(0.375),
      bottom: -6,
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.spacing(0.2, 0.2, 0, 0),
    },
  },
}))

type ISwitchButtonProps = IListItemProps

const SwitchButton: FC<ISwitchButtonProps> = ({ ...props }) => {
  return <StyledListItem {...props} />
}

export default SwitchButton
