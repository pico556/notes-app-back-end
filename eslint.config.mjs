import globals from "globals";
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Menambahkan konfigurasi dari eslint-config-dicodingacademy
  daStyle,
  
  // Konfigurasi lainnya
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },

  // Menonaktifkan aturan no-console
  {
    rules: {
      "no-console": "off", // Menonaktifkan aturan no-console
    },
  },
];
