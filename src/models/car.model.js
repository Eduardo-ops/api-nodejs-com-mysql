'user strict'

var db = require('./../../config/db.config')

var Car = function (car) {
    this.model = car.model
    this.board = car.board
}

Car.createCar = function (newCar, result) {
    db.query('INSERT INTO cars set ?', newCar, function (err, res) {
        if (err) {
            console.log('Error: ', err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertID)
        }
    })
}

Car.getAllCars = function (result) {
    db.query("Select * from cars", function (err, res) {
        if (err) {
            console.log("Error: ", err)
            result(null, err)
        } else {
            console.log('Cars :', res)
            result(null, res)
        }
    })
}

Car.getCarById = function (id, result) {
    db.query('Select * from cars where id = ?', id, function (err, res) {
        if (err) {
            console.log("Error: ", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Car.updateCar = function (id, car, result) {
    db.query('UPDATE cars SET model = ?, board = ? WHERE id = ?', [car.model, car.board, id], function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

Car.deleteCar = function (id, result) {
    db.query('DELETE FROM cars WHERE id = ?', [id], function (err, res) {
        if (err) {
            console.log('error:', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

module.exports = Car;