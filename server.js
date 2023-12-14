require('dotenv').config()
const PORT = process.env.PORT || 8000
const server = require('./server/index.js')

module.exports = server.listen(PORT)
