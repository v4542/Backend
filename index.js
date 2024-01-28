require('dotenv').config()

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/v4542', (req, res) => {
    res.send('Hello v4542!')
  })

  app.get('/v3629', (req, res) => {
    res.send('<h1>Hello v3629!</h1>')
  })


app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${port}`)
})