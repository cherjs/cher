// eslint-disable-next-line no-void
export const undef = void 0; // undefined

export function freezeObject(
	object,
) {
	return Object.freeze(object);
}

export function createNullObject() {
	return Object.create(null);
}

export function getNormalizedObject(
	keys,
	object,
) {
	object ??= createNullObject();

	const normalizedObject = createNullObject();

	for (let i = 0; i < keys.length; ++i) {
		normalizedObject[
			keys[i]
		] = (
			object[
				keys[i]
			]
		);
	}

	return normalizedObject;
}

export function toNullObject(
	object,
) {
	return (
		getNormalizedObject(
			Object.keys(object),
			object,
		)
	);
}

export const httpRequestMethods = (
	freezeObject(
		toNullObject(
			{
				GET: 1,
				HEAD: 1,
				POST: 1,
				PUT: 1,
				DELETE: 1,
				CONNECT: 1,
				OPTIONS: 1,
				TRACE: 1,
				PATCH: 1,
			},
		),
	)
);

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE
export const bodylessHttpRequestMethods = (
	freezeObject(
		toNullObject(
			{
				GET: 1,
				HEAD: 1,
				CONNECT: 1,
				OPTIONS: 1,
				TRACE: 1,
			},
		),
	)
);

// https://fetch.spec.whatwg.org/#statuses
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
export const bodylessHttpResponseStatusCodes = (
	freezeObject(
		toNullObject(
			{
				101: 1,
				103: 1,
				204: 1,
				205: 1,
				304: 1,
			},
		),
	)
);

export const toString = String;

export function isUndefined(
	value,
) {
	return (typeof value === 'undefined');
}

export function isObject(
	value,
) {
	return (Object(value) === value);
}

export function isArray(
	value,
) {
	return Array.isArray(value);
}

export function isType(
	value,
	TypeConstructor,
	typeName,
) {
	return (
		value instanceof TypeConstructor
		|| Object.prototype.toString.call(value) === `[object ${typeName}]`
	);
}

export function evalSimpleTemplate(
	template,
	args,
	delimiters,
) {
	delimiters = (
		isObject(delimiters)
		? [
			toString(delimiters[0] ?? ''),
			toString(delimiters[1] ?? ''),
		]
		: [
			toString(delimiters ?? ''),
			toString(delimiters ?? ''),
		]
	);

	let result = toString(template ?? '');

	if (isObject(args)) {
		Object
		.keys(
			args,
		)
		.forEach(
			(key) => {
				result = (
					result
					.split(
						(
							`${
								delimiters[0]
							}${
								key
							}${
								delimiters[1]
							}`
						),
					)
					.join(
						args[key],
					)
				);
			},
		);
	}

	return result;
}

export const getURLObject = (
	function getURLObject(
		url,
		...bases
	) {
		const base = (
			bases.length
			? getURLObject(...bases)
			: (
				document?.baseURI
				// eslint-disable-next-line no-restricted-globals
				|| location?.href
			)
		);

		// because of Edge Legacy (before Edge 79)
		// https://developer.mozilla.org/en-US/docs/Web/API/URL/URL#examples
		if (toString(url) === '') {
			url = base;
		}

		return (
			new URL(
				url,
				base,
			)
		);
	}
);

export function appendParamsToParams(
	params1,
	params2,
) {
	return (
		[
			(
				new URLSearchParams(
					(params1 ?? undef),
				)
				.toString()
			),
			(
				new URLSearchParams(
					(params2 ?? undef),
				)
				.toString()
			),
		]
		.filter(Boolean)
		.join('&')
	);
}

export function appendParamsToURL(
	params,
	url,
	...bases
) {
	const urlObject = getURLObject(
		url,
		...bases,
	);

	(
		new URLSearchParams(
			params,
		)
	)
	.forEach(
		(
			value,
			key,
		) => {
			urlObject.searchParams.append(
				key,
				value,
			);
		},
	);

	return urlObject.href;
}

export function getURL(
	evalTemplate,
	delimiters,
	args,
	params,
	url,
	...bases
) {
	return (
		appendParamsToURL(
			params,
			...(
				[
					url,
					...bases,
				]
				.map(
					(value) => (
						evalTemplate(
							toString(value ?? ''),
							args,
							delimiters,
						)
					),
				)
			),
		)
	);
}

export function toFormData(
	data,
) {
	if (
		isType(
			data,
			FormData,
			'FormData',
		)
	) {
		return data;
	}

	if (
		isType(
			data,
			HTMLFormElement,
			'HTMLFormElement',
		)
	) {
		return new FormData(data);
	}

	const formData = new FormData();

	if (isArray(data)) {
		for (let i = 0; i < data.length; ++i) {
			formData.append(
				...data[i],
			);
		}
		return formData;
	}

	if (
		isType(
			data,
			URLSearchParams,
			'URLSearchParams',
		)
	) {
		data.forEach(
			(
				value,
				key,
			) => {
				formData.append(
					key,
					value,
				);
			},
		);
		return formData;
	}

	if (isObject(data)) {
		Object
		.keys(
			data,
		)
		.forEach(
			(key) => {
				formData.append(
					key,
					...(
						isArray(data[key])
						? data[key]
						: [data[key]]
					),
				);
			},
		);
		return formData;
	}

	return (
		new FormData(
			data,
		)
	);
}
