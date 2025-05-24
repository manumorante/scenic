const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const isProduction = process.env.NODE_ENV === 'production'

const plugins = [
  new HtmlWebpackPlugin({
    title: isProduction ? 'Production' : 'Development',
    template: './index.html'
  })
]

// Solo DefinePlugin en producción (Vercel)
if (isProduction) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(process.env.ASSET_PATH || '/'),
      'process.env.TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY || '')
    })
  )
} else {
  // Solo dotenv-webpack en desarrollo/local
  plugins.push(new Dotenv({ path: './.env' }))
}

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: './src/index.js'
  },
  devtool: isProduction ? false : 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: !isProduction }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: !isProduction }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: !isProduction }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.ASSET_PATH || '/',
    clean: true
  }
}
