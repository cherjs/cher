import {
	undef,
	freezeObject,
	createNullObject,
	getNormalizedObject,
	toNullObject,
	httpRequestMethods,
	bodylessHttpRequestMethods,
	bodylessHttpResponseStatusCodes,
	toString,
	isUndefined,
	isObject,
	isArray,
	isType,
	evalSimpleTemplate,
	appendParamsToParams,
	getURL,
	toFormData,
} from './utilities';
import ResponseError from './response-error';

const decodings = (
	freezeObject(
		toNullObject(
			{
				json: (
					async (response) => {
						const text = await response.text();
						return (
							text
							? JSON.parse(text)
							: undef
						);
					}
				),
				'strict-json': 'json',
				text: 'text',
				url: 'formData',
				form: 'formData',
				blob: 'blob',
				file: 'blob',
				stream: false,
				buffer: 'arrayBuffer',
				none: undef,
			},
		),
	)
);

const encodings = (
	freezeObject(
		toNullObject(
			{
				json: 1,
				text: 1,
				url: 1,
				form: 1,
				blob: 1,
				file: 1,
				stream: 1,
				buffer: 1,
				none: 1,
			},
		),
	)
);

const defaults = (
	toNullObject(
		{
			method: undef,
			evalTemplate: () => evalSimpleTemplate,
			delimiters: () => ['{', '}'],
			baseURL: undef,
			url: undef,
			args: undef,
			params: undef,
			decode: 'json',
			encode: 'json',
			data: undef,
			options: undef,
		},
	)
);

const initialDefaults = (
	{
		...defaults,
	}
);

const defaultKeys = (
	Object
	.keys(
		defaults,
	)
);

const instanceKeys = [
	...defaultKeys,
];

const fetchKeys = [
	...defaultKeys,
	'listeners',
];

function getNormalizedMethod(
	value,
) {
	value = toString(value).toUpperCase();
	return (
		value in httpRequestMethods
		? value
		: undef
	);
}

function isURL(
	value,
) {
	return (
		typeof value === 'string'
		|| isType(
			value,
			URL,
			'URL',
		)
	);
}

class Cher extends EventTarget {

	constructor(
		...config
	) {
		super();

		this.reset();

		this.set(
			...config,
		);
	}

	/* Properties */

	// supported

	// eslint-disable-next-line class-methods-use-this
	get supported() {
		return (typeof fetch === 'function');
	}

	// method

	#method;

	get method() {
		return this.#method;
	}

