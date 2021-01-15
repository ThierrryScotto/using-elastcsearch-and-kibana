'use strict'

// dependecies
const router = require('./routes/index');

// routes
const restaurant = require('./routes/_restaurant');

// constant
const basePath = '/v1';

router.express.use(`${basePath}`, restaurant);
