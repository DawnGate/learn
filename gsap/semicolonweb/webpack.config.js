const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const outputPath = path.resolve(__dirname, "bundle");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: outputPath,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    hot: true,
    port: 3001,
  },
};
