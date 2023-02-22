import { FC, useRef } from 'react'
import { Box, styled } from '@mui/material'
import {
  ChevronLeft as NavigateBackwardsIcon,
  ChevronRight as NavigateForwardIcon,
} from '@mui/icons-material'

import StoriesSlider from './components/StoriesSlider'
import { data } from '@/mocks/stories.json'
import RoundedIconButton from '@/components/RoundedIconButton'

const commonNavigateButtonStyles = {
  position: 'absolute',
  zIndex: 1,
} as const

const Wrapper = styled(Box)(() => ({
  position: 'relative',
}))

const SlideContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(0, 0, 1, 1),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  overflowX: 'hidden',
  scrollBehavior: 'smooth',
}))

const NavigateButtonStart = styled(RoundedIconButton)(({ theme }) => ({
  ...commonNavigateButtonStyles,
  left: theme.spacing(2),
}))

const NavigateButtonEnd = styled(RoundedIconButton)(({ theme }) => ({
  ...commonNavigateButtonStyles,
  right: theme.spacing(2),
}))

const Stories: FC = () => {
  const slider = useRef<HTMLDivElement | null>(null)

  const scrollForward = () => {
    slider!.current!.scrollLeft = slider!.current!.scrollLeft + 570
  }

  const scrollBackwards = () => {
    slider!.current!.scrollLeft = slider!.current!.scrollLeft - 570
  }

  return (
    <Wrapper>
      <SlideContainer ref={slider}>
        <NavigateButtonStart
          onClick={scrollBackwards}
          icon={<NavigateBackwardsIcon color={'secondary'} />}
        />
        <StoriesSlider items={data} />
        <NavigateButtonEnd
          onClick={scrollForward}
          icon={<NavigateForwardIcon color={'secondary'} />}
        />
      </SlideContainer>
    </Wrapper>
  )
}

export default Stories
