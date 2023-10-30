const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  target: "web",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 3001,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      shared: {
        react: {
          import: "react",
          shareKey: "react",
          shareScope: "default",
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
