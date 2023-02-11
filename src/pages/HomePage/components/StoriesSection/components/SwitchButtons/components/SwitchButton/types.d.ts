import { IconProps, SvgIcon } from '@mui/material/Icon'

export type ISwitchItemConfigOptions = Record<
  'stories' | 'reels',
  {
    iconColor: IconProps['color']
    selected: boolean
    borderColor: string
    icon: typeof SvgIcon
    label: string
  }
>
