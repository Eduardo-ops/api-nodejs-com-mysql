'user strict'

const mysql = require('mysql')

// Conexão local com mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dealership'
})

connection.connect(function (err) {
    if (err) throw err
    console.log('Conectado ao banco de dados!')
})

module.exports = connection