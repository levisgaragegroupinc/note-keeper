const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const uuid = require("uuid");

const PORT = process.env.PORT || 3001;

// for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for accessing static public files
app.use(express.static("public"));

// GET notes
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET route
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET notes route
app.get("/api/notes", (req, res) => {
  fs.readFile("/db/db.json")
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => res.status(500).json("Unalbe to read saved notes!"));
});

// POST notes route
app.post("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let newNote = req.body;
      let notesArray = JSON.parse(data);
      newNote.id = uuid();
      console.log(newNote.id);
      console.log(newNote);
      notesArray.push(newNote);
      const notesArrayString = JSON.stringify(notesArray, null, 4);

      fs.writeFile("/db/db.json", notesArrayString, (err) => {
        if (err) {
          res.status(500).json("Server error when adding new note!");
          return;
        } else console.info("Successfully saved new note!");
      });
    }
  });
});

// DELETE notes route
app.delete("/api/notes/:id", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let newArray = [];
      let notesArray = JSON.parse(data);
      for (i = 0; i < notesArray.length; i++) {
        notesArray[i].id != req.params.id
          ? newArray.push(notesArray[i]) // could use the filter method here.
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
// require("./routes/api")(app);
// require("./routes/apimore")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
