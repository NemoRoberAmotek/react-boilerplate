import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import useFetchResource from '../hooks/useFetchResource'
import { Breed } from '../types/Breed'
import { Typography } from '@mui/material'
import Spinner from '../components/Spinner'
import BreedCard from '../components/BreedCard'
import { Grid, Pagination, Stack } from '@mui/material'

const Breeds = () => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(12)
  const [totalPages, setTotalPages] = useState(1)

  const [allBreeds, allBreedsLoading] = useFetchResource<Breed[]>('/breeds')

  const [breeds, breedsLoading] = useFetchResource<Breed[]>('/breeds', [page], {
    page: page - 1,
    limit: limit
  })

  useEffect(() => {
    !allBreedsLoading && setTotalPages(Math.ceil(allBreeds.length / limit))
  }, [allBreedsLoading])

  return (
    <Page>
      <Typography variant='h4' marginBottom={4}>
        Breeds
      </Typography>

      {breedsLoading ? (
        <Spinner />
      ) : (
        <>
          <Grid container spacing={3}>
            {breeds.map((breed) => (
              <Grid item sm={6} md={4} key={breed.id}>
                <BreedCard breed={breed} />
              </Grid>
            ))}
          </Grid>
          <Stack alignItems={'center'} marginTop={3}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_event: React.ChangeEvent<unknown>, page: number) => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setPage(page)
              }}
            />
          </Stack>
        </>
      )}
    </Page>
  )
}

export default Breeds
