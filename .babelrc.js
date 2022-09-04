module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					esmodules: true,
					firefox: 84,
					chrome: 88,
					node: 18,
				},
			},
		],
	],
};
