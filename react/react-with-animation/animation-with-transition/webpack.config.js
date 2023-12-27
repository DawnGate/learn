const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const rootDir = path.resolve(__dirname);

module.exports = {
  mode: "development",
  entry: `${rootDir}/index.js`,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
        include: rootDir,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${rootDir}/public/index.html`,
    }),
  ],
  devServer: {
    port: 3001,
    open: false,
    hot: true,
  },
};
