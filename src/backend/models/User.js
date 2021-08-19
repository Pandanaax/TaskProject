var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  first_name: {
    type: String,
    unique: true,
    required: true,
  },
  lastName: {
    type: String,
    unique: true,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
