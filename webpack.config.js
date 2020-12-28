const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'helpers': path.resolve(__dirname, 'src/helpers'),
      'images': path.resolve(__dirname, 'src/images'),
    },
    extensions: [ '.jsx', '.js', '.scss', '.json' ],
  },
}
