module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-nested"), // Support nested CSS like Sass
    require("postcss-import"), // For @import support
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
