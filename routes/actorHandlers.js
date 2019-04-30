const mongoose = require('mongoose');
const actorsModel = require('../models/actorsModel.js');

const deleteActor = async (req, res, next) => {
  try {
    const actorToBeDeleted = await actorsModel.findOneAndDelete({lastName: req.params.lastname});
    actorToBeDeleted ? res.status(200).json({message: `The actor with lastname ${req.params.lastname} was deleted`}) : res.status(404).json({message: `The actor with lastname ${req.params.lastname} was not found`})
  }catch (error) {
    next(error);
  }
}

const updateActor = async (req, res, next) => {
  try {
    const updatedActor = await actorsModel.findOneAndUpdate({lastName: req.params.lastname}, req.body, {new: true});
    updatedActor ? res.status(200).json({message: 'The actor was updated'}) : res.status(404).json({message: 'No actor waas found'})
  }catch (error) {
    next(error);
  }
}

const deleteByMovie = async (req, res, next) => {
  try {
    const deleteActor = await actorsModel.findOneAndDelete({moviesPlayed: {$elemMatch: {$eq: req.params.movie}}});
    deleteActor ? res.status(202).json({message: 'The actor was deleted'}) : res.status(404).json({message: 'Actor was not found'})
  }catch(error) {
    next(error);
  }
}

module.exports = {deleteActor, updateActor, deleteByMovie};
