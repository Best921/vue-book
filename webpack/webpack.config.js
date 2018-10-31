var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
  entry: {
    main: './main'
  },
  output: {
    path: path.join(__dirname,'./dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // }
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: {
      //     loaders: {
      //       css: ExtractTextPlugin.extract({
      //         use: 'css-loader',
      //         fallback: 'vue-style-loader'
      //       })
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    // 重命名提取后的CSS
    new ExtractTextPlugin({
      filename: "main.css"
    })
  ]
};

module.exports = config;