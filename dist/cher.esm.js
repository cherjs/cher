/*!
 * Cher v1.0.0
 * https://gitlab.com/cherjs/cher
 * Copyright (c) 2022 Haász Sándor
 * Released under the MIT License.
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

  _classApplyDescriptorSet(receiver, descriptor, value);

  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return fn;
}

function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);

  privateMap.set(obj, value);
}

function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);

  privateSet.add(obj);
}

// eslint-disable-next-line no-void
var undef = void 0; // undefined

function freezeObject(object) {
  return Object.freeze(object);
}
function createNullObject() {
  return Object.create(null);
}
function getNormalizedObject(keys, object) {
  var _object;

  (_object = object) !== null && _object !== void 0 ? _object : object = createNullObject();
  var normalizedObject = createNullObject();

  for (var i = 0; i < keys.length; ++i) {
    normalizedObject[keys[i]] = object[keys[i]];
  }

  return normalizedObject;
}
function toNullObject(object) {
  return getNormalizedObject(Object.keys(object), object);
}
var httpRequestMethods = freezeObject(toNullObject({
  GET: 1,
  HEAD: 1,
  POST: 1,
  PUT: 1,
  DELETE: 1,
  CONNECT: 1,
  OPTIONS: 1,
  TRACE: 1,
  PATCH: 1
})); // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE

var bodylessHttpRequestMethods = freezeObject(toNullObject({
  GET: 1,
  HEAD: 1,
  CONNECT: 1,
  OPTIONS: 1,
  TRACE: 1
})); // https://fetch.spec.whatwg.org/#statuses
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304

var bodylessHttpResponseStatusCodes = freezeObject(toNullObject({
  101: 1,
  103: 1,
  204: 1,
  205: 1,
  304: 1
}));
var toString = String;
function isUndefined(value) {
  return typeof value === 'undefined';
}
function isObject(value) {
  return Object(value) === value;
}
function isArray(value) {
  return Array.isArray(value);
}
function isType(value, TypeConstructor, typeName) {
  return value instanceof TypeConstructor || Object.prototype.toString.call(value) === "[object ".concat(typeName, "]");
}
function evalSimpleTemplate(template, args, delimiters) {
  var _delimiters$, _delimiters$2, _delimiters, _delimiters2;

  delimiters = isObject(delimiters) ? [toString((_delimiters$ = delimiters[0]) !== null && _delimiters$ !== void 0 ? _delimiters$ : ''), toString((_delimiters$2 = delimiters[1]) !== null && _delimiters$2 !== void 0 ? _delimiters$2 : '')] : [toString((_delimiters = delimiters) !== null && _delimiters !== void 0 ? _delimiters : ''), toString((_delimiters2 = delimiters) !== null && _delimiters2 !== void 0 ? _delimiters2 : '')];
  var result = toString(template !== null && template !== void 0 ? template : '');

  if (isObject(args)) {
    Object.keys(args).forEach(key => {
      result = result.split("".concat(delimiters[0]).concat(key).concat(delimiters[1])).join(args[key]);
    });
  }

  return result;
}
var getURLObject = function getURLObject(url) {
  var _document, _location;

  for (var _len = arguments.length, bases = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    bases[_key - 1] = arguments[_key];
  }

  var base = bases.length ? getURLObject(...bases) : ((_document = document) === null || _document === void 0 ? void 0 : _document.baseURI // eslint-disable-next-line no-restricted-globals
  ) || ((_location = location) === null || _location === void 0 ? void 0 : _location.href); // because of Edge Legacy (before Edge 79)
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/URL#examples

  if (toString(url) === '') {
    url = base;
  }

  return new URL(url, base);
};
function appendParamsToParams(params1, params2) {
  return [new URLSearchParams(params1 !== null && params1 !== void 0 ? params1 : undef).toString(), new URLSearchParams(params2 !== null && params2 !== void 0 ? params2 : undef).toString()].filter(Boolean).join('&');
}
function appendParamsToURL(params, url) {
  for (var _len2 = arguments.length, bases = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    bases[_key2 - 2] = arguments[_key2];
  }

  var urlObject = getURLObject(url, ...bases);
  new URLSearchParams(params).forEach((value, key) => {
    urlObject.searchParams.append(key, value);
  });
  return urlObject.href;
}
function getURL(evalTemplate, delimiters, args, params, url) {
  for (var _len3 = arguments.length, bases = new Array(_len3 > 5 ? _len3 - 5 : 0), _key3 = 5; _key3 < _len3; _key3++) {
    bases[_key3 - 5] = arguments[_key3];
  }

  return appendParamsToURL(params, ...[url, ...bases].map(value => evalTemplate(toString(value !== null && value !== void 0 ? value : ''), args, delimiters)));
}
function toFormData(data) {
  if (isType(data, FormData, 'FormData')) {
    return data;
  }

  if (isType(data, HTMLFormElement, 'HTMLFormElement')) {
    return new FormData(data);
  }

  var formData = new FormData();

  if (isArray(data)) {
    for (var i = 0; i < data.length; ++i) {
      formData.append(...data[i]);
    }

    return formData;
  }

  if (isType(data, URLSearchParams, 'URLSearchParams')) {
    data.forEach((value, key) => {
      formData.append(key, value);
    });
    return formData;
  }

  if (isObject(data)) {
    Object.keys(data).forEach(key => {
      formData.append(key, ...(isArray(data[key]) ? data[key] : [data[key]]));
    });
    return formData;
  }

  return new FormData(data);
}

class ResponseError extends Error {
  constructor(response, message) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    super(message == null ? "HTTP ".concat(response.status || '<unknown-status>', " ").concat(response.statusText || '') : message, ...args);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ResponseError);
    }

    this.name = 'ResponseError';
    this.response = response;
  }

}

if (typeof fetch !== 'function') {
  throw new Error('The fetch() is not supported.');
}

var decodings = freezeObject(toNullObject({
  json: function () {
    var _json = _asyncToGenerator(function* (response) {
      var text = yield response.text();
      return text ? JSON.parse(text) : undef;
    });

    function json(_x) {
      return _json.apply(this, arguments);
    }

    return json;
  }(),
  'strict-json': 'json',
  text: 'text',
  url: 'formData',
  form: 'formData',
  blob: 'blob',
  file: 'blob',
  stream: false,
  buffer: 'arrayBuffer',
  none: undef
}));
var encodings = freezeObject(toNullObject({
  json: 1,
  text: 1,
  url: 1,
  form: 1,
  blob: 1,
  file: 1,
  stream: 1,
  buffer: 1,
  none: 1
}));
var defaults = toNullObject({
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
  options: undef
});

var initialDefaults = _objectSpread2({}, defaults);

var defaultKeys = Object.keys(defaults);
var instanceKeys = [...defaultKeys];
var fetchKeys = [...defaultKeys, 'listeners'];

function getNormalizedMethod(value) {
  value = toString(value).toUpperCase();
  return value in httpRequestMethods ? value : undef;
}

function isURL(value) {
  return typeof value === 'string' || isType(value, URL, 'URL');
}

var _method = /*#__PURE__*/new WeakMap();

