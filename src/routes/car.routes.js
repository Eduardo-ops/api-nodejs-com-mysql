const express = require('express')
const router = express.Router()
const CarController = require('../controllers/car.controller');

router.get('/', CarController.getAllCars)
router.get('/:id', CarController.getCarById)
router.post('', CarController.createCar)
router.put('/:id', CarController.updateCar)
router.delete('/:id', CarController.deleteCar)

module.exports = router