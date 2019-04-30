const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const moviesModel = require('./models/moviesModel.js');
const actorsModel = require('./models/actorsModel.js');
const allMovies = require('./movies.json');
const allActors = require('./actors.json');

const url = `mongodb://${process.env.NAME}:${process.env.PASSWORD}@ds149606.mlab.com:49606/imdb`

const mongoConnect = async () => {
  try {
    await mongoose.connect(url, {useNewUrlParser: true});
    console.log('Connected to Mongo lab');
    await actorsModel.insertMany(allActors);
    await mongoose.disconnect(url);
    console.log('Disconnected from mongo lab');
  }catch (error) {
    console.log(error);
  }
}

mongoConnect();
