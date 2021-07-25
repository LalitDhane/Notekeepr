require("./dbconnect");
const express = require("express");
const cors = require("cors");
const app = express();
const notes = require("./Routes/api/notes");

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/notes", notes);

app.listen(3001, () => console.log("Server is running on port 3001"));
