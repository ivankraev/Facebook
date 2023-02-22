import { FC } from 'react'
import { styled, Box } from '@mui/material'

import FacebookLogo from '@/components/Icons/FacebookLogo'
import SearchField from './components/SearchField'

const StyledWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(45),
  gap: theme.spacing(0.8),
  display: 'flex',
  alignItems: 'center',
  marginLeft: '-4px',
}))

const LogoContainer: FC = () => {
  return (
    <StyledWrapper>
      <FacebookLogo />
      <SearchField />
    </StyledWrapper>
  )
}

export default LogoContainer
