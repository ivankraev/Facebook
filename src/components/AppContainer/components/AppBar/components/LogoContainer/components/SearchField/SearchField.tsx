import { FC } from 'react'
import { InputBase, styled, Box } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import RoundedIconButton from '@/components/RoundedIconButton'

const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  width: theme.spacing(30),
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}))

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  '.MuiInputBase-root': {
    position: 'absolute',
    height: '100%',
    padding: theme.spacing(0, 1.2, 0, 4.2),
  },
  '.MuiSvgIcon-root': {
    zIndex: 1,
    pointerEvents: 'none',
  },
}))

const handleClick = () => {
  console.log('clicked')
}

const SearchField: FC = () => {
  return (
    <Wrapper onClick={handleClick}>
      <RoundedIconButton icon={<SearchIcon fontSize="small" color="secondary" />} />
      <StyledInput placeholder="Търсене във Facebook" />
    </Wrapper>
  )
}

export default SearchField
