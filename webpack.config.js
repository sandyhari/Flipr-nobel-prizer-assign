const path = require("path");

module.exports = {
  entry: "./src/index.js",
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
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  // options for resolving module reqests
  resolve: { extensions: ["*", ".js", ".jsx"] },

  //telling webpack where it should bundle out the results
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist",
    filename: "bundle.js",
  },
};
