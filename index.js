const express = require('express')
const mysql = require('mysql')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const app = express()
const port = 3001
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static('views'))

app.use('/', require('./routes/users'))

app.listen(port, () => {
  console.log(`App sendo executado em: http://localhost:${port}`)
})