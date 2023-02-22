import { FC } from 'react'
import { Stack } from '@mui/material'

import StoriesItem from '../StoriesItem'

interface IUser {
  id: number
  name: string
  isOnline: boolean
  profilePhotoSrc: string
}

export interface IStoriesItem {
  id: number
  src: string
  location: string
  createdAt: string
  author: IUser
}

interface IStoriesSliderProps {
  items: IStoriesItem[]
}

const StoriesSlider: FC<IStoriesSliderProps> = ({ items }) => {
  return (
    <Stack direction={'row'} spacing={1}>
      {items.map((item) => (
        <StoriesItem item={item} key={item.id} />
      ))}
    </Stack>
  )
}

export default StoriesSlider
