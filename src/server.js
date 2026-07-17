require("dotenv").config();
console.log("env :", process.env);
const express = require("express"); //Common JS
const app = express(); //app express

const port = process.env.PORT || 8081; //port server (hardcode) .uat(user access testing) .prod

const path = require("path");
const hostname = process.env.HOSTNAME;
//Config template engine
//Khai báo nơi lưu trữ view
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Khai báo route
app.get("/", (req, res) => {
  res.send("Hi there");
});
app.get("/putigol", (req, res) => {
  res.render("sample");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
