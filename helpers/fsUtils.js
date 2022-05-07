const fs = require("fs");
const util = require("util");

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

const readAndDeleteNote = (noteId, file, res) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const noteData = JSON.parse(data);
      let noteList = [];
      console.log(`The note ID is: ${noteId}`);
      for (let i = 0; i < noteData.length; i++) {
        if (noteData[i].id != noteId) {
          noteList.push(noteData[i]);
        }
      }
      writeToFile(file, noteList);
    }
  });
};

module.exports = {
  readFromFile,
  writeToFile,
  readAndAppend,
  readAndDeleteNote,
};
