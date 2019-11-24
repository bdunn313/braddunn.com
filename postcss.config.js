const postcssPresetEnv = require("postcss-preset-env");
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.tsx",
    // etc.
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = () => ({
  plugins: [
    tailwindcss(),
    postcssPresetEnv({
      stage: 2,
    }),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
});
