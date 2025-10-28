const path = require('node:path')

const getRelativePaths = (files) =>
  files.map((file) => path.relative(process.cwd(), file))

const filterNonConfigFiles = (files) =>
  files.filter(
    (file) => !file.includes('.config.') && !file.includes('.lintstagedrc')
  )

const config = {
  '*.{js,jsx,ts,tsx}': (files) => {
    const filteredFiles = filterNonConfigFiles(files)
    return filteredFiles.length > 0
      ? `eslint --fix ${getRelativePaths(filteredFiles).join(' ')}`
      : []
  },
  '*.{js,ts}': () => 'tsc -p tsconfig.json',
  '*': 'prettier --write --ignore-unknown',
  '*.{js,jsx,ts,tsx,md,css,scss,json}': (files) =>
    `cspell --show-suggestions --quiet --gitignore ${getRelativePaths(files).join(' ')}`,
}

module.exports = config
