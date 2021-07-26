require("./dbconnect");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const notes = require("./Routes/api/notes");
const port = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(cors());

//use Routes
app.use("/api/notes", notes);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(port, () => console.log("Server is running on port 3001"));
