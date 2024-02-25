const mongoose = require('mongoose');
require("dotenv").config();

let mongoDB = process.env.MONGODB_CONNSTRING;

////EXAMPLE////
// Make sure to create .env file and use an environment variable
console.log(mongoDB);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
