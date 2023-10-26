const path = require("path");
const rootDir = path.resolve(__dirname);
const publicPath = path.resolve(rootDir, "public");
const srcPath = path.resolve(rootDir, "src");

const outPath = path.resolve(rootDir, "dist");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin, ProvidePlugin } = require("webpack");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: srcPath,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${publicPath}/index.html`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${srcPath}/service-worker.js`, to: "service-worker.js" },
      ],
    }),
    new ProvidePlugin({
      process: "process/browser",
    }),
    new DefinePlugin({
      "process.env.VERSION": JSON.stringify("1.1.1"),
    }),
  ],
};

module.exports = config;
