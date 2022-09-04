module.exports = {

	root: true,

	env: {
		browser: true,
		node: true,
		es2022: true,
	},

	parserOptions: {
		parser: '@babel/eslint-parser',
		ecmaVersion: 2022,
		sourceType: 'module',
	},

	extends: [
		'airbnb-base',
	],

	rules: {

		'no-tabs': 'off',

		indent: [
			'error',
			'tab',
			{
				ignoredNodes: [
					'ConditionalExpression',
				],
				SwitchCase: 1,
				MemberExpression: 'off',
			},
		],

		'brace-style': [
			'error',
			'stroustrup',
		],

		'padded-blocks': [
			'error',
			{
				classes: 'always',
			},
		],

		'no-plusplus': [
			'error',
			{
				allowForLoopAfterthoughts: true,
			},
		],

		'no-param-reassign': 'off',

	},

};