var _evalTemplate = /*#__PURE__*/new WeakMap();

var _delimiters = /*#__PURE__*/new WeakMap();

var _baseURL = /*#__PURE__*/new WeakMap();

var _url = /*#__PURE__*/new WeakMap();

var _args = /*#__PURE__*/new WeakMap();

var _params = /*#__PURE__*/new WeakMap();

var _decode = /*#__PURE__*/new WeakMap();

var _encode = /*#__PURE__*/new WeakMap();

var _data = /*#__PURE__*/new WeakMap();

var _options = /*#__PURE__*/new WeakMap();

var _setAccept = /*#__PURE__*/new WeakSet();

var _setContent = /*#__PURE__*/new WeakSet();

var _getJSONContent = /*#__PURE__*/new WeakSet();

var _getTextContent = /*#__PURE__*/new WeakSet();

var _getURLSearchContent = /*#__PURE__*/new WeakSet();

var _getFormDataContent = /*#__PURE__*/new WeakSet();

var _getBinaryContent = /*#__PURE__*/new WeakSet();

var _getBlobContent = /*#__PURE__*/new WeakSet();

var _getFileContent = /*#__PURE__*/new WeakSet();

var _getStreamContent = /*#__PURE__*/new WeakSet();

var _trigger = /*#__PURE__*/new WeakSet();

