import React from 'react'

import { Grid } from '@mui/material'

const MainContentNavigation = () => {
  return (
    <Grid container sx={{ width: '680px' }}>
      <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
        item1
      </Grid>
      <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
        item2
      </Grid>
      <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
        item3
      </Grid>
      <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
        item4
      </Grid>
      <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
        item5
      </Grid>
    </Grid>
  )
}

export default MainContentNavigation
