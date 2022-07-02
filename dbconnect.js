const mongoose = require("mongoose");
require("dotenv").config();

(async () => {
  try {
    await mongoose.connect(process.env.DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log("error : " + err);
  }
})();

const connection = mongoose.connection;

connection.once("open", () => console.log("Database is connected...."));
