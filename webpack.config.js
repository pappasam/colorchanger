const path = require('path')

const PATHES = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'test')
}

module.exports = {
  entry: path.join(PATHES.app, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: PATHES.build,
    publicPath: '/static/'
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
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react',
            'react-hmre'
          ]
        }
      }
    ]
  }
}
