import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
    plugins: { js, prettier: require('eslint-plugin-prettier') },
    extends: ['js/recommended', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'arrow-parens': ['error', 'as-needed'],
    },
  },
])
