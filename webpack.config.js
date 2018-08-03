let path = require('path');
let webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
  'dist'
];

let cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false,
  watch: true
};

const config = {
  entry: [
    'babel-polyfill',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        use: ['babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  }
};

module.exports = (env, argv) => {
  const MODE = argv.mode || 'development';

  if (MODE == 'development') {
    config.devtool = 'inline-cheap-module-source-map';
    config.watch = true
  }

  config.plugins = [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.DefinePlugin({
      MODE: JSON.stringify(MODE)
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: false
    })
  ];

  if (MODE === 'production') {
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            warnings: false
          },
        })
      ]
    }
  }

  return config;
};