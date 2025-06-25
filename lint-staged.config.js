export default {
	'*.{js,jsx,ts,tsx}': (stagedFiles) => [`prettier --write ${stagedFiles.join(' ')}`, `eslint .`],
	'*.{js,ts}': () => 'npm run typescript:check',
	'*': 'prettier --write --ignore-unknown',
	'*.{js,jsx,ts,tsx,md,css,scss,json}': (stagedFiles) =>
		`cspell --show-suggestions --quiet --gitignore ${stagedFiles.join(' ')}`
}
