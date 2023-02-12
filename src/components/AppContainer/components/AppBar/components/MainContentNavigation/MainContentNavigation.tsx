import { FC, useState } from 'react'
import {
  HomeOutlined as HomeIcon,
  SlideshowOutlined as WatchIcon,
  StorefrontOutlined as MarketplaceIcon,
  GroupWorkOutlined as GroupsIcon,
  VideogameAssetOutlined as GamesIcon,
  Home as HomeIconSelected,
  SmartDisplay as WatchIconSelected,
  StorefrontRounded as MarketplaceIconSelected,
  GroupWork as GroupIconSelected,
  VideogameAsset as GamesIconSelected,
} from '@mui/icons-material'
import { Grid, styled, SvgIcon } from '@mui/material'

import SwitchButton from '@/components/SwitchButton'

type NavItemValue = 'home' | 'watch' | 'marketplace' | 'groups' | 'games'

interface NavItem {
  value: NavItemValue
  icon: typeof SvgIcon
  selectedIcon: typeof SvgIcon
}

const items: NavItem[] = [
  { value: 'home', icon: HomeIcon, selectedIcon: HomeIconSelected },
  { value: 'watch', icon: WatchIcon, selectedIcon: WatchIconSelected },
  { value: 'marketplace', icon: MarketplaceIcon, selectedIcon: MarketplaceIconSelected },
  { value: 'groups', icon: GroupsIcon, selectedIcon: GroupIconSelected },
  { value: 'games', icon: GamesIcon, selectedIcon: GamesIconSelected },
]

const StyledGrid = styled(Grid)(({ theme }) => ({
  width: theme.spacing(85),

  '.Mui-selected, .Mui-selected:hover': {
    '::after': {},
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
              iconProps={{ fontSize: 'large' }}
            />
          </Grid>
        )
      })}
    </StyledGrid>
  )
}

export default MainContentNavigation
