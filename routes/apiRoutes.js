const note = require("express").Router();
// const express = require("express");
// const fs = require("fs");
// const path = require("path");
const {
  readFromFile,
  writeToFile,
  readAndAppend,
  readAndDeleteNote,
} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

//GET route for retrieving all notes
note.get("/", (req, res) => {
  console.info(`${req.method} request received to retrieve all notes.`);

  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST notes route for adding new notes
note.post("/", (req, res) => {
  console.info(`${req.method} request received to add a new note.`);
  const { title, text, id } = req.body;
  if (title && text && id) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    readAndAppend(newNote, "./db/db.json");
    const response = {
      status: "success",
      body: newNote,
    };
    res.json(response);
  } else {
    res.json("Error in posting feedback");
  }
});

// DELETE route for deleting a note
note.delete("/:id", (req, res) => {
  console.info(
    `${req.method} request received to delete a note id: ${req.body.id}`
  );

  readAndDeleteNote(id, "./db/db.json");
  res.json("Note deleted successfully!");
});

module.exports = note;
