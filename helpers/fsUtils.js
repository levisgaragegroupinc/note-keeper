const fs = require("fs");
const util = require("util");
// const { v4: uuidv4 } = require("uuid");

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const readAndDeleteNote = (id, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const noteListData = JSON.parse(data);
      const newNoteList = noteListData.filter(noteListData.id != id);
      writeToFile(file, newNoteList);
    }
  });
};

module.exports = {
  readFromFile,
  writeToFile,
  readAndAppend,
  readAndDeleteNote,
};
