const express = require('express');
const actorsRouter = express.Router();
const {deleteActor, updateActor, deleteByMovie} = require('./actorHandlers.js');

actorsRouter.delete('/deleteActor/:lastname', deleteActor);
actorsRouter.put('/updateActor/:lastname', updateActor);
actorsRouter.delete('/deleteActorFromMovies/:movie', deleteByMovie);

module.exports = actorsRouter;
