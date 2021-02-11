const mongoose = require('mongoose');
// To be commented in production
// mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE,{useUnifiedTopology: true, useNewUrlParser: true});

module.exports.Meme = require('./meme');
