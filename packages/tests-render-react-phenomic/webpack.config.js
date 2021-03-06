/*
Overrides default config at
https://github.com/phenomic/phenomic/blob/master/packages/plugin-bundler-webpack/src/webpack.config.js

Debug with:

DEBUG=phenomic:plugin:webpack yarn run start
*/

/* globals process */

import path from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const nodeModules = path.join(process.cwd(), "node_modules");

module.exports = config => ({
  entry: {
    [config.bundleName]: [
      process.env.PHENOMIC_ENV !== "static" &&
        require.resolve("webpack-hot-middleware/client"),
      process.env.PHENOMIC_ENV !== "static" &&
        require.resolve("react-hot-loader/patch"),
      "./src/index.js"
    ].filter(item => item)
  },
  output: {
    publicPath: "/",
    path: path.join(process.cwd(), "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          babelrc: false,
          presets: [require.resolve("@phenomic/babel-preset")],
          plugins: [
            require.resolve("react-hot-loader/babel"),
            require.resolve("babel-plugin-transform-object-assign")            
          ]
        }
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
                localIdentName: "[local]"
              }
            }
          ]
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "app.css",
      disable: process.env.PHENOMIC_ENV !== "static"
    }),
    process.env.PHENOMIC_ENV !== "static" &&
      new webpack.HotModuleReplacementPlugin(),
    process.env.NODE_ENV === "production" &&
      new webpack.optimize.UglifyJsPlugin()
  ].filter(item => item),

  resolve: {
    // react-native(-web) | react-primitives
    extensions: [".web.js", ".js", ".json"],
    alias: {
      // "react-native": "react-native-web",

      // to ensure a single module is used
      react: path.resolve(path.join(nodeModules, "react")),
      "react-dom": path.resolve(path.join(nodeModules, "react-dom")),
      "react-router": path.resolve(path.join(nodeModules, "react-router"))
    }
  },

  // eslint-disable-next-line max-len
  // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
});
