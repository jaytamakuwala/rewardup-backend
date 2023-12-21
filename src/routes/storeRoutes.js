const express = require('express');
const storeRoutes = express.Router();
const storeController = require('../controllers/storeController');

storeRoutes.get('/stores/:name', storeController.getAllStores);

module.exports = storeRoutes;
