const express = require('express');
const app = express();
const mongoConnect = require('./utilities/mongoConnect.js');
const morgan = require('morgan');
const moviesRouter = require('./routes/movieRoute.js');
const errorHandler = require('./utilities/errorHandler.js');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res, next) => res.status(200).send('This is the home page!'))
app.use('/movies', moviesRouter);

app.use(errorHandler);

app.listen(4000, () => console.log('Server is listening to the give port!'));
mongoConnect();
