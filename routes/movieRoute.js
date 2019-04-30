const express = require('express');
const moviesRouter = express.Router();
const fetchAllMovies = require('./movieHandlers.js');

moviesRouter.get('/', fetchAllMovies);

module.exports = moviesRouter;
