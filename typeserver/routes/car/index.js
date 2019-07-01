const express = require('express');

const router = express.Router();

const controller = require('./car.controller');

router.get('/', controller.getCars);
router.post('/', controller.addCar);
router.get('/:email', controller.getUserCars);
router.post('/add', controller.addUserCar);

module.exports = router;
