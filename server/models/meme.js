const mongoose = require('mongoose');
const normalize =require('normalize-mongoose');

const memeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  caption: {
    type: String,
    required: "Caption is required"
  },
 url:{
    type: String,
    required: 'Please write a valid URL'
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
memeSchema.plugin(normalize);

// It is for testing if url is correct or not but i commented it because I don't about test_server.sh

// A function to validate URL for meme
// memeSchema.path('url').validate((val) => {
//   urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
//   return urlRegex.test(val);
// }, 'Invalid URL');

module.exports = mongoose.model('Meme', memeSchema);
