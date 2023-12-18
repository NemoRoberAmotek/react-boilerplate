import React from 'react'
import { Breed } from '../types/Breed'

const BreedCard = ({ breed }: { breed: Breed }) => {
  return (
    <div>
      <h5>{breed.name}</h5>
    </div>
  )
}

export default BreedCard
