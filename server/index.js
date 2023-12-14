const express = require('express')
const cors = require('cors')
const breedsRouter = require('./routers/breeds')

const app = express()

app.use(
  cors({
    origin: [process.env.REACT_APP_ROOT_PATH]
  })
)
app.use('/api/breeds', breedsRouter)

module.exports = app
