import { ReactNode } from 'react'
import {
  HomeOutlined as HomeIcon,
  SlideshowOutlined as WatchIcon,
  StorefrontOutlined as MarketplaceIcon,
  GroupWorkOutlined as GroupsIcon,
  Home as HomeIconSelected,
  SmartDisplay as WatchIconSelected,
  StorefrontRounded as MarketplaceIconSelected,
  GroupWork as GroupIconSelected,
} from '@mui/icons-material'

type NavItemValue = 'home' | 'watch' | 'marketplace' | 'groups'

export interface NavItem {
  value: NavItemValue
  icon: ReactNode
  selectedIcon: ReactNode
}

export const items: NavItem[] = [
  {
    value: 'home',
    icon: <HomeIcon />,
    selectedIcon: <HomeIconSelected />,
  },
  {
    value: 'watch',
    icon: <WatchIcon />,
    selectedIcon: <WatchIconSelected />,
  },
  {
    value: 'marketplace',
    icon: <MarketplaceIcon />,
    selectedIcon: <MarketplaceIconSelected />,
  },
  {
    value: 'groups',
    icon: <GroupsIcon />,
    selectedIcon: <GroupIconSelected />,
  },
]
