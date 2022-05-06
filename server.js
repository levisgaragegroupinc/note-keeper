const express = require("express");
const path = require("path");
const api = require("./routes/apiRoutes");
// const fs = require("fs");
const PORT = process.env.PORT || 3001;

const app = express();
// const uuid = require("uuid/v4"); // https://www.npmjs.com/package/uuid
// const { v4: uuidv4 } = require("uuid");

// for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

// for accessing static public files
app.use(express.static("public"));

// GET route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET notes route
// app.get("/api/notes", (req, res) => {
//   fs.readFile("/db/db.json")
//     .then((data) => res.json(JSON.parse(data)))
//     .catch((err) => res.status(500).json("Unalbe to read saved notes!"));
// });

// // GET notes route
// app.get("/api/notes", (req, res) => {
//   fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
//     if (err) throw err;
//     res.json(JSON.parse(data));
//   });
// });

// POST notes route
// app.post("/api/notes", (req, res) => {
//   fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       let newNote = req.body;
//       let notesArray = JSON.parse(data);
//       newNote.id = uuidv4();
//       notesArray.push(newNote);
//       const notesArrayString = JSON.stringify(notesArray, null, 4);

//       fs.writeFile("/db/db.json", notesArrayString, "utf8", (err) => {
//         if (err) {
//           res.status(500).json("Server error when adding new note!");
//           return;
//         } else console.info("Successfully saved new note!");
//       });
//       res.json(JSON.parse(notesArrayString));
//     }
//   });
// });

// POST notes route
// app.post("/api/notes", (req, res) => {
//   fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
//     if (err) throw err;
//     let newNote = req.body;
//     let notesArray = JSON.parse(data);
//     newNote.id = uuidv4();
//     notesArray.push(newNote);
//     console.log(notesArray);
//     let notesArrayString = JSON.stringify(notesArray);
//     console.log(typeof notesArrayString);
//     fs.writeFile(path.join(__dirname, "/db/db.json"), notesArrayString);
//   });
// });

// POST notes route
// app.post("/api/notes", function (req, res) {
//   fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
//     if (err) throw err;
//     let newNote = req.body;
//     //let id = Math.floor(Math.random() * 1000);
//     let notesArr = JSON.parse(data);
//     let id = notesArr[notesArr.length - 1].id + 1;
//     newNote.id = id;
//     notesArr.push(newNote);
//     //req.body + `{"id":"${id}"}`);
//     let notesString = JSON.stringify(notesArr);
//     console.log(typeof notesString);
//     fs.writeFileSync(path.join(__dirname, "/db/db.json"), notesString);
//   });
// });

// // DELETE notes route
// app.delete("/api/notes/:id", (req, res) => {
//   fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       let newArray = [];
//       let notesArray = JSON.parse(data);
//       for (i = 0; i < notesArray.length; i++) {
//         notesArray[i].id != req.params.id
//           ? newArray.push(notesArray[i]) // could use the filter method here.
//           : console.log(`Note ID ${notesArray[i]} will be deleted.`);
//       }
//       fs.writeFile(
//         "/db/db.json",
//         JSON.stringify(newArray, null, 4),
//         (writeErr) =>
//           writeErr
//             ? console.error(writeErr)
//             : console.info("Successfully deleted note!")
//       );
//     }
//   });
// });

// add routes here
// require("./routes/api")(app);
// require("./routes/apimore")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
