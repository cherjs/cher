<div align="center">
	<a href="https://gitlab.com/cherjs/cher"><img src="https://cherjs.org/cher.svg" alt="Cher" width="128"></a>
	<h1><a href="https://gitlab.com/cherjs/cher">Cher</a></h1>
	<p>Cher is a configurable fetcher based on the native fetch API.</p>
</div>

## Table of contents

- [Quick start](#quick-start)

	- [Installation](#installation)

		- [From NPM](#from-npm)

		- [From CDN](#from-cdn)

	- [Examples of use](#examples-of-use)

- [Documentation](#documentation)

- [License](#license)

<!-- toc -->

## Quick start

### Installation

####  From NPM

It can be installed as an NPM package in a project directory by running the command below:

```bash
npm install cherjs
```

Then it can be imported for use as an ES module:

```js
import cher from 'cherjs';
```

Or as a CommonJS module:

```js
const cher = require('cherjs');
```

The imported `cher` variable contains an instance of Cher.

#### From CDN

Insert the following code snippet into the HTML code (this loads the minified production version):

```html
<script src="https://unpkg.com/cherjs"></script>
```

Or, if the uncompressed version is needed (for development), then

```html
<script src="https://unpkg.com/cherjs/dist/cher.umd.js"></script>
```

After that, a Cher instance named `cher` is available in the global scope, that is, as the `cher` property of the global `window` object (`window.cher`).

### Examples of use

```js
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
		wikipediaLogo = response.data;
	},
);

// ...

// Again: The cher() and the cher.fetch() is the same
cher.fetch(
	{
		url: 'https://en.wikipedia.org/static/images/project-logos/enwiki.png',
		decode: 'file',
	},
)
.then(
	(response) => {
		wikipediaLogo = response.data;
	},
);

// ...

// Create a new instance of Cher
const worldTime = cher.create();
// Set the base URL
worldTime.baseURL = 'http://worldtimeapi.org/api/timezone/';
// Complete the base URL
worldTime.baseURL = '{area}/';

// ...

// Create a new instance of Cher with the previous configuration
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
		reykjavikTime = response.data;
	},
);
```

## Documentation

[cherjs.org](https://cherjs.org/)

## License

---

<em>

The MIT License (MIT)

Copyright © 2022-present Haász Sándor

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

</em>

---
