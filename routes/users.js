const express = require('express')
const mysql = require('mysql')
const request = require('request')

const router = express.Router()

var mysqlHost = process.env.MYSQL_HOST || 'localhost'
var mysqlUser = process.env.MYSQL_USER || 'root'
var mysqlPass = process.env.MYSQL_PASS || 'Omega_123'
var mysqlDB   = process.env.MYSQL_DB   || 'mutant'

const db = mysql.createPool({
  host: mysqlHost,
  user: mysqlUser,
  password: mysqlPass,
  database: mysqlDB
})

router.get('/', (req, res) => {
  res.render('index', {box: ''})
})

const urlApi = 'http://jsonplaceholder.typicode.com/users'

router.post('/baixar', function(req, res){

  request({
    url: urlApi,
    json: true
  }, (err, resp, data) => {
      console.log(data);     
      res.render('index', {box: JSON.stringify(data, null, 2)})
  })
})

router.post('/salvar', function(req, res){

  request({
    url: urlApi,
    json: true
  }, (err, resp, data) => {

      const filtro = data.filter(function (item) {
        return item.address.suite.includes('Suite')
      })

      const filtroNome = filtro.sort((a, b) => a.name.localeCompare(b.name))

      console.log(filtroNome)
      
      for (var i = 0; i < filtroNome.length; i++) {

          let post = {nome: filtroNome[i].name, username: filtroNome[i].username}
          let sql = 'INSERT INTO users SET?'
          let query = db.query(sql, post, (err, result) => {
              if (err) throw err
              console.log(result)
          })
      }
      res.send('Dados salvos, verifique as solicitações no terminal')

  })
})

module.exports = router