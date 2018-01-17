const path = require('path')
const fs = require('fs')

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, err => {
  if (err) {
    console.log('server failed to listen on port 3000, exit')
    process.exit(1)
  } else {
    console.log('server listening on port 3000')
  }
})

