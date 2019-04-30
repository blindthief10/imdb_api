const express = require('express');
const moviesRouter = express.Router();
const {fetchAllMovies, getDirectorMovies, getTopMovies, createMovie, findMoviesBetween, combineMoviesActors} = require('./movieHandlers.js');

moviesRouter.get('/', fetchAllMovies);
moviesRouter.get('/:director', getDirectorMovies);
moviesRouter.get('/topMovies/:howMany', getTopMovies);
moviesRouter.post('/', createMovie);
moviesRouter.get('/moviesBetween/:earliest/:latest', findMoviesBetween);
moviesRouter.get('/moviesWithActors', combineMoviesActors);

module.exports = moviesRouter;
