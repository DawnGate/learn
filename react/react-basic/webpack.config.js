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
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
        include: srcPath,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    port: 8080,
    open: false,
  },
};

module.exports = config;
