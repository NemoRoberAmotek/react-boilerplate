import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation/>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
