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

module.exports = fetchAllMovies;
