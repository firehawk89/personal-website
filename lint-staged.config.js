export default {
  '*': (stagedFiles) => `prettier --write --ignore-unknown ${stagedFiles.join(' ')}`,
  '*.{js,ts,svelte}': () => ['tsc -p tsconfig.json', 'eslint .'],
  '*.{js,ts,svelte,md,css,scss,json}': (stagedFiles) =>
    `cspell --show-suggestions --quiet --gitignore ${stagedFiles.join(' ')}`
}
