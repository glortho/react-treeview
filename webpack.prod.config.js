var path = require('path');

// currently, this is for bower
var config = {
  entry: {
    index: './src/react-treeview.jsx',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'react-treeview.js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)/,
      loader: 'babel',
    }],
  },
  plugins: [],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
};

module.exports = config;
