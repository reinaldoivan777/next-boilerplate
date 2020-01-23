const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
module.exports = withSass(
  withImages({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    }
  })
);
