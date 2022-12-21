const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    css({
      preset: "default",
    }),
    postcssPresetEnv({ stage: 1 }),
  ],
};
