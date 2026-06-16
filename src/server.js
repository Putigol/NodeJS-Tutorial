// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
require("dotenv").config();
console.log("env :", process.env);
const express = require("express"); //Common JS
const app = express(); //app express

const port = process.env.PORT || 8888; //port server (hardcode) .uat(user access testing) .prod

const path = require("path");
const hostname = process.env.HOSTNAME;
//Config template engine
//Khai báo nơi lưu trữ view
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// Khai báo route
app.get("/putigol", (req, res) => {
  // res.send(`<h1>Hello World</h1>`);
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
