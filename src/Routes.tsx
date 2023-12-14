import React from 'react'
import { Routes as Paths, Route } from 'react-router-dom'
import Index from './pages/Index'
import Breeds from './pages/Breeds'

const Routes = () => {
  return (
    <Paths>
      <Route path='/' element={<Index />} />
      <Route path='/breeds' element={<Breeds />} />
    </Paths>
  )
}

export default Routes
