module.exports = {
  entry: './index2.js',
  output: {
    filename: 'bundle2.js',
    path: './'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules, bower_components/,
        loader: 'babel'
      },
      {
        test: /\.css$/, loader: "style!css!less"
      }
    ]
  }  
};