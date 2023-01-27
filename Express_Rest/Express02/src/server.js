const express = require('express')

const app = express()

app.get('/course', (req, res) => {
  res.status(200)
  res.send({ name: 'NODE API', desc: 'LEARN NODE.JS' })
})

module.exports = app
