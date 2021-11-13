'use strict'

const Car = require('../models/car.model')

exports.createCar = function (req, res) {
    const newCar = new Car(req.body)

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, mesage: 'Por favor informe todos os campos obrigatórios.' })
    } else {
        Car.createCar(newCar, function (err, car) {
            if (err)
                res.send(err)
            res.json({ error: false, message: 'Carro adicionado com sucesso!', data: car })
        })
    }
}

exports.getAllCars = function (req, res) {
    Car.getAllCars(function (err, car) {
        console.log('car')
        if (err)
            res.send(err)
        console.log('res', car)
        res.send(car)
    })
}

exports.getCarById = function (req, res) {
    Car.getCarById(req.params.id, function (err, car) {
        if (err)
            res.send(err)
        res.json(car)
    })
}

exports.updateCar = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, mesage: 'Por favor informe todos os campos obrigatórios.' })
    } else {
        Car.updateCar(req.params.id, new Car(req.body), function (err, car) {
            if (err)
                res.send(err)
            res.json({ error: false, message: 'Carro atualizado com sucesso!' })
        })
    }
}

exports.deleteCar = function (req, res) {
    Car.deleteCar(req.params.id, function (err, car) {
        if (err)
            res.send(err)
        res.json({ error: false, mesage: 'Carro deletado com sucesso!' })
    })
}