import cssnano from "cssnano";
import postcssPresetEnv from "postcss-preset-env";

export const plugins = [
  cssnano({
    preset: "default",
  }),
  postcssPresetEnv({ stage: 3 }),
];
