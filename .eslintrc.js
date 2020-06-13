module.exports = {
  env: { browser: true, node: true },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 2,
  },
  settings: {
    react: { version: "detect" },
  },
};
