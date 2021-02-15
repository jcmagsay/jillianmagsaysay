const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    alias: {
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
    extensions: [
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
  resolveLoader: {
    mainFields: ['loader', 'main'],
  },
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: process.env.NODE_ENV === 'production' ? '/assets/' : '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.j(s|sx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],

      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: "style-loader",
          },
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
          },
          {
            loader: 'postcss-loader',
            options: {
              options: {},
              plugins: () => {
                autoprefixer({
                  browsers: [
                    'last 3 versions',
                    '> 1%',
                    'IE >= 11',
                  ],
                });
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          // Compiles Sass to CSS
          'style-loader',
          'css-loader',
          {
            loader: "sass-loader",
            options: {},
          },
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     hmr: devMode,
          //   },
          // },
        ],
      },
      {
        test: /\.(ico|jpg|png|pdf)$/,
        exclude: /node_modules/,
        use: 'file-loader?name=assets/media/images/[name].[ext]',
      },
      {
        test: /\.(ttf)$/,
        exclude: /node_modules/,
        use: 'file-loader?name=assets/media/fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
}
