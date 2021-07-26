const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => console.log("Database is connected...."));
