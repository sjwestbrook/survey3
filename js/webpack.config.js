module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: './'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules, bower_components/,
        loader: 'babel'
      }
    ]
  }  
};