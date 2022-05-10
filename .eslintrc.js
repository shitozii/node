module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "linebreak-style": 0,
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "consistent-return": "off",
    semi: ["error", "always"],
    "no-unused-vars": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_$", argsIgnorePattern: "^_$", ignoreRestSiblings: true },
    ],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "no-console": "off",
  },
};
