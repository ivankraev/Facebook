import { IconProps, SvgIcon } from '@mui/material/Icon'

export type ISwitchItemConfigOptions = Record<
  IReelsOrStories,
  {
    iconColor: IconProps['color']
    selected: boolean
    borderColor: string
    icon: typeof SvgIcon
    label: string
  }
>

export type IReelsOrStories = 'reels' | 'stories'
