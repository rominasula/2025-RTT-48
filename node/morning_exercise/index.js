
// console.log("Hello World");

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/greeting", (req, res) => {
  res.send("Hello, stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Wow! Hello there, ${req.params.name}`);
});