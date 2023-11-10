const webpack = require("webpack");

const { srcPath } = require("./paths");

module.exports = {
  entry: {
    // 1 entry point => spa
    app: `${srcPath}/index.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        include: srcPath,
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
  ],
  resolve: {
    modules: [srcPath, "node_modules"],
    extensions: [".js", ".jsx", ".scss", ".css"],
  },
  target: "web",
};
