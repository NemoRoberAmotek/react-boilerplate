import React from 'react'
import { Breed } from '../types/Breed'
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardActions,
  IconButton,
  CardMedia,
  CardContent,
  Stack,
  Typography
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import { theme } from '../theme'
import DataBox from './DataBox'
import styled from 'styled-components'

const BreedCard = ({ breed }: { breed: Breed }) => {
  return (
    <StyledCard variant={'outlined'} sx={{ height: '100%' }}>
      <CardHeader
        title={<Typography fontWeight={'bold'}>{breed.name}</Typography>}
        subheader={breed.country_code}
        avatar={
          <Avatar sx={{ backgroundColor: theme.palette.secondary.main }}>
            {breed.name.substring(0, 2)}
          </Avatar>
        }
      />
      <CardMedia
        component='img'
        image={breed.image.url}
        height={240}
        alt={breed.name}
        sx={{ objectPosition: 'top' }}
      />
      <StyledCardContent>
        <DataBox label='Bred for' data={breed.bred_for} />
        <DataBox label='Temperament' data={breed.temperament} />
      </StyledCardContent>
      <CardActions>
        <Stack direction='row' justifyContent={'space-between'} width={'100%'}>
          <Stack direction='row'>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </Stack>
          <Button size='small'>Learn More</Button>
        </Stack>
      </CardActions>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StyledCardContent = styled(CardContent)`
  height: 100%;
`

export default BreedCard
