import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import pkg from './package.json';

const {
	source,
	version,
	repository,
	name: packageName,
	homepage,
	author,
	license,
} = pkg;

const name = (
	repository
	.url
	.split('/')
	.pop()
	.split('.')
	.slice(0, -1)
	.join('.')
);

const year = (new Date()).getFullYear();

const exports = 'auto';

const banner = (
// eslint-disable-next-line indent
`/*!
 * ${name.charAt(0).toUpperCase()}${name.slice(1)} v${version} (npm: ${packageName})
 * ${homepage}
 * Copyright (c) 2022${year > 2022 ? `-${year}` : ''} ${author.name}
 * Released under the ${license} License.
 */
`
);

const sourcemap = true;

const config = {

	input: source,

	plugins: [

		replace(
			{
				preventAssignment: true,
				values: {
					__VERSION__: version,
				},
			},
		),

		nodeResolve(),

		commonjs(),

		eslint(
			{
				throwOnError: true,
				throwOnWarning: true,
			},
		),

		babel(
			{
				babelHelpers: 'bundled',
				exclude: [
					'node_modules/**',
				],
			},
		),

	],

	output: [],

};

const outputs = {

	// Asynchronous Module Definition
	amd: {},

	// CommonJS
	cjs: {},

	// ECMAScript module
	esm: {},

	// Immediately Invoked Function Expression
	iife: {},

	// Universal Module Definition
	umd: {},

	// SystemJS
	systemjs: {},

};

function getOutputFileName(
	format,
) {
	return (
		`dist/${
			name
		}.${
			format
		}.js`
	);
}

function getMinifiedFileName(
	filename,
) {
	return (
		filename
		.replace(
			/\.js$/,
			'.min.js',
		)
	);
}

function getRollupConfig() {
	Object
	.entries(
		outputs,
	)
	.forEach(
		(
			[
				format,
				output,
			],
		) => {
			const file = getOutputFileName(format);

			config
			.output
			.push(
				{
					format,
					name,
					file,
					exports,
					banner,
					sourcemap,
					...output,
				},
				{
					format,
					name,
					file: getMinifiedFileName(file),
					plugins: [
						terser(
							{
								module: (format === 'esm'),
								compress: {
									ecma: 2021,
									pure_getters: true,
								},
							},
						),
					],
					exports,
					banner,
					sourcemap,
					...output,
				},
			);
		},
	);

	return config;
}

export default getRollupConfig();
