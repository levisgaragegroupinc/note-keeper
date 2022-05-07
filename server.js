const express = require("express");
const path = require("path");
const noteRoute = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

// for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for accessing static public files
app.use(express.static("public"));

app.use("/api/notes", noteRoute);

// GET route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
