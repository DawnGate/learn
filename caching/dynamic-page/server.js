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

app.get("/blogs", function (req, res) {
  const blogLinks = [
    "✨ Top 10 tools to learn what's going on in your app",
    "How to build your own SaaS business",
    "10 Must-Know Git Commands for Every Developer",
  ];
  res.render("pages/blogs", { blogLinks: blogLinks });
});

app.get("/blogs/:blogId", function (req, res) {
  res.render("pages/blog-with-id", { blogId: req.params.blogId });
});

app.use("/static", express.static(path.join(__dirname, "public")));

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
