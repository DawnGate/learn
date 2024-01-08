const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.use("/static", express.static(path.join(__dirname, "public")));

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
