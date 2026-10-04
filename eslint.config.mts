import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import nextPlugin from '@next/eslint-plugin-next'
import perfectionist from 'eslint-plugin-perfectionist'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        projectService: true,
      },
      globals: { ...globals.browser, ...globals.node },
    },
    settings: { react: { version: 'detect' } },
    rules: { ...js.configs.recommended.rules },
  },

  ...tseslint.configs.recommended,

  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooksPlugin.configs.flat.recommended,

  nextPlugin.configs.recommended,

  {
    plugins: { perfectionist },
    rules: {
      'perfectionist/sort-imports': 'error',
    },
  },
  eslintConfigPrettier,

  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'public/**',
      'coverage/**',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock',
      '*.config.*',
      '.lintstagedrc.*',
    ],
  },
])
