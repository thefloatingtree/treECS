module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    globalObject: 'this',
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'ecs',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-optional-chaining']
        }
      }
    }]
  }
}