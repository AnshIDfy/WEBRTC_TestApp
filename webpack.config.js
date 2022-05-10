var path = require("path");

module.exports = {
  entry: "./js/main.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts-bundled.js"
  },
  resolve: {
    modules: [
      path.join(__dirname, "js/helpers")
    ]
  },
  module: {
    loaders: [
      {test: /\.hbs$/, loader: "handlebars-loader"}
    ]
  }
};

