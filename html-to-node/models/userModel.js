const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  password: String,
  company: String,
  contact: String,
  message: String,
});

module.exports = mongoose.model('User', userSchema);
