const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 1011

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello word!!!")
})

const carRoutes = require('./src/routes/car.routes')

app.use('/api/v1/cars', carRoutes)

app.listen(port, () => {
    console.log(`Servidor sendo executado na porta: ${port}`)
})