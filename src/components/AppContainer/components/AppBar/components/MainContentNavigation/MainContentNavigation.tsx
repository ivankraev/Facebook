import { FC, useState } from 'react'
import { Grid, styled } from '@mui/material'

import SwitchButton from '@/components/SwitchButton'
import { items, NavItem } from './config'

const StyledGrid = styled(Grid)(({ theme }) => ({
  width: theme.spacing(70),
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const MainContentNavigation: FC = () => {
  const [selected, setSelected] = useState(items[0])

  const onSelect = (item: NavItem) => {
    if (item.value !== selected.value) {
      setSelected(item)
    }
  }

  return (
    <StyledGrid container columnSpacing={1}>
      {items.map((item: NavItem) => {
        const isSelected = selected.value === item.value
        return (
          <Grid item xs={12 / items.length} key={item.value}>
            <SwitchButton
              icon={isSelected ? item.selectedIcon : item.icon}
              selected={isSelected}
              onClick={() => onSelect(item)}
            />
          </Grid>
        )
      })}
    </StyledGrid>
  )
}

export default MainContentNavigation
