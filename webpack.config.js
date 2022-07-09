import WindiCSSWebpackPlugin from "windicss-webpack-plugin";
import path from "path";
import "dotenv/config";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));
const config = {
  mode: process.env.APP_MODE,
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {},
  plugins: [new WindiCSSWebpackPlugin()],
};

export default config;
