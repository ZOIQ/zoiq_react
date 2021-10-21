/**********************************************************************************
 *                         WEBPACK / REACT HMR TUTORIAL:                          *
 * HTTPS://BLOG.LOGROCKET.COM/VERSATILE-WEBPACK-CONFIGURATIONS-REACT-APPLICATION/ *
 **********************************************************************************/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./index.js",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    static: "./dist",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.hbs",
      inject: "body",
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["react-refresh/babel"],
            presets: ["@babel/preset-env", "@babel/preset-react"],
            comments: false,
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.hbs$/,
        use: { loader: "handlebars-loader" },
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      maxSize: 200000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "vendor",
          chunks: "all",
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
