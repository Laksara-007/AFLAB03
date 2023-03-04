console.log("App.js is running!");

const fs = require("fs");
fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
  console.log("log 1");
});

//const fs = require("fs");
fs.writeFile("file.txt", "Hello World!2", function (err) {
  if (err) throw err;
  console.log("File saved!");
  console.log("log 2");
});
