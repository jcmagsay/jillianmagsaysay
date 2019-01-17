const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

const SRC_PATH = path.resolve(__dirname, './src');

module.exports = {
  'devtool': 'source-map',
  'entry': './src/index.js',
  'output': {
    'path': path.resolve('public/assets'),
    'publicPath': process.env.NODE_ENV === 'production' ? '/assets/' : '/',
    'filename': 'bundle.js',
  },
  'module': {
    'rules': [
      {
        'test': /\.js$/,
        'exclude': [/node_modules/],
        'use': [{
          'loader': 'babel',
          'options': { presets: ['es2015', 'react', 'stage-0' ] },
        }],
      },
      {
        'test': /\.jsx$/,
        'use': [{
          'loader': 'babel',
        }],
        'exclude': /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass!' + path.resolve('loaders/inject-global-scss'),
      },
      {
        'test': /\.(ico|jpg|png|pdf)$/,
        'exclude': /node_modules/,
        'use': 'file?name=media/images/[name].[ext]',
      },
      {
        'test': /\.(ttf)$/,
        'exclude': /node_modules/,
        'use': 'file?name=media/fonts/[name].[ext]',
      },
    ],
  },
  'resolve': {
    'alias': {
      'media': `${SRC_PATH}/assets/media`,
      'styles': `${SRC_PATH}/assets/styles`,
      'client': `${SRC_PATH}/client`,
      'atoms': `${SRC_PATH}/client/atoms`,
      'components': `${SRC_PATH}/client/components`,
      'helpers': `${SRC_PATH}/client/helpers`,
      'icons': `${SRC_PATH}/client/icons`,
      'landmarks': `${SRC_PATH}/client/landmarks`,
      'layout': `${SRC_PATH}/client/layout`,
      'pages': `${SRC_PATH}/client/pages`,
      'routes': `${SRC_PATH}/routes`,
    },
    'extensions': [ '.js', '.json', '.jsx', '.scss', '.jpg', '.png', '.ico', '.ttf', '.pdf' ],
  },
  'resolveLoader': {
    'moduleExtensions': ['-loader'],
  },
  'plugins': [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.LoaderOptionsPlugin({
      'options': {
        'postcss': [
          autoprefixer({
            'browsers': ['last 3 versions', '> 1%', 'IE >= 11'],
          }),
        ],
      },
    }),
  ],
  'devServer': {
    'historyApiFallback': true,
  },
}
