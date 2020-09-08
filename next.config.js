module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['url-loader'],
    });

    return config;
  } 
}