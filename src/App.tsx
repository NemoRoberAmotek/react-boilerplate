import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { NextUIProvider } from '@nextui-org/react'

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </NextUIProvider>
  )
}

export default App
