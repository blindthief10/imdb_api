const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const url = `mongodb://${process.env.USER}:${process.env.PASSWORD}@ds149606.mlab.com:49606/imdb`;

const mongoConnect = async () => {
  try {
    await mongoose.connect(url, {useNewUrlParser: true});
    console.log('Connected to Mongo lab');
  }catch (error) {
    console.log(error);
  }
}

module.exports = mongoConnect;