class Cher extends EventTarget {
  constructor() {
    super();

    _classPrivateMethodInitSpec(this, _trigger);

    _classPrivateMethodInitSpec(this, _getStreamContent);

    _classPrivateMethodInitSpec(this, _getFileContent);

    _classPrivateMethodInitSpec(this, _getBlobContent);

    _classPrivateMethodInitSpec(this, _getBinaryContent);

    _classPrivateMethodInitSpec(this, _getFormDataContent);

    _classPrivateMethodInitSpec(this, _getURLSearchContent);

    _classPrivateMethodInitSpec(this, _getTextContent);

    _classPrivateMethodInitSpec(this, _getJSONContent);

    _classPrivateMethodInitSpec(this, _setContent);

    _classPrivateMethodInitSpec(this, _setAccept);

    _classPrivateFieldInitSpec(this, _method, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _evalTemplate, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _delimiters, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _baseURL, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _url, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _args, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _params, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _decode, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _encode, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });

    this.reset();
    this.set(...arguments);
  }
  /* Properties */
  // method


  get method() {
    return _classPrivateFieldGet(this, _method);
  }

  set method(value) {
    _classPrivateFieldSet(this, _method, getNormalizedMethod(value));
  } // evalTemplate


  get evalTemplate() {
    return _classPrivateFieldGet(this, _evalTemplate);
  }

  set evalTemplate(value) {
    _classPrivateFieldSet(this, _evalTemplate, typeof value === 'function' ? value : template => template);
  } // delimiters


  get delimiters() {
    return _classPrivateFieldGet(this, _delimiters);
  }

  set delimiters(value) {
    var _value$, _value$2;

    _classPrivateFieldSet(this, _delimiters, isObject(value) ? [toString((_value$ = value[0]) !== null && _value$ !== void 0 ? _value$ : ''), toString((_value$2 = value[1]) !== null && _value$2 !== void 0 ? _value$2 : '')] : [toString(value !== null && value !== void 0 ? value : ''), toString(value !== null && value !== void 0 ? value : '')]);
  } // baseURL


  get baseURL() {
    return _classPrivateFieldGet(this, _baseURL);
  }

  set baseURL(value) {
    var _value;

    (_value = value) !== null && _value !== void 0 ? _value : value = [];

    if (!isArray(value)) {
      value = [..._classPrivateFieldGet(this, _baseURL), value];
    }

    _classPrivateFieldSet(this, _baseURL, value.reduce((reducedItems, item) => {
      var _item;

      item = toString((_item = item) !== null && _item !== void 0 ? _item : '');

      if (item) {
        reducedItems.push(item);
      }

      return reducedItems;
    }, []));
  } // url


  get url() {
    return _classPrivateFieldGet(this, _url);
  }

  set url(value) {
    _classPrivateFieldSet(this, _url, toString(value !== null && value !== void 0 ? value : ''));
  } // args


  get args() {
    return _classPrivateFieldGet(this, _args);
  }

  set args(value) {
    _classPrivateFieldSet(this, _args, value !== null && value !== void 0 ? value : undef);
  } // params


  get params() {
    return _classPrivateFieldGet(this, _params);
  }

  set params(value) {
    _classPrivateFieldSet(this, _params, value !== null && value !== void 0 ? value : undef);
  } // decode


  get decode() {
    return _classPrivateFieldGet(this, _decode);
  }

  set decode(value) {
    _classPrivateFieldSet(this, _decode, value in decodings ? toString(value) : undef);
  } // encode


  get encode() {
    return _classPrivateFieldGet(this, _encode);
  }

  set encode(value) {
    _classPrivateFieldSet(this, _encode, value in encodings ? toString(value) : undef);
  } // data


  get data() {
    return _classPrivateFieldGet(this, _data);
  }

  set data(value) {
    _classPrivateFieldSet(this, _data, value);
  } // options


  get options() {
    return _classPrivateFieldGet(this, _options);
  }

  set options(value) {
    if (isObject(value)) {
      value = _objectSpread2({}, value);

      if ('method' in value) {
        var method = getNormalizedMethod(value.method);

        if (isUndefined(method)) {
          delete value.method;
        } else {
          value.method = method;
        }
      }
    } else {
      value = undef;
    }

    _classPrivateFieldSet(this, _options, value);
  }
  /* Methods */
  // eslint-disable-next-line class-methods-use-this


  getDefault(key) {
    return defaults[key];
  }

  setDefault(key, value, reset) {
    if (key in defaultKeys) {
      defaults[key] = value;

      if (reset) {
        this[key] = typeof defaults[key] === 'function' ? defaults[key]() : defaults[key];
      }
    }
  }

  resetDefault(key, reset) {
    this.setDefault(key, initialDefaults[key], reset);
  } // eslint-disable-next-line class-methods-use-this


  getDefaults() {
    return getNormalizedObject(defaultKeys, defaults);
  }

  setDefaults() {
    var _config;

    for (var _len = arguments.length, config = new Array(_len), _key = 0; _key < _len; _key++) {
      config[_key] = arguments[_key];
    }

    var url;
    var reset;

    if (isURL(config[0])) {
      [url, config, reset] = config;
      config.url = url;
    } else {
      [config, reset] = config;
    }

    (_config = config) !== null && _config !== void 0 ? _config : config = createNullObject();
    defaultKeys.forEach(key => {
      if (key in config) {
        this.setDefault(key, config[key], reset);
      }
    });

    if (!isUndefined(url)) {
      this.setDefault('url', url, reset);
    }
  }

  resetDefaults(reset) {
    this.setDefaults(initialDefaults, reset);
  }

  reset(initial) {
    var values = initial ? initialDefaults : defaults;
    defaultKeys.forEach(key => {
      this[key] = typeof values[key] === 'function' ? values[key]() : values[key];
    });
  }

  set() {
    var _config2;

    for (var _len2 = arguments.length, config = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      config[_key2] = arguments[_key2];
    }

    var url;

    if (isURL(config[0])) {
      [url, config] = config;
    } else {
      [config] = config;
    }

    (_config2 = config) !== null && _config2 !== void 0 ? _config2 : config = createNullObject();
    instanceKeys.forEach(key => {
      if (key in config) {
        this[key] = config[key];
      }
    });

    if (!isUndefined(url)) {
      this.url = url;
    }
  }

  getConfig() {
    return getNormalizedObject(instanceKeys, this);
  }

  getURL() {
    var _config3, _delimiters2, _url2, _args2, _params2;

    for (var _len3 = arguments.length, config = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      config[_key3] = arguments[_key3];
    }

    var url;

    if (isURL(config[0])) {
      [url, config] = config;
    } else {
      [config] = config;
    }

    (_config3 = config) !== null && _config3 !== void 0 ? _config3 : config = createNullObject();
    var {
      evalTemplate,
      delimiters,
      baseURL,
      args,
      params
    } = config;

    if (isUndefined(url)) {
      ({
        url
      } = config);
    }

    evalTemplate = typeof evalTemplate === 'function' ? evalTemplate : this.evalTemplate;
    (_delimiters2 = delimiters) !== null && _delimiters2 !== void 0 ? _delimiters2 : delimiters = this.delimiters;
    baseURL = [...this.baseURL, ...(isArray(baseURL) ? baseURL : [baseURL]).reduce((reducedItems, item) => {
      var _item2;

      item = toString((_item2 = item) !== null && _item2 !== void 0 ? _item2 : '');

      if (item) {
        reducedItems.push(item);
      }

      return reducedItems;
    }, [])];
    url = toString((_url2 = url) !== null && _url2 !== void 0 ? _url2 : this.url);
    args = _objectSpread2(_objectSpread2({}, this.args), (_args2 = args) !== null && _args2 !== void 0 ? _args2 : undef);
    params = appendParamsToParams(this.params, (_params2 = params) !== null && _params2 !== void 0 ? _params2 : undef);
    return getURL(evalTemplate, delimiters, args, params, url, ...baseURL.reverse());
  }

  getOptions(config) {
    var _config4;

    (_config4 = config) !== null && _config4 !== void 0 ? _config4 : config = createNullObject();
    var {
      decode,
      encode,
      data
    } = config;
    var {
      method,
      options
    } = config;
    method = getNormalizedMethod(method);

    if (isUndefined(method)) {
      method = this.method;
    }

    if (method) {
      method = {
        method
      };
    }

    if (isObject(options)) {
      options = _objectSpread2({}, options);

      if ('method' in options) {
        var methodOption = getNormalizedMethod(options.method);

        if (isUndefined(methodOption)) {
          delete options.method;
        } else {
          options.method = methodOption;
        }
      }
    } else {
      options = undef;
    }

    options = _objectSpread2(_objectSpread2(_objectSpread2({
      method: 'GET'
    }, this.options), options), method);
    method = options.method;
    options.headers = new Headers(options.headers);
    var {
      headers
    } = options;

    _classPrivateMethodGet(this, _setAccept, _setAccept2).call(this, headers, decode);

    _classPrivateMethodGet(this, _setContent, _setContent2).call(this, method, headers, options, encode, data);

    return options;
  }

  fetch() {
    var _this = this;

    for (var _len4 = arguments.length, config = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      config[_key4] = arguments[_key4];
    }

    var url;

    if (isURL(config[0])) {
      [url, config] = config;
    } else {
      [config] = config;
    }

    config = getNormalizedObject(fetchKeys, config);

    if (!isUndefined(url)) {
      config.url = url;
    }

    var {
      listeners
    } = config;
    var detail = {
      instance: this,
      fetchConfig: config
    };

    _classPrivateMethodGet(this, _trigger, _trigger2).call(this, 'start', {
      detail
    }, listeners);

    detail.fetchUrl = this.getURL(config);
    detail.fetchOptions = this.getOptions(config);
    var call = fetch(detail.fetchUrl, detail.fetchOptions);
    detail.fetch = call;

    _classPrivateMethodGet(this, _trigger, _trigger2).call(this, 'started', {
      detail
    }, listeners);

    return detail.fetch.then(response => {
      detail.response = response;

      _classPrivateMethodGet(this, _trigger, _trigger2).call(this, 'loaded', {
        detail
      }, listeners);

      if (!detail.response.ok) {
        throw new ResponseError(detail.response);
      }

      _classPrivateMethodGet(this, _trigger, _trigger2).call(this, 'checked', {
        detail
      }, listeners);

      return detail.response;
    }).then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (response) {
        if (response.status in bodylessHttpResponseStatusCodes || response.body == null) {
          _classPrivateMethodGet(_this, _trigger, _trigger2).call(_this, 'bodyless', {
            detail
          }, listeners);
        } else {
          var _decode2;

          var {
            decode
          } = config;
          decode = toString((_decode2 = decode) !== null && _decode2 !== void 0 ? _decode2 : '') || _this.decode;
          decode = decodings[decode];

          if (decode) {
            response.data = typeof decode === 'function' ? yield decode(response) : yield response[decode]();

            _classPrivateMethodGet(_this, _trigger, _trigger2).call(_this, 'decoded', {
              detail
            }, listeners);
          } else {
            response.data = response.body;

            _classPrivateMethodGet(_this, _trigger, _trigger2).call(_this, 'unprocessed', {
              detail
            }, listeners);
          }
        }

        return detail.response;
      });

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }()).catch(error => {
      detail.error = error;

      _classPrivateMethodGet(this, _trigger, _trigger2).call(this, 'error', {
        detail
      }, listeners);

      if (detail.error != null) {
        _classPrivateMethodGet(this, _trigger, _trigger2).call(this, 'uncatched', {
          detail
        }, listeners);

        throw detail.error;
      }

      _classPrivateMethodGet(this, _trigger, _trigger2).call(this, 'catched', {
        detail
      }, listeners);

      return detail.response;
    }).finally(() => {
      _classPrivateMethodGet(this, _trigger, _trigger2).call(this, 'end', {
        detail
      }, listeners);
    });
  }

  create() {
    for (var _len5 = arguments.length, config = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      config[_key5] = arguments[_key5];
    }

    if (config[0] === true) {
      config[0] = this.getConfig();
    }

    return (// eslint-disable-next-line no-use-before-define
      createCher(...config)
    );
  }

}

