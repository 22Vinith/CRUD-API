module.exports = {
    env: {
      node: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended", // Use Prettier for formatting
    ],
    parserOptions: {
      ecmaVersion: 12, // Allows modern JavaScript (ES12)
    },
    rules: {
      "no-unused-vars": "warn", // Warn on unused variables
      "no-console": "off", // Allow console.log statements
      "eqeqeq": "error", // Enforce strict equality (===)
      "curly": "error", // Require braces in control statements
      "indent": ["error", 2], // Enforce 2-space indentation
      "semi": ["error", "always"], // Require semicolons
      "quotes": ["error", "double"], // Enforce double quotes
    },
  };
  