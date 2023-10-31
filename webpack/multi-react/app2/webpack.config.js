const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const path = require("path");

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  target: "web",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    port: 3002,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./Widget": "./src/Widget",
      },
      shared: {
        react: {
          requiredVersion: deps.react,
          import: "react",
          shareKey: "react",
          shareScope: "default",
          singleton: true,
        },
        "react-dom": {
          requiredVersion: deps["react-dom"],
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
