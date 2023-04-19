module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{json,png,css,js,svg}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};