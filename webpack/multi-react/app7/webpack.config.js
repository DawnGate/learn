const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  name: "vue3-webpack",
  mode: "development",
  cache: false,
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".vue", ".jsx", ".js"],
    alias: {
      vue: "@vue/runtime-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new ModuleFederationPlugin({
      name: "app7",
      filename: "remoteEntry.js",
      exposes: {
        "./Widget": "./src/components/Widget",
        "./loadWidget": "./src/components/loadWidget",
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    hot: true,
    port: 3007,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
};
