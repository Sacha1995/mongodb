const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  userName: String,
  age: Number,
  isHappy: Boolean,
});

module.exports = { userSchema };
