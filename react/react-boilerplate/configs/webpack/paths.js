const path = require("path");

// __dirname -> directory path of the file
// process.cwd -> directory path of current node working
const rootDir = path.resolve(process.cwd());
const publicPath = path.resolve(rootDir, "public");

console.log(rootDir);

module.exports = {
  publicPath,
  srcPath: path.resolve(rootDir, "src"),
  buildPath: path.resolve(rootDir, "build"),
  templatePath: `${publicPath}/template.html`,
  faviconPath: `${publicPath}/favicon.ico`,
};
