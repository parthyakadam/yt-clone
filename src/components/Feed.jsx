import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'

const Feed = () => {
  return (
    <Stack sx={{flexDirection: { sx: 'column', md: 'row'} }}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>

        <SideBar />

        <Typography className='copyright' variant='body2' sx={{color: 'white', mt: 1.5}}>
          Copyright 2024 &copy; Parth Kadam
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed