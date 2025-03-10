<div align="center">
	<a href="https://cherjs.org/"><img src="https://cherjs.org/cher.svg" alt="Cher" width="128"></a>
	<h1><a href="https://cherjs.org/">Cher</a></h1>
	<p><a href="https://cherjs.org/">Cher</a> is a configurable fetcher based on the native <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch API</a>.</p>
	<p>
		<a href="https://www.npmjs.com/package/cherjs" target="_blank"><img alt="NPM Version" src="https://img.shields.io/npm/v/cherjs?color=%230086df"></a>
		<a href="https://cherjs.org/guide#license" target="_blank"><img alt="NPM License" src="https://img.shields.io/npm/l/cherjs?&color=%2300a000"></a>
		<a href="https://cherjs.org/" target="_blank"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fcherjs.org%2F&up_message=cherjs.org&color=%23b01020"></a>
		<a href="https://www.npmjs.com/package/cherjs" target="_blank"><img alt="NPM bundle size" src="https://img.shields.io/bundlephobia/min/cherjs?color=%230086df"></a>
		<a href="https://www.npmjs.com/package/cherjs" target="_blank"><img alt="NPM package minimized gzipped size" src="https://img.shields.io/bundlejs/size/cherjs?&color=%2300a000"></a>
	</p>
</div>

## Table of contents

- [Documentation](#documentation)

- [Change log](#change-log)

- [Installation](#installation)

    - [From NPM](#from-npm)

    - [From CDN](#from-cdn)

- [Support](#support)

- [Examples](#examples)

- [License](#license)

<!-- toc -->

## Documentation

**[<img src="https://cherjs.org/cher.svg" width="16"> cherjs.org](https://cherjs.org/)**

## Change log

[CHANGELOG.md](./CHANGELOG.md)

## Installation

###  From NPM

It can be installed as an NPM package in a project directory by running the command below:

```bash
npm install cherjs@latest
```

Then it can be imported for use as an ES module:

```js
import cher from 'cherjs';
```

Or as a CommonJS module:

```js
const cher = require('cherjs');
```

The imported `cher` variable contains a [Cher instance](https://cherjs.org/api#cher-instance).

### From CDN

Insert the following code snippet into the HTML code (this loads the minified production version):

```html
<script src="https://unpkg.com/cherjs"></script>
```

Or, if the uncompressed version is needed, then

```html
<script src="https://unpkg.com/cherjs/dist/cher.umd.js"></script>
```

After that, a [Cher instance](https://cherjs.org/api#cher-instance) named `cher` is available in the global scope, that is, as the `cher` property of the global [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object (so as `window.cher`).

## Support

[Cher](https://cherjs.org/) and [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) support can be checked with the read-only [`supported`](https://cherjs.org/api#cher.supported) boolean property of a [Cher instance](https://cherjs.org/api#cher-instance):

```js
if (cher.supported) {
	// fetch API is supported
}
else {
	// fetch API is not supported
}
```

See the [compatibility table on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#browser_compatibility) for browser and runtime environment support for [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Examples

Each [Cher instance](https://cherjs.org/api#cher-instance) is a reusable agent, meaning it can be used to initiate requests multiple times.

```js
// Import the initial Cher instance
import cher from 'cherjs';

// ...

let wikipediaLogo;

// Get Wikipedia logo
cher(
	'https://en.wikipedia.org/static/images/project-logos/enwiki.png',
	{
		decode: 'file',
	},
)
.then(
	(response) => {
		// file
		wikipediaLogo = response.data;
	},
);

// ...

// Again: cher() and cher.fetch() are the same
cher.fetch(
	{
		url: 'https://en.wikipedia.org/static/images/project-logos/enwiki.png',
		decode: 'file',
	},
)
.then(
	(response) => {
		// file
		wikipediaLogo = response.data;
	},
);

// ...

// Create a new Cher instance
const worldTime = cher.create();
// Set the base URL
worldTime.baseURL = 'http://worldtimeapi.org/api/timezone/';
// Complete the base URL
worldTime.baseURL = '{area}/';

// ...

// Create a new Cher instance with the previous configuration
const europeTime = worldTime.create(true);
// Complete the configuration
europeTime.args = {
	area: 'Europe',
};

// ...

let romeTime;

// Get Rome time
europeTime('Rome')
.then(
	(response) => {
		// object
		romeTime = response.data;
	},
);

// ...

// Complete the base URL
europeTime.baseURL = '{location}';

// Update the Rome time
europeTime(
	{
		args: {
			location: 'Rome',
		},
	},
)
.then(
	(response) => {
		// object
		romeTime = response.data;
	},
);

// ...

let reykjavikTime;

// Get a Europe time (Reykjavik, Iceland) from another area
europeTime(
	{
		args: {
			area: 'Atlantic',
			location: 'Reykjavik',
		},
	},
)
.then(
	(response) => {
		// object
		reykjavikTime = response.data;
	},
);
```

## License

<em>

The MIT License (MIT)

Copyright © 2022-present Haász Sándor

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</em>
