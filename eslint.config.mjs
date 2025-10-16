import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  { ignores: [".next/**", ".vscode/**", "node_modules/**", "public/**"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  ...compat.config({
    extends: [
      "eslint:recommended",
      "next/core-web-vitals",
      "plugin:jsx-a11y/recommended",
      "prettier",
    ],
  }),
];

export default config;
