import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import nextConfig from '@next/eslint-plugin-next'
import perfectionist from 'eslint-plugin-perfectionist'
import pluginReact from 'eslint-plugin-react'
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
  pluginReact.configs.flat.recommended,
  nextConfig.configs.recommended,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': 'error',
    },
  },
  eslintConfigPrettier,
  { rules: { 'react/react-in-jsx-scope': 'off' } },
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
