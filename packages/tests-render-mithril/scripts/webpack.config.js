/* global __dirname, process */
const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeModules = path.join(process.cwd(), "node_modules");

// Create a list of CSS files from Polythene components
const CSSFiles = glob.sync(`${nodeModules}/polythene-*/dist/*.css`)
  // Add test specific CSS files
  .concat(
    glob.sync(`${nodeModules}/tests-*/node_modules/test-*/node_modules/polythene-*/dist/*.css`)
  );

console.log("CSSFiles", CSSFiles);

module.exports = {

  context: path.resolve(__dirname, "../src"), 

  entry: Object.assign(
    {},
    {
      index: "../index.js",
    },
    CSSFiles.length ? { style : CSSFiles } : null
  ),

  resolve: {
    alias: {
      "polythene-theme": path.resolve(__dirname, "../src/theme.js")
    }
  },

  externals: {
    mithril: "m"
  },

  output: {
    path: path.resolve(__dirname, "../dist/js"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: require.resolve("style-loader"),
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
                localIdentName: "[local]---[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () =>
                  [
                    require("postcss-import")({addDependencyTo: webpack}),
                    require("postcss-cssnext")({browsers: ["> 1%", "last 2 versions", "IE 11"]}),
                    require("postcss-nested"),
                    require("postcss-browser-reporter")(),
                    require("postcss-reporter")(),
                  ],
                sourceMap: true,
              }
            }
          ]
        })
      },
    ]
  },

  plugins: [
  ],

  devtool: "source-map"

};
