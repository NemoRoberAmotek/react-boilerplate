const breedsRouter = require('express').Router()

breedsRouter.get('/', async (req, res) => {
  const response = await fetch(`${process.env.API_ROOT_PATH}/breeds`, {
    headers: {
      'x-api-key': process.env.DOGS_API_KEY
    }
  })

  const data = await response.json()

  res.send(data)
})

module.exports = breedsRouter
