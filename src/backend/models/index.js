var mongoose = require("mongoose");
var User = require("./User");
var Task = require("./Task");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Task };

module.exports = { models, connectDb };
