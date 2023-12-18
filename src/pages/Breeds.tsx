import React from 'react'
import Page from '../components/Page'
import useFetchResource from '../hooks/useFetchResource'
import { Breed } from '../types/Breed'
import { Typography } from '@mui/material'
import Spinner from '../components/Spinner'
import BreedCard from '../components/BreedCard'
import { Grid } from '@mui/material'

const Breeds = () => {
  const [breeds, breedsLoading] = useFetchResource<Breed[]>('/breeds', [], {
    page: 1,
    limit: 10
  })

  return (
    <Page>
      <Typography variant='h4'>Breeds</Typography>
      <Grid>
        {breedsLoading ? (
          <Spinner />
        ) : (
          breeds.map((breed) => <BreedCard breed={breed} key={breed.id} />)
        )}
      </Grid>
    </Page>
  )
}

export default Breeds
