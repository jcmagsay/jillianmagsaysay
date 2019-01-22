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

const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
  'mode': process.env.NODE_ENV || 'development',
  'resolve': {
    'alias': {
      Scripts: path.resolve(__dirname, 'src/js'),
      Media: path.resolve(__dirname, 'src/assets/media'),
      Atoms: path.resolve(__dirname, 'src/js/atoms'),
      Molecules: path.resolve(__dirname, 'src/js/molecules'),
      Helpers: path.resolve(__dirname, 'src/js/helpers'),
      Environment: path.resolve(__dirname, 'src/js/environment'),
      Ecosystems: path.resolve(__dirname, 'src/js/ecosystems'),
      Reducers: path.resolve(__dirname, 'src/reducers'),
      Ducks: path.resolve(__dirname, 'src/ducks'),
      Routes: path.resolve(__dirname, 'src/routes'),
      Store: path.resolve(__dirname, 'src/store'),
      Styles: path.resolve(__dirname, 'src/assets/styles'),
    },
    'extensions': [
      '.js',
      '.json',
      '.jsx',
      '.scss',
      '.css',
      '.jpg',
      '.png',
      '.ico',
      '.ttf',
      '.pdf',
    ],
  },
  'resolveLoader': {
    'moduleExtensions': ['-loader'],
    'mainFields': ['loader', 'main'],
  },
  'devtool': 'source-map',
  'entry': './src/index.js',
  'output': {
    'path': path.resolve(__dirname, 'public/assets'),
    'publicPath': process.env.NODE_ENV === 'production' ? '/assets/' : '/',
    'filename': 'bundle.js',
  },
  'module': {
    'rules': [
      {
        'test': /\.(jsx)$/,
        'exclude': /node_modules/,
        'use': [
          { 'loader': 'babel' },
        ],

      },
      {
        'test': /\.(js)$/,
        'exclude': /node_modules/,
        'use': [
          { 'loader': 'babel' },
        ],

      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: `style!css!sass!${path.resolve('loaders/inject-global-scss')}`,
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
  'plugins': [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.LoaderOptionsPlugin({
      'options': {
        'postcss': [
          autoprefixer({
            'browsers': [
              'last 3 versions',
              '> 1%',
              'IE >= 11',
            ],
          }),
        ],
      },
    }),
  ],
  'devServer': {
    'historyApiFallback': true,
  },
}
