# Note Keeper Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Description

The purpose of this project was to create a server backend using Express.js to store notes entered into the application by the user so that they would persist over a page load and across devices. The application also had to be deployed to a remote web server.

# Installation

No installation is necessary to use this note application as a live version is deployed using Heroku. To make your own application install node.js, Express.js, npm uuid package and npm util if not already installed with node.js. Download the files from this repository including the db, helpers, node_modules, public, routes and the server and package json files from this repository or create your own.

Install Node: [Node.js](https://nodejs.org/en/download/).

Install Express: [Express.js](https://expressjs.com/).

Install UUID: [uuid](https://www.npmjs.com/package/uuid).

Install util: [util](https://www.npmjs.com/package/util). _not required to install if running in node.js._

# Appearance

![Note Interface](./public/assets/images/note1.png)

![Saved Note](./public/assets/images/note2.png)

# Usage

Use this applicaiton to create and save basic text notes that include a title and a body. Upon loading the page any saved notes in the database will be displayed.

# Live page

Note-Keeper: [Live page](https://glacial-plains-24658.herokuapp.com/).

## Credits

Credits to Node.js, Express.js, uuid npm package, bootstrap, fontawesome, and Heroku for hosting the application. The front-end code, including the HTML, CSS, and index.js in the public folder were supplied by UW Full Stack Web Development course. This repository also uses code from the UW course files: activity 22-Stu_Modular_Routing.

## License

Use of this application is covered under MIT and is available for general use.