function _setAccept2(headers, decode) {
  decode = decode in decodings ? toString(decode) : this.decode;
  var accept;

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
        accept = '*/*'; // accept = 'application/octet-stream,*/*';
      }

      break;
  }

  if (!(accept || headers.has('Accept'))) {
    accept = '*/*'; // accept = 'application/json,text/plain,*/*';
  }

  if (accept) {
    headers.set('Accept', accept);
  }

  return headers;
}

function _setContent2(method, headers, options, encode, data) {
  method = getNormalizedMethod(method);
  encode = encode in encodings ? toString(encode) : this.encode;

  if (method in bodylessHttpRequestMethods) {
    headers.delete('Content-Type');
    delete options.body;
  } else if (!(isUndefined(data) && isUndefined(this.data))) {
    switch (encode) {
      case 'json':
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        options.body = _classPrivateMethodGet(this, _getJSONContent, _getJSONContent2).call(this, data);
        break;

      case 'text':
        headers.set('Content-Type', 'text/plain;charset=UTF-8');
        options.body = _classPrivateMethodGet(this, _getTextContent, _getTextContent2).call(this, data);
        break;

      case 'url':
        headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        options.body = _classPrivateMethodGet(this, _getURLSearchContent, _getURLSearchContent2).call(this, data);
        break;

      case 'form':
        headers.delete('Content-Type');
        options.body = _classPrivateMethodGet(this, _getFormDataContent, _getFormDataContent2).call(this, data);
        break;

      case 'blob':
        options.body = _classPrivateMethodGet(this, _getBlobContent, _getBlobContent2).call(this, data);
        break;

      case 'file':
        options.body = _classPrivateMethodGet(this, _getFileContent, _getFileContent2).call(this, data);
        break;

      case 'stream':
        options.body = _classPrivateMethodGet(this, _getStreamContent, _getStreamContent2).call(this, data);
        break;

      case 'buffer':
      case 'none':
      default:
        options.body = isUndefined(data) ? this.data : data;
        break;
    }
  } else if (isUndefined(options.body)) {
    headers.delete('Content-Type');
    delete options.body;
  }
}

