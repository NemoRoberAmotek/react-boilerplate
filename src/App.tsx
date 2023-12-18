import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Navigation from './components/Navigation'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation />
          <Routes />
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}

export default App
