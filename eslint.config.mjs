import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "off",
      "no-explicit-any": "off",
      "no-console": "off",
      "no-debugger": "off",
      "no-undef": "off",
      "no-undef-init": "off",
      "no-unused-expressions": "off",
      "no-unused-labels": "off",
      "no-unused-imports": "off",
      "no-unused-vars": "off",
      "no-undef-init": "off",
      "eqeqeq": "off",
      "semi": "off",
      "quotes": "off",
      "indent": "off"
    },
  },
];

export default eslintConfig;
