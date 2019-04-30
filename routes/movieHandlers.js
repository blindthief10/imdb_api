const mongoose = require('mongoose');
const movieModel = require('../models/moviesModel.js');

const fetchAllMovies = async (req, res, next) => {
  try {
    const allMovies = await movieModel.find();
    res.status(200).json(allMovies);
  }catch (error) {
    next(error);
  }
}

const getDirectorMovies = async (req, res, next) => {
  const normalizeDirector = req.params.director.replace('_', ' ');
  try {
    const directorMovies = await movieModel.find({director: normalizeDirector}, {_id: 0, name: 1});
    directorMovies ? res.status(200).json({movies: directorMovies}) : res.status(404).json({message: `Director with name ${req.params.director} was not found`})
  }catch (error) {
    next(error);
  }
}

const getTopMovies = async (req, res, next) => {
  const filterBy = parseInt(req.params.howMany);
  try {
    const topMovies = await movieModel.find().sort({imdb_ratio: -1}).limit(filterBy).select('name imdb_ratio -_id')
    res.status(200).json({topMovies: topMovies});
  } catch(error) {
    next(error);
  }
}

const createMovie = async (req, res, next) => {
  try {
    await movieModel.create(req.body);
    res.status(201).json({message: `The movie with name ${req.body.name} was created!`});
  }catch (error) {
    next(error);
  }
}

const findMoviesBetween = async (req, res, next) => {
  try {
    const parseEarliest = parseInt(req.params.earliest);
    const parseLatest = parseInt(req.params.latest);
    const moviesReturned = await movieModel.find({productionYear: {$gt: parseEarliest, $lt: parseLatest}});
    res.status(200).json({movies: moviesReturned});
  }catch (error) {
    next(error);
  }
}

const combineMoviesActors = async (req, res, next) => {
  try {
    const moviesWithActors = await moviesModel.aggregate([ {
      $lookup: {
        from: 'actors',
        localField: 'name',
        foreignField: 'moviesPlayed',
        as: 'actorsPlayed' } } ]);
    res.status(200).json({info: moviesWithActors})

  }catch (error) {
    next(error);
  }
}

module.exports = {fetchAllMovies, getDirectorMovies, getTopMovies, createMovie, findMoviesBetween, combineMoviesActors};
