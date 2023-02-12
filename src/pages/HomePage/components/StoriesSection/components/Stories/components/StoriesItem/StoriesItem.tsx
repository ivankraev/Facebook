import { FC } from 'react'
import { styled, Box, Typography, Avatar } from '@mui/material'
import { IStoriesItem } from '../StoriesSlider/StoriesSlider'

const ItemWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(14),
  height: theme.spacing(25),
  borderRadius: theme.spacing(1),
  position: 'relative',
  overflow: 'hidden',
}))

const ItemMetadataWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  justifyContent: 'space-between',
  pointerEvents: 'none',
  padding: theme.spacing(1.5),
  inset: 0,
}))

const ItemImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.05)',
    filter: 'brightness(0.9)',
    transition: theme.transitions.create('transform'),
  },
}))

const AuthorImage = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  border: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
}))

const AuthorName = styled(Typography)(() => ({}))

interface IStoriesItemProps {
  item: IStoriesItem
}

const StoriesItem: FC<IStoriesItemProps> = ({ item }) => {
  return (
    <ItemWrapper>
      <ItemImage src={item.src} alt={''} />
      <ItemMetadataWrapper>
        <AuthorImage src={item.author.profilePhotoSrc} alt={''} />
        <AuthorName variant={'body2'}>{item.author.name}</AuthorName>
      </ItemMetadataWrapper>
    </ItemWrapper>
  )
}

export default StoriesItem
