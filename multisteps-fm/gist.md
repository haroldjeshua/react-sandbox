# Use Tailwind Colors as CSS Variables

Tailwind plugin to use each Tailwind color into a global CSS variable.

Inside your `tailwind.config.cjs`:

```js
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

module.exports = {
  content: {},
  theme: {},
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
```

This is from [builduilabs](https://github.com/builduilabs/framer-motion-recipes) that I have previously encountered and I think it's very handy for incorporating colors if we want it to use manually or on some obscure cases that Tailwind currently doesn't implement, so I made it as a gist. All credits to owners.
