const express = require('express');
const reviewsController = require('../controllers/reviewsController');

const reviewRoutes = express.Router();

reviewRoutes.get('/', reviewsController.showAll);
reviewRoutes.get('/:id', reviewsController.showOne);

module.exports = reviewRoutes;