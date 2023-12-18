const path = require('path');
const os = require('os');
const crypto = require('crypto');
const stream = require('stream');

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      },
    },
  },
};
