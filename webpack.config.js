const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve("./src/loader1.js"),
            options: {
              from: "loader1"
            }
          },
          {
            loader: path.resolve("./src/loader.js"),
            options: {
              from: "loader"
            }
          }
        ]
      }
    ]
  }
};
