const path = require("path");

const rootDir = path.resolve(__dirname);
const srcPath = path.resolve(rootDir, "src");

const config = {
  mode: "development",
  entry: `${srcPath}/index.js`,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        exclude: /node_modules/,
        include: srcPath,
        test: /\.js$/,
      },
    ],
  },
  devServer: {
    port: 8080,
    open: false,
  },
};

module.exports = config;
