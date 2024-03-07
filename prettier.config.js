/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  config: {
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: false,
    jsxSingleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    endOfLine: "lf",
  },
};
