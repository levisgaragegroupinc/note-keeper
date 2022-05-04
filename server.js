const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.en.PORT || 3001;

// for accessing static public files
app.use(express.static("public"));

// for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// add routes here
require("./routes/api")(app);
require("./routes/apimore")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