	set method(
		value,
	) {
		this.#method = (
			getNormalizedMethod(
				value,
			)
		);
	}

	// evalTemplate

	#evalTemplate;

	get evalTemplate() {
		return this.#evalTemplate;
	}

	set evalTemplate(
		value,
	) {
		this.#evalTemplate = (
			typeof value === 'function'
			? value
			: (template) => template
		);
	}

	// delimiters

	#delimiters;

	get delimiters() {
		return this.#delimiters;
	}

	set delimiters(
		value,
	) {
		this.#delimiters = (
			isObject(value)
			? [
				toString(value[0] ?? ''),
				toString(value[1] ?? ''),
			]
			: [
				toString(value ?? ''),
				toString(value ?? ''),
			]
		);
	}

	// baseURL

	#baseURL = [];

	get baseURL() {
		return this.#baseURL;
	}

	set baseURL(
		value,
	) {
		value ??= [];

		if (!isArray(value)) {
			value = [
				...this.#baseURL,
				value,
			];
		}

		this.#baseURL = (
			value
			.reduce(
				(
					reducedItems,
					item,
				) => {
					item = toString(item ?? '');

					if (item) {
						reducedItems.push(
							item,
						);
					}

					return reducedItems;
				},
				[],
			)
		);
	}

	// url

	#url;

	get url() {
		return this.#url;
	}

	set url(
		value,
	) {
		this.#url = toString(value ?? '');
	}

	// args

	#args;

	get args() {
		return this.#args;
	}

	set args(
		value,
	) {
		this.#args = (value ?? undef);
	}

	// params

	#params;

	get params() {
		return this.#params;
	}

	set params(
		value,
	) {
		this.#params = (value ?? undef);
	}

	// decode

	#decode;

	get decode() {
		return this.#decode;
	}

	set decode(
		value,
	) {
		this.#decode = (
			value in decodings
			? toString(value)
			: undef
		);
	}

	// encode

	#encode;

	get encode() {
		return this.#encode;
	}

	set encode(
		value,
	) {
		this.#encode = (
			value in encodings
			? toString(value)
			: undef
		);
	}

	// data

	#data;

	get data() {
		return this.#data;
	}

	set data(
		value,
	) {
		this.#data = value;
	}

	// options

	#options;

	get options() {
		return this.#options;
	}

	set options(
		value,
	) {
		if (isObject(value)) {
			value = {
				...value,
			};
			if ('method' in value) {
				const method = (
					getNormalizedMethod(
						value.method,
					)
				);
				if (isUndefined(method)) {
					delete value.method;
				}
				else {
					value.method = method;
				}
			}
		}
		else {
			value = undef;
		}
		this.#options = value;
	}

	/* Methods */

	// eslint-disable-next-line class-methods-use-this
	getDefault(
		key,
	) {
		return defaults[key];
	}

	setDefault(
		key,
		value,
		reset,
	) {
		if (key in defaultKeys) {
			defaults[key] = value;
			if (reset) {
				this[key] = (
					typeof defaults[key] === 'function'
					? defaults[key]()
					: defaults[key]
				);
			}
		}
	}

	resetDefault(
		key,
		reset,
	) {
		this.setDefault(
			key,
			initialDefaults[key],
			reset,
		);
	}

	// eslint-disable-next-line class-methods-use-this
	getDefaults() {
		return (
			getNormalizedObject(
				defaultKeys,
				defaults,
			)
		);
	}

	setDefaults(
		...config
	) {
		let url;
		let reset;

		if (isURL(config[0])) {
			[url, config, reset] = config;
			config.url = url;
		}
		else {
			[config, reset] = config;
		}

		config ??= createNullObject();

		defaultKeys
		.forEach(
			(key) => {
				if (key in config) {
					this.setDefault(
						key,
						config[key],
						reset,
					);
				}
			},
		);

		if (!isUndefined(url)) {
			this.setDefault(
				'url',
				url,
				reset,
			);
		}
	}

	resetDefaults(
		reset,
	) {
		this.setDefaults(
			initialDefaults,
			reset,
		);
	}

	reset(
		initial,
	) {
		const values = (
			initial
			? initialDefaults
			: defaults
		);

		defaultKeys
		.forEach(
			(key) => {
				this[key] = (
					typeof values[key] === 'function'
					? values[key]()
					: values[key]
				);
			},
		);
	}

	set(
		...config
	) {
		let url;

		if (isURL(config[0])) {
			[url, config] = config;
		}
		else {
			[config] = config;
		}

		config ??= createNullObject();

		instanceKeys
		.forEach(
			(key) => {
				if (key in config) {
					this[key] = config[key];
				}
			},
		);

		if (!isUndefined(url)) {
			this.url = url;
		}
	}

	getConfig() {
		return (
			getNormalizedObject(
				instanceKeys,
				this,
			)
		);
	}

	getURL(
		...config
	) {
		let url;

		if (isURL(config[0])) {
			[url, config] = config;
		}
		else {
			[config] = config;
		}

		config ??= createNullObject();

		let {
			evalTemplate,
			delimiters,
			baseURL,
			args,
			params,
		} = config;

		if (isUndefined(url)) {
			({ url } = config);
		}

		evalTemplate = (
			typeof evalTemplate === 'function'
			? evalTemplate
			: this.evalTemplate
		);

		delimiters ??= this.delimiters;

		baseURL = [
			...this.baseURL,
			...(
				(
					isArray(baseURL)
					? baseURL
					: [baseURL]
				)
				.reduce(
					(
						reducedItems,
						item,
					) => {
						item = toString(item ?? '');

						if (item) {
							reducedItems.push(
								item,
							);
						}

						return reducedItems;
					},
					[],
				)
			),
		];

		url = toString(url ?? this.url);

		args = (
			{
				...this.args,
				...(args ?? undef),
			}
		);

		params = (
			appendParamsToParams(
				this.params,
				(params ?? undef),
			)
		);

		return (
			getURL(
				evalTemplate,
				delimiters,
				args,
				params,
				url,
				...(
					baseURL
					.reverse()
				),
			)
		);
	}

	getOptions(
		config,
	) {
		config ??= createNullObject();

		const {
			decode,
			encode,
			data,
		} = config;

		let {
			method,
			options,
		} = config;

		method = (
			getNormalizedMethod(
				method,
			)
		);
		if (isUndefined(method)) {
			method = this.method;
		}
		if (method) {
			method = {
				method,
			};
		}

		if (isObject(options)) {
			options = {
				...options,
			};
			if ('method' in options) {
				const methodOption = (
					getNormalizedMethod(
						options.method,
					)
				);
				if (isUndefined(methodOption)) {
					delete options.method;
				}
				else {
					options.method = methodOption;
				}
			}
		}
		else {
			options = undef;
		}

		options = {
			method: 'GET',
			...this.options,
			...options,
			...method,
		};

		method = options.method;

		options.headers = (
			new Headers(
				options.headers,
			)
		);
		const { headers } = options;

		this.#setAccept(
			headers,
			decode,
		);

		this.#setContent(
			method,
			headers,
			options,
			encode,
			data,
		);

		return options;
	}

	#setAccept(
		headers,
		decode,
	) {
		decode = (
			decode in decodings
			? toString(decode)
			: this.decode
		);

		let accept;

		switch (decode) {

			case 'json':
				accept = 'application/json,text/plain,*/*';
				break;

			case 'text':
				accept = 'text/plain,*/*';
				break;

			case 'url':
				accept = 'application/x-www-form-urlencoded,*/*';
				break;

			case 'form':
				accept = 'application/x-www-form-urlencoded,multipart/form-data,*/*';
				break;

			case 'blob':
			case 'file':
			case 'stream':
			case 'buffer':
				if (!headers.has('Accept')) {
					accept = '*/*';
					// accept = 'application/octet-stream,*/*';
				}
				break;

			case 'none':
			default:
				break;

		}

		if (
			!(
				accept
				|| headers.has('Accept')
			)
		) {
			accept = '*/*';
			// accept = 'application/json,text/plain,*/*';
		}

		if (accept) {
			headers.set(
				'Accept',
				accept,
			);
		}

		return headers;
	}

	#setContent(
		method,
		headers,
		options,
		encode,
		data,
	) {
		method = (
			getNormalizedMethod(
				method,
			)
		);

		encode = (
			encode in encodings
			? toString(encode)
			: this.encode
		);

		if (
			method in bodylessHttpRequestMethods
		) {
			headers.delete('Content-Type');
			delete options.body;
		}
		else if (
			!(
				isUndefined(data)
				&& isUndefined(this.data)
			)
		) {
			switch (encode) {

				case 'json':
					headers.set(
						'Content-Type',
						'application/json;charset=UTF-8',
					);
					options.body = (
						this.#getJSONContent(
							data,
						)
					);
					break;

				case 'text':
					headers.set(
						'Content-Type',
						'text/plain;charset=UTF-8',
					);
					options.body = (
						this.#getTextContent(
							data,
						)
					);
					break;

				case 'url':
					headers.set(
						'Content-Type',
						'application/x-www-form-urlencoded;charset=UTF-8',
					);
					options.body = (
						this.#getURLSearchContent(
							data,
						)
					);
					break;

				case 'form':
					headers.delete('Content-Type');
					options.body = (
						this.#getFormDataContent(
							data,
						)
					);
					break;

				case 'blob':
					options.body = (
						this.#getBlobContent(
							data,
						)
					);
					break;

				case 'file':
					options.body = (
						this.#getFileContent(
							data,
						)
					);
					break;

				case 'stream':
					options.body = (
						this.#getStreamContent(
							data,
						)
					);
					break;

				case 'buffer':
				case 'none':
				default:
					options.body = (
						isUndefined(data)
						? this.data
						: data
					);
					break;

			}
		}
		else if (
			isUndefined(options.body)
		) {
			headers.delete('Content-Type');
			delete options.body;
		}
	}

	#getJSONContent(
		data,
	) {
		if (
			isArray(data)
		) {
			if (isArray(this.data)) {
				data = [
					...this.data,
					...data,
				];
			}
		}
		else if (
			isObject(data)
		) {
			if (
				isObject(this.data)
				&& !isArray(this.data)
			) {
				data = {
					...this.data,
					...data,
				};
			}
		}
		else if (
			isUndefined(data)
		) {
			data = this.data;
		}

		return (
			JSON.stringify(
				data,
			)
		);
	}

	#getTextContent(
		data,
	) {
		return (
			toString(
				(
					isUndefined(data)
					? this.data
					: data
				),
			)
		);
	}

	#getURLSearchContent(
		data,
	) {
		return (
			appendParamsToParams(
				this.data,
				data,
			)
		);
	}

	#getFormDataContent(
		data,
	) {
		if (isUndefined(this.data)) {
			return (
				toFormData(
					data,
				)
			);
		}

		const formData = (
			toFormData(
				this.data,
			)
		);

		if (!isUndefined(data)) {
			toFormData(
				data,
			)
			.forEach(
				(value, key) => {
					formData.append(
						key,
						value,
					);
				},
			);
		}

		return formData;
	}

	#getBinaryContent(
		data,
		TypeConstructor,
		typeName,
	) {
		data = (
			isUndefined(data)
			? this.data
			: data
		);

		if (
			isType(
				data,
				TypeConstructor,
				typeName,
			)
		) {
			return data;
		}

		if (!isArray(data)) {
			data = [data];
		}

		return (
			new TypeConstructor(
				(
					isArray(data[0])
					? data[0]
					: [data[0]]
				),
				...data.slice(1),
			)
		);
	}

	#getBlobContent(
		data,
	) {
		return (
			this.#getBinaryContent(
				data,
				Blob,
				'Blob',
			)
		);
	}

	#getFileContent(
		data,
	) {
		return (
			this.#getBinaryContent(
				data,
				File,
				'File',
			)
		);
	}

	#getStreamContent(
		data,
	) {
		data = (
			isUndefined(data)
			? this.data
			: data
		);

		if (
			isType(
				data,
				ReadableStream,
				'ReadableStream',
			)
		) {
			return data;
		}

		return (
			new ReadableStream(
				...(
					isArray(data)
					? data
					: [data]
				),
			)
		);
	}

	#trigger(
		type,
		event,
		listeners,
	) {
		event ??= createNullObject();

		const {
			detail,
			// bubbles,
			// cancelable,
			// composed,
		} = event;

		listeners = (
			listeners
			?.[type]
		);

		if (listeners) {
			listeners = (
				isArray(listeners)
				? [
					...listeners,
				]
				: [listeners]
			);

			listeners
			.forEach(
				(listener, index) => {
					if (!isArray(listener)) {
						listeners[index] = [listener];
					}

					this.addEventListener(
						type,
						...listeners[index],
					);
				},
			);
		}

		this.dispatchEvent(
			new CustomEvent(
				type,
				{
					detail,
					// bubbles,
					// cancelable,
					// composed,
				},
			),
		);

		if (listeners) {
			listeners
			.forEach(
				(listener) => {
					this.removeEventListener(
						type,
						...listener,
					);
				},
			);
		}
	}

	fetch(
		...config
	) {
		let url;

		if (isURL(config[0])) {
			[url, config] = config;
		}
		else {
			[config] = config;
		}

		config = (
			getNormalizedObject(
				fetchKeys,
				config,
			)
		);

		if (!isUndefined(url)) {
			config.url = url;
		}

		const { listeners } = config;

		const detail = {
			instance: this,
			fetchConfig: config,
		};

		this.#trigger(
			'start',
			{
				detail,
			},
			listeners,
		);

		detail.fetchUrl = (
			this.getURL(
				config,
			)
		);
		detail.fetchOptions = (
			this.getOptions(
				config,
			)
		);

		detail.fetch = (
			fetch(
				detail.fetchUrl,
				detail.fetchOptions,
			)
		);

		this.#trigger(
			'started',
			{
				detail,
			},
			listeners,
		);

		return (
			detail
			.fetch
			.then(
				(response) => {
					detail.response = response;

					this.#trigger(
						'loaded',
						{
							detail,
						},
						listeners,
					);

					if (!detail.response.ok) {
						throw new ResponseError(
							detail.response,
						);
					}

					this.#trigger(
						'checked',
						{
							detail,
						},
						listeners,
					);

					return detail.response;
				},
			)
			.then(
				async (response) => {
					if (
						response.status in bodylessHttpResponseStatusCodes
						|| response.body == null
					) {
						this.#trigger(
							'bodyless',
							{
								detail,
							},
							listeners,
						);
					}
					else {
						let { decode } = config;

						decode = (
							toString(decode ?? '')
							|| this.decode
						);

						decode = decodings[decode];

						if (decode) {
							response.data = (
								typeof decode === 'function'
								? await (
									decode(
										response,
									)
								)
								: await (
									response[
										decode
									]()
								)
							);

							this.#trigger(
								'decoded',
								{
									detail,
								},
								listeners,
							);
						}
						else {
							response.data = (
								response.body
							);

							this.#trigger(
								'unprocessed',
								{
									detail,
								},
								listeners,
							);
						}
					}

					return detail.response;
				},
			)
			.catch(
				(error) => {
					detail.error = error;

					this.#trigger(
						'error',
						{
							detail,
						},
						listeners,
					);

					if (detail.error != null) {
						this.#trigger(
							'unhandlederror',
							{
								detail,
							},
							listeners,
						);

						throw detail.error;
					}

					this.#trigger(
						'handlederror',
						{
							detail,
						},
						listeners,
					);

					return detail.response;
				},
			)
			.finally(
				() => {
					this.#trigger(
						'end',
						{
							detail,
						},
						listeners,
					);
				},
			)
		);
	}

	create(
		...config
	) {
		if (config[0] === true) {
			config[0] = this.getConfig();
		}

		return (
			// eslint-disable-next-line no-use-before-define
			createCher(
				...config,
			)
		);
	}

}

function createCher(
	...config
) {
	const instance = (
		new Cher(
			...config,
		)
	);

	const cher = (
		instance.fetch.bind(
			instance,
		)
	);

	// properties
	[
		'method',
		'evalTemplate',
		'delimiters',
		'baseURL',
		'url',
		'args',
		'params',
		'decode',
		'encode',
		'data',
		'options',
	]
	.forEach(
		(property) => {
			Object.defineProperty(
				cher,
				property,
				{
					get() {
						return instance[property];
					},
					set(value) {
						instance[property] = value;
					},
				},
			);
		},
	);

	// methods
	[
		// super (EventTarget)
		'addEventListener',
		'removeEventListener',
		'dispatchEvent',
		// own (Cher)
		'getDefault',
		'setDefault',
		'resetDefault',
		'getDefaults',
		'setDefaults',
		'resetDefaults',
		'reset',
		'set',
		'getConfig',
		'getURL',
		'getOptions',
		'fetch',
		'create',
	]
	.forEach(
		(method) => {
			Object.defineProperty(
				cher,
				method,
				{
					configurable: true,
					writable: true,
					value: (
						instance[method].bind(
							instance,
						)
					),
				},
			);
		},
	);

	return cher;
}

export default createCher();
