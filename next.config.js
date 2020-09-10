const withTM = require('next-transpile-modules')(['bs-platform'])

module.exports = withTM({
  pageExtensions: ['jsx', 'js', 'bs.js'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['url-loader'],
    });

    return config;
  } 
})