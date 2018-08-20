const express = require('express');
const reviewsController = require('../controllers/reviewsController');

const reviewRoutes = express.Router();

reviewRoutes.get('/podcast/id', reviewsController.showAll);
reviewRoutes.get('/:id', reviewsController.showOne);

module.exports = reviewRoutes;