import { FC } from 'react'
import { Box, styled } from '@mui/material'

const Wrapper = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(0, 0, 1, 1),
  backgroundColor: theme.palette.background.paper,
  height: '232px',
}))

const Stories: FC = () => {
  return <Wrapper />
}

export default Stories
