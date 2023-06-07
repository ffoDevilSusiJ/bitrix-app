

  const webpack = require('webpack');
const path = require('path');

const config = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
	https: true,
    port: 8080,
    onAfterSetupMiddleware: function (devServer) {
      devServer.app.post('*', (req, res) => {
        res.redirect(req.originalUrl);
      });
    },
    static: {
      directory: './dist',
    },
  },
};

module.exports = config;