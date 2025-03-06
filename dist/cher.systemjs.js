/*!
 * Cher v1.1.0 (npm: cherjs)
 * https://cherjs.org/
 * Copyright (c) 2022-present Haász Sándor
 * Released under the MIT License.
 */

System.register('cher', [], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      function _assertClassBrand(e, t, n) {
        if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
        throw new TypeError("Private element is not present on this object");
      }
      function asyncGeneratorStep(n, t, e, r, o, a, c) {
        try {
          var i = n[a](c),
            u = i.value;
        } catch (n) {
          return void e(n);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function _asyncToGenerator(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, o) {
            var a = n.apply(t, e);
            function _next(n) {
              asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
              asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
          });
        };
      }
      function _checkPrivateRedeclaration(e, t) {
        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
      }
      function _classPrivateFieldGet2(s, a) {
        return s.get(_assertClassBrand(s, a));
      }
      function _classPrivateFieldInitSpec(e, t, a) {
        _checkPrivateRedeclaration(e, t), t.set(e, a);
      }
      function _classPrivateFieldSet2(s, a, r) {
        return s.set(_assertClassBrand(s, a), r), r;
      }
      function _classPrivateMethodInitSpec(e, a) {
        _checkPrivateRedeclaration(e, a), a.add(e);
      }
      function _defineProperty(e, r, t) {
        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[r] = t, e;
      }
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })), t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
            _defineProperty(e, r, t[r]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
        }
        return e;
      }
      function _toPrimitive(t, r) {
        if ("object" != typeof t || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r);
          if ("object" != typeof i) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == typeof i ? i : i + "";
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
        object !== null && object !== void 0 ? object : object = createNullObject();
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
      }));

      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
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
      }));

      // https://fetch.spec.whatwg.org/#statuses
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
        var _delimiters$, _delimiters$2;
        delimiters = isObject(delimiters) ? [toString((_delimiters$ = delimiters[0]) !== null && _delimiters$ !== void 0 ? _delimiters$ : ''), toString((_delimiters$2 = delimiters[1]) !== null && _delimiters$2 !== void 0 ? _delimiters$2 : '')] : [toString(delimiters !== null && delimiters !== void 0 ? delimiters : ''), toString(delimiters !== null && delimiters !== void 0 ? delimiters : '')];
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
        ) || ((_location = location) === null || _location === void 0 ? void 0 : _location.href);

        // because of Edge Legacy (before Edge 79)
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
      var _Cher_brand = /*#__PURE__*/new WeakSet();
      class Cher extends EventTarget {
        constructor() {
          super();
          _classPrivateMethodInitSpec(this, _Cher_brand);
          // method

          _classPrivateFieldInitSpec(this, _method, void 0);
          // evalTemplate

          _classPrivateFieldInitSpec(this, _evalTemplate, void 0);
          // delimiters

          _classPrivateFieldInitSpec(this, _delimiters, void 0);
          // baseURL

          _classPrivateFieldInitSpec(this, _baseURL, []);
          // url

          _classPrivateFieldInitSpec(this, _url, void 0);
          // args

          _classPrivateFieldInitSpec(this, _args, void 0);
          // params

          _classPrivateFieldInitSpec(this, _params, void 0);
          // decode

          _classPrivateFieldInitSpec(this, _decode, void 0);
          // encode

          _classPrivateFieldInitSpec(this, _encode, void 0);
          // data

          _classPrivateFieldInitSpec(this, _data, void 0);
          // options

          _classPrivateFieldInitSpec(this, _options, void 0);
          this.reset();
          this.set(...arguments);
        }

        /* Properties */

        // supported

        // eslint-disable-next-line class-methods-use-this
        get supported() {
          return typeof fetch === 'function';
        }
        get method() {
          return _classPrivateFieldGet2(_method, this);
        }
        set method(value) {
          _classPrivateFieldSet2(_method, this, getNormalizedMethod(value));
        }
        get evalTemplate() {
          return _classPrivateFieldGet2(_evalTemplate, this);
        }
        set evalTemplate(value) {
          _classPrivateFieldSet2(_evalTemplate, this, typeof value === 'function' ? value : template => template);
        }
        get delimiters() {
          return _classPrivateFieldGet2(_delimiters, this);
        }
        set delimiters(value) {
          var _value$, _value$2;
          _classPrivateFieldSet2(_delimiters, this, isObject(value) ? [toString((_value$ = value[0]) !== null && _value$ !== void 0 ? _value$ : ''), toString((_value$2 = value[1]) !== null && _value$2 !== void 0 ? _value$2 : '')] : [toString(value !== null && value !== void 0 ? value : ''), toString(value !== null && value !== void 0 ? value : '')]);
        }
        get baseURL() {
          return _classPrivateFieldGet2(_baseURL, this);
        }
        set baseURL(value) {
          value !== null && value !== void 0 ? value : value = [];
          if (!isArray(value)) {
            value = [..._classPrivateFieldGet2(_baseURL, this), value];
          }
          _classPrivateFieldSet2(_baseURL, this, value.reduce((reducedItems, item) => {
            item = toString(item !== null && item !== void 0 ? item : '');
            if (item) {
              reducedItems.push(item);
            }
            return reducedItems;
          }, []));
        }
        get url() {
          return _classPrivateFieldGet2(_url, this);
        }
        set url(value) {
          _classPrivateFieldSet2(_url, this, toString(value !== null && value !== void 0 ? value : ''));
        }
        get args() {
          return _classPrivateFieldGet2(_args, this);
        }
        set args(value) {
          _classPrivateFieldSet2(_args, this, value !== null && value !== void 0 ? value : undef);
        }
        get params() {
          return _classPrivateFieldGet2(_params, this);
        }
        set params(value) {
          _classPrivateFieldSet2(_params, this, value !== null && value !== void 0 ? value : undef);
        }
        get decode() {
          return _classPrivateFieldGet2(_decode, this);
        }
        set decode(value) {
          _classPrivateFieldSet2(_decode, this, value in decodings ? toString(value) : undef);
        }
        get encode() {
          return _classPrivateFieldGet2(_encode, this);
        }
        set encode(value) {
          _classPrivateFieldSet2(_encode, this, value in encodings ? toString(value) : undef);
        }
        get data() {
          return _classPrivateFieldGet2(_data, this);
        }
        set data(value) {
          _classPrivateFieldSet2(_data, this, value);
        }
        get options() {
          return _classPrivateFieldGet2(_options, this);
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
          _classPrivateFieldSet2(_options, this, value);
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
        }

        // eslint-disable-next-line class-methods-use-this
        getDefaults() {
          return getNormalizedObject(defaultKeys, defaults);
        }
        setDefaults() {
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
          config !== null && config !== void 0 ? config : config = createNullObject();
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
          for (var _len2 = arguments.length, config = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            config[_key2] = arguments[_key2];
          }
          var url;
          if (isURL(config[0])) {
            [url, config] = config;
          } else {
            [config] = config;
          }
          config !== null && config !== void 0 ? config : config = createNullObject();
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
          for (var _len3 = arguments.length, config = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            config[_key3] = arguments[_key3];
          }
          var url;
          if (isURL(config[0])) {
            [url, config] = config;
          } else {
            [config] = config;
          }
          config !== null && config !== void 0 ? config : config = createNullObject();
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
          delimiters !== null && delimiters !== void 0 ? delimiters : delimiters = this.delimiters;
          baseURL = [...this.baseURL, ...(isArray(baseURL) ? baseURL : [baseURL]).reduce((reducedItems, item) => {
            item = toString(item !== null && item !== void 0 ? item : '');
            if (item) {
              reducedItems.push(item);
            }
            return reducedItems;
          }, [])];
          url = toString(url !== null && url !== void 0 ? url : this.url);
          args = _objectSpread2(_objectSpread2({}, this.args), args !== null && args !== void 0 ? args : undef);
          params = appendParamsToParams(this.params, params !== null && params !== void 0 ? params : undef);
          return getURL(evalTemplate, delimiters, args, params, url, ...baseURL.reverse());
        }
        getOptions(config) {
          config !== null && config !== void 0 ? config : config = createNullObject();
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
          _assertClassBrand(_Cher_brand, this, _setAccept).call(this, headers, decode);
          _assertClassBrand(_Cher_brand, this, _setContent).call(this, method, headers, options, encode, data);
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
          _assertClassBrand(_Cher_brand, this, _trigger).call(this, 'start', {
            detail
          }, listeners);
          detail.fetchUrl = this.getURL(config);
          detail.fetchOptions = this.getOptions(config);
          detail.fetch = fetch(detail.fetchUrl, detail.fetchOptions);
          _assertClassBrand(_Cher_brand, this, _trigger).call(this, 'started', {
            detail
          }, listeners);
          return detail.fetch.then(response => {
            detail.response = response;
            _assertClassBrand(_Cher_brand, this, _trigger).call(this, 'loaded', {
              detail
            }, listeners);
            if (!detail.response.ok) {
              throw new ResponseError(detail.response);
            }
            _assertClassBrand(_Cher_brand, this, _trigger).call(this, 'checked', {
              detail
            }, listeners);
            return detail.response;
          }).then(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(function* (response) {
              if (response.status in bodylessHttpResponseStatusCodes || response.body == null) {
                _assertClassBrand(_Cher_brand, _this, _trigger).call(_this, 'bodyless', {
                  detail
                }, listeners);
              } else {
                var {
                  decode
                } = config;
                decode = toString(decode !== null && decode !== void 0 ? decode : '') || _this.decode;
                decode = decodings[decode];
                if (decode) {
                  response.data = typeof decode === 'function' ? yield decode(response) : yield response[decode]();
                  _assertClassBrand(_Cher_brand, _this, _trigger).call(_this, 'decoded', {
                    detail
                  }, listeners);
                } else {
                  response.data = response.body;
                  _assertClassBrand(_Cher_brand, _this, _trigger).call(_this, 'unprocessed', {
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
            _assertClassBrand(_Cher_brand, this, _trigger).call(this, 'error', {
              detail
            }, listeners);
            if (detail.error != null) {
              _assertClassBrand(_Cher_brand, this, _trigger).call(this, 'uncatched', {
                detail
              }, listeners);
              throw detail.error;
            }
            _assertClassBrand(_Cher_brand, this, _trigger).call(this, 'catched', {
              detail
            }, listeners);
            return detail.response;
          }).finally(() => {
            _assertClassBrand(_Cher_brand, this, _trigger).call(this, 'end', {
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
          return (
            // eslint-disable-next-line no-use-before-define
            createCher(...config)
          );
        }
      }
      function _setAccept(headers, decode) {
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
              accept = '*/*';
              // accept = 'application/octet-stream,*/*';
            }
            break;
        }
        if (!(accept || headers.has('Accept'))) {
          accept = '*/*';
          // accept = 'application/json,text/plain,*/*';
        }
        if (accept) {
          headers.set('Accept', accept);
        }
        return headers;
      }
      function _setContent(method, headers, options, encode, data) {
        method = getNormalizedMethod(method);
        encode = encode in encodings ? toString(encode) : this.encode;
        if (method in bodylessHttpRequestMethods) {
          headers.delete('Content-Type');
          delete options.body;
        } else if (!(isUndefined(data) && isUndefined(this.data))) {
          switch (encode) {
            case 'json':
              headers.set('Content-Type', 'application/json;charset=UTF-8');
              options.body = _assertClassBrand(_Cher_brand, this, _getJSONContent).call(this, data);
              break;
            case 'text':
              headers.set('Content-Type', 'text/plain;charset=UTF-8');
              options.body = _assertClassBrand(_Cher_brand, this, _getTextContent).call(this, data);
              break;
            case 'url':
              headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
              options.body = _assertClassBrand(_Cher_brand, this, _getURLSearchContent).call(this, data);
              break;
            case 'form':
              headers.delete('Content-Type');
              options.body = _assertClassBrand(_Cher_brand, this, _getFormDataContent).call(this, data);
              break;
            case 'blob':
              options.body = _assertClassBrand(_Cher_brand, this, _getBlobContent).call(this, data);
              break;
            case 'file':
              options.body = _assertClassBrand(_Cher_brand, this, _getFileContent).call(this, data);
              break;
            case 'stream':
              options.body = _assertClassBrand(_Cher_brand, this, _getStreamContent).call(this, data);
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
      function _getJSONContent(data) {
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
      function _getTextContent(data) {
        return toString(isUndefined(data) ? this.data : data);
      }
      function _getURLSearchContent(data) {
        return appendParamsToParams(this.data, data);
      }
      function _getFormDataContent(data) {
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
      function _getBinaryContent(data, TypeConstructor, typeName) {
        data = isUndefined(data) ? this.data : data;
        if (isType(data, TypeConstructor, typeName)) {
          return data;
        }
        if (!isArray(data)) {
          data = [data];
        }
        return new TypeConstructor(isArray(data[0]) ? data[0] : [data[0]], ...data.slice(1));
      }
      function _getBlobContent(data) {
        return _assertClassBrand(_Cher_brand, this, _getBinaryContent).call(this, data, Blob, 'Blob');
      }
      function _getFileContent(data) {
        return _assertClassBrand(_Cher_brand, this, _getBinaryContent).call(this, data, File, 'File');
      }
      function _getStreamContent(data) {
        data = isUndefined(data) ? this.data : data;
        if (isType(data, ReadableStream, 'ReadableStream')) {
          return data;
        }
        return new ReadableStream(...(isArray(data) ? data : [data]));
      }
      function _trigger(type, event, listeners) {
        var _listeners;
        event !== null && event !== void 0 ? event : event = createNullObject();
        var {
          detail
          // bubbles,
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
          detail
          // bubbles,
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
        var cher = instance.fetch.bind(instance);

        // properties
        ['method', 'evalTemplate', 'delimiters', 'baseURL', 'url', 'args', 'params', 'decode', 'encode', 'data', 'options'].forEach(property => {
          Object.defineProperty(cher, property, {
            get() {
              return instance[property];
            },
            set(value) {
              instance[property] = value;
            }
          });
        });

        // methods
        [
        // super (EventTarget)
        'addEventListener', 'removeEventListener', 'dispatchEvent',
        // own (Cher)
        'getDefault', 'setDefault', 'resetDefault', 'getDefaults', 'setDefaults', 'resetDefaults', 'reset', 'set', 'getConfig', 'getURL', 'getOptions', 'fetch', 'create'].forEach(method => {
          Object.defineProperty(cher, method, {
            configurable: true,
            writable: true,
            value: instance[method].bind(instance)
          });
        });
        return cher;
      }
      var index = exports("default", createCher());

    })
  };
}));
//# sourceMappingURL=cher.systemjs.js.map
