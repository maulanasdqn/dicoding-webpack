import WindiCSSWebpackPlugin from "windicss-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "dotenv/config";

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));
const config = {
  mode: process.env.APP_MODE,
  entry: "./src/main.js",
  resolve: {
    fallback: {
      os: false,
      path: false,
    },
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][text]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /.direnv/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resouce",
      },
    ],
  },
  plugins: [
    new WindiCSSWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Dicoding Submision | Maulana Sodiqin",
      filename: "index.html",
      template: "./src/main.html",
    }),
  ],
};

export default config;
