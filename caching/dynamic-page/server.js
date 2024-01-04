const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/hello-world", (req, res) => {
  res.send("Hello World!!");
});

app.get("/", (req, res) => {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
