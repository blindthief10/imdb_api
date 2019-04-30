const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true, lowercase: true},
  productionYear: {type: Number, required: true, max: 2020},
  imdb_ratio: {type: Number, required: true, min: 0, max: [10, 'The imdb_ratio cannot be more than 10']},
  director: {type: String, required: true}
}, {versionKey: false})

const movieModel = mongoose.model('movies', movieSchema);

module.exports = movieModel;
