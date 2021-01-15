'use strict';

// express class
const app = require('./index');

// controller
const restaurantController = require('../controllers/restaurant');

app.router.delete('/restaurant/:id', restaurantController.deletedRestaurant);
app.router.post('/restaurant',       restaurantController.registerRestaurant);
app.router.put('/restaurant/:id',    restaurantController.editRestaurant);
app.router.get('/restaurant/:id',    restaurantController.getAllRestaurant);
app.router.get('/restaurant',        restaurantController.getByIdRestaurant);

module.exports = app.router;