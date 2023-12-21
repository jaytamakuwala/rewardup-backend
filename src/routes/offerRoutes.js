const express = require('express');
const offerRoutes = express.Router();
const offerController = require('../controllers/offerController');

offerRoutes.get('/offers', offerController.getAllOffers);

module.exports = offerRoutes;
