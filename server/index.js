require("./dbconnect");
const express = require("express");
const cors = require("cors");
const noteModel = require("./models/Note");
const app = express();

app.get("/", async (req, res) => {
  const Note = new noteModel({ title: "note", content: "This is content" });
  try {
    await Note.save();
  } catch {
    console.log(err);
  }
  res.send("request successfull");
});
app.listen(3001, () => console.log("Server is running on port 3001"));
