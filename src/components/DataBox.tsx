import React from 'react'

import { Box, Typography } from '@mui/material'
import { theme } from '../theme'

const DataBox = ({ label, data }: { label: string; data: string }) => {
  return (
    <Box marginBottom={1}>
      <Typography fontWeight={'bold'} color={theme.palette.text.primary}>
        {label}
      </Typography>
      <Typography color={theme.palette.text.secondary}>{data}</Typography>
    </Box>
  )
}

export default DataBox
