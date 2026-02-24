import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    settings: { react: { version: "detect" } },
    plugins: {
      js,
      react: pluginReact as any,
      prettier,
      "@next/next": nextPlugin as any,
    },
    extends: [
      "js/recommended",
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    rules: {
      "prettier/prettier": "warn",
      "@next/next/no-img-element": "warn",
      "@next/next/no-sync-scripts": "error",
      "@next/next/no-unwanted-polyfillio": "error",
      // App Router: no _document/_app pages assumptions
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-head-element": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
]);
