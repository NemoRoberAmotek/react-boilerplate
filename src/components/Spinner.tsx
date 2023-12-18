import React from 'react'
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'

const Spinner = ({ height }: { height?: number }) => {
  return (
    <Box
      height={height || 500}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <CircularProgress />
    </Box>
  )
}

export default Spinner
