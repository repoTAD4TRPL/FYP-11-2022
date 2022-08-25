const express = require('express')
const createError = require('http-errors')

require('dotenv').config()
const { middlewares } = require('./middlewares')
const routers = require('./routes')
const app = express()

middlewares(app)
routers(app)


app.use((req, res, next) => {
  const error = createError.NotFound()
  next(error)
})

app.use((error, req, res, next) => {
  res.statusCode = error.statusCode;
  res.json({
    statusCode: error.statusCode,
    message: error.message
  })
})

app.listen(process.env.PORT, () => {
  console.info(`Server running on port ${process.env.PORT}`)
})