import path from 'path';

const src = path.resolve(__dirname, 'src');   // `src` ディレクトリのパス
const dist = path.resolve(__dirname, 'dist'); // `dist` ディレクトリのパス

export default {
  mode: 'development',
  // エントリーポイントのファイル
  entry: `${src}/index.js`,

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
    extentions: ['.js', '.jsx']
  },

  plugins: []
}