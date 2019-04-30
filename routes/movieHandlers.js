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
    const topMovies = await movieModel.find().sort({imdb_ratio: -1}).limit(filterBy).select('name director -_id')
    res.status(200).json({topMovies: topMovies});
  } catch(error) {
    next(error);
  }
}

module.exports = {fetchAllMovies, getDirectorMovies, getTopMovies};