function _getJSONContent2(data) {
  if (isArray(data)) {
    if (isArray(this.data)) {
      data = [...this.data, ...data];
    }
  } else if (isObject(data)) {
    if (isObject(this.data) && !isArray(this.data)) {
      data = _objectSpread2(_objectSpread2({}, this.data), data);
    }
  } else if (isUndefined(data)) {
    data = this.data;
  }

  return JSON.stringify(data);
}

function _getTextContent2(data) {
  return toString(isUndefined(data) ? this.data : data);
}

function _getURLSearchContent2(data) {
  return appendParamsToParams(this.data, data);
}

function _getFormDataContent2(data) {
  if (isUndefined(this.data)) {
    return toFormData(data);
  }

  var formData = toFormData(this.data);

  if (!isUndefined(data)) {
    toFormData(data).forEach((value, key) => {
      formData.append(key, value);
    });
  }

  return formData;
}

function _getBinaryContent2(data, TypeConstructor, typeName) {
  data = isUndefined(data) ? this.data : data;

  if (isType(data, TypeConstructor, typeName)) {
    return data;
  }

  if (!isArray(data)) {
    data = [data];
  }

  return new TypeConstructor(isArray(data[0]) ? data[0] : [data[0]], ...data.slice(1));
}

function _getBlobContent2(data) {
  return _classPrivateMethodGet(this, _getBinaryContent, _getBinaryContent2).call(this, data, Blob, 'Blob');
}

