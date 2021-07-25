const express = require("express");
const router = express.Router();

//Model
const noteModel = require("../../models/Note");

//@route    GET api/notes
//@desc     Get All notes
//@access   Public
router.route("/").get(async (req, res) => {
  noteModel.find({}, (err, result) => {
    if (err) res.status(400).json("Error: " + err);
    res.send(result);
  });
});

//@route    POST api/notes
//@desc     Post a note
//@access   Public
router.route("/").post(async (req, res) => {
  const note = req.body;
  const Note = new noteModel(note);
  try {
    await Note.save();
    res.json("note added");
  } catch {
    res.status(400).json("Error: " + err);
  }
});

//@route    DELETE api/notes/:id
//@desc     Delete a note
//@access   Public
router.route("/:id").delete(async (req, res) => {
  try {
    await noteModel.deleteOne({ _id: req.params.id });
    res.json("Deleted Successfully");
  } catch {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
