
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BandleAnalyzerPlugin = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  devServer: {
    static: './dist',

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Many Blogs',
    }),
    new BandleAnalyzerPlugin.BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ]
  }
}