function _getFileContent2(data) {
  return _classPrivateMethodGet(this, _getBinaryContent, _getBinaryContent2).call(this, data, File, 'File');
}

function _getStreamContent2(data) {
  data = isUndefined(data) ? this.data : data;

  if (isType(data, ReadableStream, 'ReadableStream')) {
    return data;
  }

  return new ReadableStream(...(isArray(data) ? data : [data]));
}

function _trigger2(type, event, listeners) {
  var _event, _listeners;

  (_event = event) !== null && _event !== void 0 ? _event : event = createNullObject();
  var {
    detail // bubbles,
    // cancelable,
    // composed,

  } = event;
  listeners = (_listeners = listeners) === null || _listeners === void 0 ? void 0 : _listeners[type];

  if (listeners) {
    listeners = isArray(listeners) ? [...listeners] : [listeners];
    listeners.forEach((listener, index) => {
      if (!isArray(listener)) {
        listeners[index] = [listener];
      }

      this.addEventListener(type, ...listeners[index]);
    });
  }

  this.dispatchEvent(new CustomEvent(type, {
    detail // bubbles,
    // cancelable,
    // composed,

  }));

  if (listeners) {
    listeners.forEach(listener => {
      this.removeEventListener(type, ...listener);
    });
  }
}

function createCher() {
  for (var _len6 = arguments.length, config = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    config[_key6] = arguments[_key6];
  }

  var instance = new Cher(...config);
  var cher = instance.fetch.bind(instance); // properties

  ['method', 'evalTemplate', 'delimiters', 'baseURL', 'url', 'args', 'params', 'decode', 'encode', 'data', 'options'].forEach(property => {
    Object.defineProperty(cher, property, {
      get() {
        return instance[property];
      },

      set(value) {
        instance[property] = value;
      }

    });
  }); // methods

  [// super (EventTarget)
  'addEventListener', 'removeEventListener', 'dispatchEvent', // own (Cher)
  'getDefault', 'setDefault', 'resetDefault', 'getDefaults', 'setDefaults', 'resetDefaults', 'reset', 'set', 'getConfig', 'getURL', 'getOptions', 'fetch', 'create'].forEach(method => {
    Object.defineProperty(cher, method, {
      configurable: true,
      writable: true,
      value: instance[method].bind(instance)
    });
  });
  return cher;
}

var index = createCher();

export { index as default };
//# sourceMappingURL=cher.esm.js.map
