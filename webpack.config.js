module.exports = {
  entry: [
    './src/client/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  }
};
