import { FC } from 'react'
import { Box } from '@mui/material'

import StoriesItem from '../StoriesItem'

interface IUser {
  id: number
  name: string
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
    <Box display={'flex'} gap={1}>
      {items.map((item) => (
        <StoriesItem item={item} key={item.id} />
      ))}
    </Box>
  )
}

export default StoriesSlider
