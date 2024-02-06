module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/WhatsTheWeather/" : "/",
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
