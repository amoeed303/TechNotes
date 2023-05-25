const User = require("../models/User");
const Note = require("../models/Note");

const asyncHandler = require("express-async-handler");
//controller functions

// @desc Get all notes
// @route Get /notes
//@access Private
const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find().lean();
  if (!notes?.length) {
    return res.status(400).json({ message: "No notes Foound" });
  }
  // Add username to each note before sending the response
  // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE
  //saving this yt  link for future goood discussion there
  // You could also do this with a for...of loop
  const notesWithUser = await Promise.all(
    notes.map(async (note) => {
      const user = await User.findById(note.user).lean().exec();
      return { ...note, username: user.username };
    })
  );
  res.json(notesWithUser);
});

// @desc POST a notes
// @route POST/notes
//@access Private
const createNewNote = asyncHandler(async (req, res) => {});

// @desc Update a note
// @route PATCH/notes
//@access Private
const updateNote = asyncHandler(async (req, res) => {});

// @desc Delete a note
// @route DELETE/notes
//@access Private
const deleteNote = asyncHandler(async (req, res) => {});

module.exports = {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
};
