const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  firstName: {type: String, required: true, trim: true, lowercase: true},
  lastName: {type: String, required: true, trim: true, lowercase: true},
  moviesPlayed: {type: [String], required: true}
}, {versionKey: false})

const actorModel = mongoose.model('actors', actorSchema);

module.exports = actorModel;
