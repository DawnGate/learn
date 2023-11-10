const HtmlWebpackPlugin = require("html-webpack-plugin");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const common = require("./webpack.common");

const { buildPath, templatePath, faviconPath } = require("./paths");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "/",
    path: buildPath,
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s(a|c)ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devtool: "eval-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: templatePath,
      favicon: faviconPath,
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 8888,
      openAnalyzer: true,
    }),
  ],
  devServer: {
    port: 3000,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
});
