const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.DBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Database is Connected");
    } else {
      console.log(err);
    }
  }
);
