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
      <Typography variant='h4' marginBottom={4}>
        Breeds
      </Typography>

      {breedsLoading ? (
        <Spinner />
      ) : (
        <Grid container spacing={3}>
          {breeds.map((breed) => (
            <Grid item sm={6} md={4} key={breed.id}>
              <BreedCard breed={breed} />
            </Grid>
          ))}
        </Grid>
      )}
    </Page>
  )
}

export default Breeds
