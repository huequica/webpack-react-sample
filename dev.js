import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const src = path.resolve(__dirname, 'src');   // `src` ディレクトリのパス
const dist = path.resolve(__dirname, 'dist'); // `dist` ディレクトリのパス

export default {
  mode: 'development',
  // エントリーポイントのファイル
  entry: `${src}/index.jsx`,

  output: {
    path: dist,
    filename: 'bundled.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      filename: 'index.html'
    })
  ]
}