const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const uuid = require("uuid/v4");

const PORT = process.en.PORT || 3001;

// for accessing static public files
app.use(express.static("public"));

// for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET notes route
app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedNotes = JSON.parse(data);
    }
  });
});

// POST notes route
app.post("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let newNote = req.body;
      let notesArray = JSON.parse(data);
      newNote.id = uuid();
      notesArray.push(newNote);

      fs.writeFile(
        "/db/db.json",
        JSON.stringify(notesArray, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info("Successfully saved new note!")
      );
    }
  });
});

// DELETE notes route
app.delete("/api/notes/:id", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let newArray = [];
      let notesArray = JSON.parse(data);
      for (i = 0; i < notesArray.length; i++) {
        notesArray[i].id != req.params.id
          ? newArray.push(notesArray[i])
          : console.log(`Note ID ${notesArray[i]} will be deleted.`);
      }
      fs.writeFile(
        "/db/db.json",
        JSON.stringify(newArray, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info("Successfully deleted note!")
      );
    }
  });
});

// add routes here
require("./routes/api")(app);
require("./routes/apimore")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
