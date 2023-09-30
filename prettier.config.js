module.exports = {
	$schema: 'https://json.schemastore.org/prettierrc',
	semi: true,
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	printWidth: 120,
	trailingComma: 'all',
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindConfig: './tailwind.config.js',
};
