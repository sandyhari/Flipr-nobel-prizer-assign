const path = require("path");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //checks for .js and .jsx files
        exclude: /(node-modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[hash].[ext]",
        },
      },
    ],
  },

  // options for resolving module reqests
  resolve: { extensions: ["*", ".js", ".jsx", ".css"] },

  //telling webpack where it should bundle out the results
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist",
    filename: "bundle.js",
  },
};
