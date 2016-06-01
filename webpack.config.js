const path = require('path')

const PATHES = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'test')
}

module.exports = {
  entry: path.join(PATHES.app, 'app.js'),
  output: {
    filename: 'bundle.js',
    path: PATHES.build
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?/,
        include: [ PATHES.app, PATHES.test ],
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?/,
        include: [ PATHES.app, PATHES.test ],
        loader: 'babel'
      }
    ]
  }
}
