import globals from "globals";
import pluginJs from "@eslint/js";


// we are importing globals beacuse it provide predefine global variable like window ,document,fetch

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
    rules: {
      "semi": ["warn", "always"],  // Enforce semicolons
      "quotes": ["error", "double"], // Enforce double quotes
      "no-console": "warn",  // Warn when using console.log
      "eqeqeq": ["error", "always"] ,// Require strict equality (===)
      "indent":["error",2]
    }

  },
  { languageOptions: { globals: globals.browser } },

];