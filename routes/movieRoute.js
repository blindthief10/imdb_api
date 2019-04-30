const express = require('express');
const moviesRouter = express.Router();
const {fetchAllMovies, getDirectorMovies, getTopMovies} = require('./movieHandlers.js');

moviesRouter.get('/', fetchAllMovies);
moviesRouter.get('/:director', getDirectorMovies);
moviesRouter.get('/topMovies/:howMany', getTopMovies);

module.exports = moviesRouter;
