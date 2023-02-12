import { FC } from 'react'
import { styled } from '@mui/material'

import ListItem from '@/components/ListItems/ListItem'
import { IListItemProps } from '@/components/ListItems/ListItem/ListItem'

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '.MuiSvgIcon-root': {
    color: theme.palette.secondary.main,
  },
  '.MuiButtonBase-root': {
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  },
  '.MuiListItemText-root': {
    marginLeft: theme.spacing(1),
    padding: 0,
  },
  '.Mui-selected:hover, .Mui-selected': {
    color: theme.palette.primary.main,
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '3px',
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
