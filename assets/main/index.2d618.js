window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  1: [ function(require, module, exports) {
    (function(Buffer) {
      var __create = Object.create;
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __getOwnPropSymbols = Object.getOwnPropertySymbols;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __propIsEnum = Object.prototype.propertyIsEnumerable;
      var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: value
      }) : obj[key] = value;
      var __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        return a;
      };
      var __markAsModule = target => __defProp(target, "__esModule", {
        value: true
      });
      var __commonJS = (cb, mod) => (function __require() {
        return mod || (0, cb[Object.keys(cb)[0]])((mod = {
          exports: {}
        }).exports, mod), mod.exports;
      });
      var __export = (target, all) => {
        __markAsModule(target);
        for (var name in all) __defProp(target, name, {
          get: all[name],
          enumerable: true
        });
      };
      var __reExport = (target, module2, desc) => {
        if (module2 && "object" === typeof module2 || "function" === typeof module2) for (let key of __getOwnPropNames(module2)) __hasOwnProp.call(target, key) || "default" === key || __defProp(target, key, {
          get: () => module2[key],
          enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
        });
        return target;
      };
      var __toModule = module2 => __reExport(__markAsModule(__defProp(null != module2 ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {
        get: () => module2.default,
        enumerable: true
      } : {
        value: module2,
        enumerable: true
      })), module2);
      var __async = (__this, __arguments, generator) => new Promise((resolve, reject) => {
        var fulfilled = value => {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        };
        var rejected = value => {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject(e);
          }
        };
        var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
      });
      var require_fetch = __commonJS({
        "node_modules/whatwg-fetch/fetch.js"(exports) {
          (function(self2) {
            "use strict";
            if (self2.fetch) return;
            var support = {
              searchParams: "URLSearchParams" in self2,
              iterable: "Symbol" in self2 && "iterator" in Symbol,
              blob: "FileReader" in self2 && "Blob" in self2 && function() {
                try {
                  new Blob();
                  return true;
                } catch (e) {
                  return false;
                }
              }(),
              formData: "FormData" in self2,
              arrayBuffer: "ArrayBuffer" in self2
            };
            if (support.arrayBuffer) {
              var viewClasses = [ "[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]" ];
              var isDataView = function(obj) {
                return obj && DataView.prototype.isPrototypeOf(obj);
              };
              var isArrayBufferView = ArrayBuffer.isView || function(obj) {
                return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
              };
            }
            function normalizeName(name) {
              "string" !== typeof name && (name = String(name));
              if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) throw new TypeError("Invalid character in header field name");
              return name.toLowerCase();
            }
            function normalizeValue(value) {
              "string" !== typeof value && (value = String(value));
              return value;
            }
            function iteratorFor(items) {
              var iterator = {
                next: function() {
                  var value = items.shift();
                  return {
                    done: void 0 === value,
                    value: value
                  };
                }
              };
              support.iterable && (iterator[Symbol.iterator] = function() {
                return iterator;
              });
              return iterator;
            }
            function Headers(headers) {
              this.map = {};
              headers instanceof Headers ? headers.forEach(function(value, name) {
                this.append(name, value);
              }, this) : Array.isArray(headers) ? headers.forEach(function(header) {
                this.append(header[0], header[1]);
              }, this) : headers && Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
              }, this);
            }
            Headers.prototype.append = function(name, value) {
              name = normalizeName(name);
              value = normalizeValue(value);
              var oldValue = this.map[name];
              this.map[name] = oldValue ? oldValue + "," + value : value;
            };
            Headers.prototype["delete"] = function(name) {
              delete this.map[normalizeName(name)];
            };
            Headers.prototype.get = function(name) {
              name = normalizeName(name);
              return this.has(name) ? this.map[name] : null;
            };
            Headers.prototype.has = function(name) {
              return this.map.hasOwnProperty(normalizeName(name));
            };
            Headers.prototype.set = function(name, value) {
              this.map[normalizeName(name)] = normalizeValue(value);
            };
            Headers.prototype.forEach = function(callback, thisArg) {
              for (var name in this.map) this.map.hasOwnProperty(name) && callback.call(thisArg, this.map[name], name, this);
            };
            Headers.prototype.keys = function() {
              var items = [];
              this.forEach(function(value, name) {
                items.push(name);
              });
              return iteratorFor(items);
            };
            Headers.prototype.values = function() {
              var items = [];
              this.forEach(function(value) {
                items.push(value);
              });
              return iteratorFor(items);
            };
            Headers.prototype.entries = function() {
              var items = [];
              this.forEach(function(value, name) {
                items.push([ name, value ]);
              });
              return iteratorFor(items);
            };
            support.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
            function consumed(body) {
              if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
              body.bodyUsed = true;
            }
            function fileReaderReady(reader) {
              return new Promise(function(resolve, reject) {
                reader.onload = function() {
                  resolve(reader.result);
                };
                reader.onerror = function() {
                  reject(reader.error);
                };
              });
            }
            function readBlobAsArrayBuffer(blob) {
              var reader = new FileReader();
              var promise = fileReaderReady(reader);
              reader.readAsArrayBuffer(blob);
              return promise;
            }
            function readBlobAsText(blob) {
              var reader = new FileReader();
              var promise = fileReaderReady(reader);
              reader.readAsText(blob);
              return promise;
            }
            function readArrayBufferAsText(buf) {
              var view = new Uint8Array(buf);
              var chars = new Array(view.length);
              for (var i = 0; i < view.length; i++) chars[i] = String.fromCharCode(view[i]);
              return chars.join("");
            }
            function bufferClone(buf) {
              if (buf.slice) return buf.slice(0);
              var view = new Uint8Array(buf.byteLength);
              view.set(new Uint8Array(buf));
              return view.buffer;
            }
            function Body() {
              this.bodyUsed = false;
              this._initBody = function(body) {
                this._bodyInit = body;
                if (body) if ("string" === typeof body) this._bodyText = body; else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body; else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body; else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString(); else if (support.arrayBuffer && support.blob && isDataView(body)) {
                  this._bodyArrayBuffer = bufferClone(body.buffer);
                  this._bodyInit = new Blob([ this._bodyArrayBuffer ]);
                } else {
                  if (!support.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(body) && !isArrayBufferView(body)) throw new Error("unsupported BodyInit type");
                  this._bodyArrayBuffer = bufferClone(body);
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" === typeof body ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : support.searchParams && URLSearchParams.prototype.isPrototypeOf(body) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
              };
              if (support.blob) {
                this.blob = function() {
                  var rejected = consumed(this);
                  if (rejected) return rejected;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer) return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
                  if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([ this._bodyText ]));
                };
                this.arrayBuffer = function() {
                  return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(readBlobAsArrayBuffer);
                };
              }
              this.text = function() {
                var rejected = consumed(this);
                if (rejected) return rejected;
                if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              };
              support.formData && (this.formData = function() {
                return this.text().then(decode2);
              });
              this.json = function() {
                return this.text().then(JSON.parse);
              };
              return this;
            }
            var methods = [ "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT" ];
            function normalizeMethod(method) {
              var upcased = method.toUpperCase();
              return methods.indexOf(upcased) > -1 ? upcased : method;
            }
            function Request(input, options) {
              options = options || {};
              var body = options.body;
              if (input instanceof Request) {
                if (input.bodyUsed) throw new TypeError("Already read");
                this.url = input.url;
                this.credentials = input.credentials;
                options.headers || (this.headers = new Headers(input.headers));
                this.method = input.method;
                this.mode = input.mode;
                if (!body && null != input._bodyInit) {
                  body = input._bodyInit;
                  input.bodyUsed = true;
                }
              } else this.url = String(input);
              this.credentials = options.credentials || this.credentials || "omit";
              !options.headers && this.headers || (this.headers = new Headers(options.headers));
              this.method = normalizeMethod(options.method || this.method || "GET");
              this.mode = options.mode || this.mode || null;
              this.referrer = null;
              if (("GET" === this.method || "HEAD" === this.method) && body) throw new TypeError("Body not allowed for GET or HEAD requests");
              this._initBody(body);
            }
            Request.prototype.clone = function() {
              return new Request(this, {
                body: this._bodyInit
              });
            };
            function decode2(body) {
              var form = new FormData();
              body.trim().split("&").forEach(function(bytes) {
                if (bytes) {
                  var split = bytes.split("=");
                  var name = split.shift().replace(/\+/g, " ");
                  var value = split.join("=").replace(/\+/g, " ");
                  form.append(decodeURIComponent(name), decodeURIComponent(value));
                }
              });
              return form;
            }
            function parseHeaders(rawHeaders) {
              var headers = new Headers();
              var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
              preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                var parts = line.split(":");
                var key = parts.shift().trim();
                if (key) {
                  var value = parts.join(":").trim();
                  headers.append(key, value);
                }
              });
              return headers;
            }
            Body.call(Request.prototype);
            function Response(bodyInit, options) {
              options || (options = {});
              this.type = "default";
              this.status = void 0 === options.status ? 200 : options.status;
              this.ok = this.status >= 200 && this.status < 300;
              this.statusText = "statusText" in options ? options.statusText : "OK";
              this.headers = new Headers(options.headers);
              this.url = options.url || "";
              this._initBody(bodyInit);
            }
            Body.call(Response.prototype);
            Response.prototype.clone = function() {
              return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
              });
            };
            Response.error = function() {
              var response = new Response(null, {
                status: 0,
                statusText: ""
              });
              response.type = "error";
              return response;
            };
            var redirectStatuses = [ 301, 302, 303, 307, 308 ];
            Response.redirect = function(url, status) {
              if (-1 === redirectStatuses.indexOf(status)) throw new RangeError("Invalid status code");
              return new Response(null, {
                status: status,
                headers: {
                  location: url
                }
              });
            };
            self2.Headers = Headers;
            self2.Request = Request;
            self2.Response = Response;
            self2.fetch = function(input, init) {
              return new Promise(function(resolve, reject) {
                var request = new Request(input, init);
                var xhr = new XMLHttpRequest();
                xhr.onload = function() {
                  var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                  };
                  options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                  var body = "response" in xhr ? xhr.response : xhr.responseText;
                  resolve(new Response(body, options));
                };
                xhr.onerror = function() {
                  reject(new TypeError("Network request failed"));
                };
                xhr.ontimeout = function() {
                  reject(new TypeError("Network request failed"));
                };
                xhr.open(request.method, request.url, true);
                "include" === request.credentials ? xhr.withCredentials = true : "omit" === request.credentials && (xhr.withCredentials = false);
                "responseType" in xhr && support.blob && (xhr.responseType = "blob");
                request.headers.forEach(function(value, name) {
                  xhr.setRequestHeader(name, value);
                });
                xhr.send("undefined" === typeof request._bodyInit ? null : request._bodyInit);
              });
            };
            self2.fetch.polyfill = true;
          })("undefined" !== typeof self ? self : exports);
        }
      });
      __export(exports, {
        Client: () => Client,
        DefaultSocket: () => DefaultSocket,
        Session: () => Session,
        WebSocketAdapterText: () => WebSocketAdapterText
      });
      var import_whatwg_fetch = __toModule(require_fetch());
      var _hasatob = "function" === typeof atob;
      var _hasbtoa = "function" === typeof btoa;
      var _hasBuffer = "function" === typeof Buffer;
      var _TD = "function" === typeof TextDecoder ? new TextDecoder() : void 0;
      var _TE = "function" === typeof TextEncoder ? new TextEncoder() : void 0;
      var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var b64chs = [ ...b64ch ];
      var b64tab = (a => {
        let tab = {};
        a.forEach((c, i) => tab[c] = i);
        return tab;
      })(b64chs);
      var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
      var _fromCC = String.fromCharCode.bind(String);
      var _U8Afrom = "function" === typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : (it, fn = (x => x)) => new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
      var _mkUriSafe = src => src.replace(/[+\/]/g, m0 => "+" == m0 ? "-" : "_").replace(/=+$/m, "");
      var _tidyB64 = s => s.replace(/[^A-Za-z0-9\+\/]/g, "");
      var btoaPolyfill = bin => {
        let u32, c0, c1, c2, asc = "";
        const pad = bin.length % 3;
        for (let i = 0; i < bin.length; ) {
          if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255) throw new TypeError("invalid character found");
          u32 = c0 << 16 | c1 << 8 | c2;
          asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[63 & u32];
        }
        return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
      };
      var _btoa = _hasbtoa ? bin => btoa(bin) : _hasBuffer ? bin => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
      var _fromUint8Array = _hasBuffer ? u8a => Buffer.from(u8a).toString("base64") : u8a => {
        const maxargs = 4096;
        let strs = [];
        for (let i = 0, l = u8a.length; i < l; i += maxargs) strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        return _btoa(strs.join(""));
      };
      var cb_utob = c => {
        if (c.length < 2) {
          var cc = c.charCodeAt(0);
          return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | 63 & cc) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | 63 & cc);
        }
        var cc = 65536 + 1024 * (c.charCodeAt(0) - 55296) + (c.charCodeAt(1) - 56320);
        return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | 63 & cc);
      };
      var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
      var utob = u => u.replace(re_utob, cb_utob);
      var _encode = _hasBuffer ? s => Buffer.from(s, "utf8").toString("base64") : _TE ? s => _fromUint8Array(_TE.encode(s)) : s => _btoa(utob(s));
      var encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
      var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
      var cb_btou = cccc => {
        switch (cccc.length) {
         case 4:
          var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
          return _fromCC(55296 + (offset >>> 10)) + _fromCC(56320 + (1023 & offset));

         case 3:
          return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));

         default:
          return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
        }
      };
      var btou = b => b.replace(re_btou, cb_btou);
      var atobPolyfill = asc => {
        asc = asc.replace(/\s+/g, "");
        if (!b64re.test(asc)) throw new TypeError("malformed base64.");
        asc += "==".slice(2 - (3 & asc.length));
        let u24, bin = "", r1, r2;
        for (let i = 0; i < asc.length; ) {
          u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
          bin += 64 === r1 ? _fromCC(u24 >> 16 & 255) : 64 === r2 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, 255 & u24);
        }
        return bin;
      };
      var _atob = _hasatob ? asc => atob(_tidyB64(asc)) : _hasBuffer ? asc => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
      var _toUint8Array = _hasBuffer ? a => _U8Afrom(Buffer.from(a, "base64")) : a => _U8Afrom(_atob(a), c => c.charCodeAt(0));
      var _decode = _hasBuffer ? a => Buffer.from(a, "base64").toString("utf8") : _TD ? a => _TD.decode(_toUint8Array(a)) : a => btou(_atob(a));
      var _unURI = a => _tidyB64(a.replace(/[-_]/g, m0 => "-" == m0 ? "+" : "/"));
      var decode = src => _decode(_unURI(src));
      function buildFetchOptions(method, options, bodyJson) {
        const fetchOptions = __spreadValues(__spreadValues({}, {
          method: method
        }), options);
        fetchOptions.headers = __spreadValues({}, options.headers);
        const descriptor = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "withCredentials");
        (null == descriptor ? void 0 : descriptor.set) || (fetchOptions.credentials = "cocos-ignore");
        Object.keys(fetchOptions.headers).includes("Accept") || (fetchOptions.headers["Accept"] = "application/json");
        Object.keys(fetchOptions.headers).includes("Content-Type") || (fetchOptions.headers["Content-Type"] = "application/json");
        Object.keys(fetchOptions.headers).forEach(key => {
          fetchOptions.headers[key] || delete fetchOptions.headers[key];
        });
        bodyJson && (fetchOptions.body = bodyJson);
        return fetchOptions;
      }
      function b64EncodeUnicode(str) {
        return encode(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(_match, p1) {
          return String.fromCharCode(Number("0x" + p1));
        }));
      }
      function b64DecodeUnicode(str) {
        return decodeURIComponent(decode(str).split("").map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
      }
      var ValidatedPurchaseEnvironment;
      (function(ValidatedPurchaseEnvironment2) {
        ValidatedPurchaseEnvironment2[ValidatedPurchaseEnvironment2["UNKNOWN"] = 0] = "UNKNOWN";
        ValidatedPurchaseEnvironment2[ValidatedPurchaseEnvironment2["SANDBOX"] = 1] = "SANDBOX";
        ValidatedPurchaseEnvironment2[ValidatedPurchaseEnvironment2["PRODUCTION"] = 2] = "PRODUCTION";
      })(ValidatedPurchaseEnvironment || (ValidatedPurchaseEnvironment = {}));
      var ValidatedPurchaseStore;
      (function(ValidatedPurchaseStore2) {
        ValidatedPurchaseStore2[ValidatedPurchaseStore2["APPLE_APP_STORE"] = 0] = "APPLE_APP_STORE";
        ValidatedPurchaseStore2[ValidatedPurchaseStore2["GOOGLE_PLAY_STORE"] = 1] = "GOOGLE_PLAY_STORE";
        ValidatedPurchaseStore2[ValidatedPurchaseStore2["HUAWEI_APP_GALLERY"] = 2] = "HUAWEI_APP_GALLERY";
      })(ValidatedPurchaseStore || (ValidatedPurchaseStore = {}));
      var ApiOperator;
      (function(ApiOperator2) {
        ApiOperator2[ApiOperator2["NO_OVERRIDE"] = 0] = "NO_OVERRIDE";
        ApiOperator2[ApiOperator2["BEST"] = 1] = "BEST";
        ApiOperator2[ApiOperator2["SET"] = 2] = "SET";
        ApiOperator2[ApiOperator2["INCREMENT"] = 3] = "INCREMENT";
        ApiOperator2[ApiOperator2["DECREMENT"] = 4] = "DECREMENT";
      })(ApiOperator || (ApiOperator = {}));
      var NakamaApi = class {
        constructor(serverKey, basePath, timeoutMs) {
          this.serverKey = serverKey;
          this.basePath = basePath;
          this.timeoutMs = timeoutMs;
        }
        healthcheck(bearerToken, options = {}) {
          const urlPath = "/healthcheck";
          const queryParams = new Map();
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        getAccount(bearerToken, options = {}) {
          const urlPath = "/v2/account";
          const queryParams = new Map();
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        updateAccount(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("PUT", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        authenticateApple(basicAuthUsername, basicAuthPassword, body, create, username, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/authenticate/apple";
          const queryParams = new Map();
          queryParams.set("create", create);
          queryParams.set("username", username);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        authenticateCustom(basicAuthUsername, basicAuthPassword, body, create, username, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/authenticate/custom";
          const queryParams = new Map();
          queryParams.set("create", create);
          queryParams.set("username", username);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        authenticateDevice(basicAuthUsername, basicAuthPassword, body, create, username, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/authenticate/device";
          const queryParams = new Map();
          queryParams.set("create", create);
          queryParams.set("username", username);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        authenticateEmail(basicAuthUsername, basicAuthPassword, body, create, username, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/authenticate/email";
          const queryParams = new Map();
          queryParams.set("create", create);
          queryParams.set("username", username);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        authenticateFacebook(basicAuthUsername, basicAuthPassword, body, create, username, sync, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/authenticate/facebook";
          const queryParams = new Map();
          queryParams.set("create", create);
          queryParams.set("username", username);
          queryParams.set("sync", sync);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        authenticateFacebookInstantGame(basicAuthUsername, basicAuthPassword, body, create, username, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/authenticate/facebookinstantgame";
          const queryParams = new Map();
          queryParams.set("create", create);
          queryParams.set("username", username);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        authenticateGameCenter(basicAuthUsername, basicAuthPassword, body, create, username, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/authenticate/gamecenter";
          const queryParams = new Map();
          queryParams.set("create", create);
          queryParams.set("username", username);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        authenticateGoogle(basicAuthUsername, basicAuthPassword, body, create, username, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/authenticate/google";
          const queryParams = new Map();
          queryParams.set("create", create);
          queryParams.set("username", username);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        authenticateSteam(basicAuthUsername, basicAuthPassword, body, create, username, sync, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/authenticate/steam";
          const queryParams = new Map();
          queryParams.set("create", create);
          queryParams.set("username", username);
          queryParams.set("sync", sync);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        linkApple(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/link/apple";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        linkCustom(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/link/custom";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        linkDevice(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/link/device";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        linkEmail(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/link/email";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        linkFacebook(bearerToken, body, sync, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/link/facebook";
          const queryParams = new Map();
          queryParams.set("sync", sync);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        linkFacebookInstantGame(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/link/facebookinstantgame";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        linkGameCenter(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/link/gamecenter";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        linkGoogle(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/link/google";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        linkSteam(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/link/steam";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        sessionRefresh(basicAuthUsername, basicAuthPassword, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/session/refresh";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          fetchOptions.headers["Authorization"] = "Basic " + encode(basicAuthUsername + ":" + basicAuthPassword);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        unlinkApple(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/unlink/apple";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        unlinkCustom(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/unlink/custom";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        unlinkDevice(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/unlink/device";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        unlinkEmail(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/unlink/email";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        unlinkFacebook(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/unlink/facebook";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        unlinkFacebookInstantGame(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/unlink/facebookinstantgame";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        unlinkGameCenter(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/unlink/gamecenter";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        unlinkGoogle(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/unlink/google";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        unlinkSteam(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/account/unlink/steam";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listChannelMessages(bearerToken, channelId, limit, forward, cursor, options = {}) {
          if (null === channelId || void 0 === channelId) throw new Error("'channelId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/channel/{channelId}".replace("{channelId}", encodeURIComponent(String(channelId)));
          const queryParams = new Map();
          queryParams.set("limit", limit);
          queryParams.set("forward", forward);
          queryParams.set("cursor", cursor);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        event(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/event";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        deleteFriends(bearerToken, ids, usernames, options = {}) {
          const urlPath = "/v2/friend";
          const queryParams = new Map();
          queryParams.set("ids", ids);
          queryParams.set("usernames", usernames);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("DELETE", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listFriends(bearerToken, limit, state, cursor, options = {}) {
          const urlPath = "/v2/friend";
          const queryParams = new Map();
          queryParams.set("limit", limit);
          queryParams.set("state", state);
          queryParams.set("cursor", cursor);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        addFriends(bearerToken, ids, usernames, options = {}) {
          const urlPath = "/v2/friend";
          const queryParams = new Map();
          queryParams.set("ids", ids);
          queryParams.set("usernames", usernames);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        blockFriends(bearerToken, ids, usernames, options = {}) {
          const urlPath = "/v2/friend/block";
          const queryParams = new Map();
          queryParams.set("ids", ids);
          queryParams.set("usernames", usernames);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        importFacebookFriends(bearerToken, body, reset, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/friend/facebook";
          const queryParams = new Map();
          queryParams.set("reset", reset);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        importSteamFriends(bearerToken, body, reset, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/friend/steam";
          const queryParams = new Map();
          queryParams.set("reset", reset);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listGroups(bearerToken, name, cursor, limit, langTag, members, open, options = {}) {
          const urlPath = "/v2/group";
          const queryParams = new Map();
          queryParams.set("name", name);
          queryParams.set("cursor", cursor);
          queryParams.set("limit", limit);
          queryParams.set("lang_tag", langTag);
          queryParams.set("members", members);
          queryParams.set("open", open);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        createGroup(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        deleteGroup(bearerToken, groupId, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("DELETE", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        updateGroup(bearerToken, groupId, body, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("PUT", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        addGroupUsers(bearerToken, groupId, userIds, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}/add".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          queryParams.set("user_ids", userIds);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        banGroupUsers(bearerToken, groupId, userIds, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}/ban".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          queryParams.set("user_ids", userIds);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        demoteGroupUsers(bearerToken, groupId, userIds, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          if (null === userIds || void 0 === userIds) throw new Error("'userIds' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}/demote".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          queryParams.set("user_ids", userIds);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        joinGroup(bearerToken, groupId, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}/join".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        kickGroupUsers(bearerToken, groupId, userIds, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}/kick".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          queryParams.set("user_ids", userIds);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        leaveGroup(bearerToken, groupId, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}/leave".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        promoteGroupUsers(bearerToken, groupId, userIds, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}/promote".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          queryParams.set("user_ids", userIds);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listGroupUsers(bearerToken, groupId, limit, state, cursor, options = {}) {
          if (null === groupId || void 0 === groupId) throw new Error("'groupId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/group/{groupId}/user".replace("{groupId}", encodeURIComponent(String(groupId)));
          const queryParams = new Map();
          queryParams.set("limit", limit);
          queryParams.set("state", state);
          queryParams.set("cursor", cursor);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        validatePurchaseApple(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/iap/purchase/apple";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        validatePurchaseGoogle(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/iap/purchase/google";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        validatePurchaseHuawei(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/iap/purchase/huawei";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        deleteLeaderboardRecord(bearerToken, leaderboardId, options = {}) {
          if (null === leaderboardId || void 0 === leaderboardId) throw new Error("'leaderboardId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/leaderboard/{leaderboardId}".replace("{leaderboardId}", encodeURIComponent(String(leaderboardId)));
          const queryParams = new Map();
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("DELETE", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listLeaderboardRecords(bearerToken, leaderboardId, ownerIds, limit, cursor, expiry, options = {}) {
          if (null === leaderboardId || void 0 === leaderboardId) throw new Error("'leaderboardId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/leaderboard/{leaderboardId}".replace("{leaderboardId}", encodeURIComponent(String(leaderboardId)));
          const queryParams = new Map();
          queryParams.set("owner_ids", ownerIds);
          queryParams.set("limit", limit);
          queryParams.set("cursor", cursor);
          queryParams.set("expiry", expiry);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        writeLeaderboardRecord(bearerToken, leaderboardId, body, options = {}) {
          if (null === leaderboardId || void 0 === leaderboardId) throw new Error("'leaderboardId' is a required parameter but is null or undefined.");
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/leaderboard/{leaderboardId}".replace("{leaderboardId}", encodeURIComponent(String(leaderboardId)));
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listLeaderboardRecordsAroundOwner(bearerToken, leaderboardId, ownerId, limit, expiry, options = {}) {
          if (null === leaderboardId || void 0 === leaderboardId) throw new Error("'leaderboardId' is a required parameter but is null or undefined.");
          if (null === ownerId || void 0 === ownerId) throw new Error("'ownerId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/leaderboard/{leaderboardId}/owner/{ownerId}".replace("{leaderboardId}", encodeURIComponent(String(leaderboardId))).replace("{ownerId}", encodeURIComponent(String(ownerId)));
          const queryParams = new Map();
          queryParams.set("limit", limit);
          queryParams.set("expiry", expiry);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listMatches(bearerToken, limit, authoritative, label, minSize, maxSize, query, options = {}) {
          const urlPath = "/v2/match";
          const queryParams = new Map();
          queryParams.set("limit", limit);
          queryParams.set("authoritative", authoritative);
          queryParams.set("label", label);
          queryParams.set("min_size", minSize);
          queryParams.set("max_size", maxSize);
          queryParams.set("query", query);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        deleteNotifications(bearerToken, ids, options = {}) {
          const urlPath = "/v2/notification";
          const queryParams = new Map();
          queryParams.set("ids", ids);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("DELETE", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listNotifications(bearerToken, limit, cacheableCursor, options = {}) {
          const urlPath = "/v2/notification";
          const queryParams = new Map();
          queryParams.set("limit", limit);
          queryParams.set("cacheable_cursor", cacheableCursor);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        rpcFunc2(bearerToken, id, payload, httpKey, options = {}) {
          if (null === id || void 0 === id) throw new Error("'id' is a required parameter but is null or undefined.");
          const urlPath = "/v2/rpc/{id}".replace("{id}", encodeURIComponent(String(id)));
          const queryParams = new Map();
          queryParams.set("payload", payload);
          queryParams.set("http_key", httpKey);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        rpcFunc(bearerToken, id, body, httpKey, options = {}) {
          if (null === id || void 0 === id) throw new Error("'id' is a required parameter but is null or undefined.");
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/rpc/{id}".replace("{id}", encodeURIComponent(String(id)));
          const queryParams = new Map();
          queryParams.set("http_key", httpKey);
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        sessionLogout(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/session/logout";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        readStorageObjects(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/storage";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        writeStorageObjects(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/storage";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("PUT", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        deleteStorageObjects(bearerToken, body, options = {}) {
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/storage/delete";
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("PUT", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listStorageObjects(bearerToken, collection, userId, limit, cursor, options = {}) {
          if (null === collection || void 0 === collection) throw new Error("'collection' is a required parameter but is null or undefined.");
          const urlPath = "/v2/storage/{collection}".replace("{collection}", encodeURIComponent(String(collection)));
          const queryParams = new Map();
          queryParams.set("user_id", userId);
          queryParams.set("limit", limit);
          queryParams.set("cursor", cursor);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listStorageObjects2(bearerToken, collection, userId, limit, cursor, options = {}) {
          if (null === collection || void 0 === collection) throw new Error("'collection' is a required parameter but is null or undefined.");
          if (null === userId || void 0 === userId) throw new Error("'userId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/storage/{collection}/{userId}".replace("{collection}", encodeURIComponent(String(collection))).replace("{userId}", encodeURIComponent(String(userId)));
          const queryParams = new Map();
          queryParams.set("limit", limit);
          queryParams.set("cursor", cursor);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listTournaments(bearerToken, categoryStart, categoryEnd, startTime, endTime, limit, cursor, options = {}) {
          const urlPath = "/v2/tournament";
          const queryParams = new Map();
          queryParams.set("category_start", categoryStart);
          queryParams.set("category_end", categoryEnd);
          queryParams.set("start_time", startTime);
          queryParams.set("end_time", endTime);
          queryParams.set("limit", limit);
          queryParams.set("cursor", cursor);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listTournamentRecords(bearerToken, tournamentId, ownerIds, limit, cursor, expiry, options = {}) {
          if (null === tournamentId || void 0 === tournamentId) throw new Error("'tournamentId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/tournament/{tournamentId}".replace("{tournamentId}", encodeURIComponent(String(tournamentId)));
          const queryParams = new Map();
          queryParams.set("owner_ids", ownerIds);
          queryParams.set("limit", limit);
          queryParams.set("cursor", cursor);
          queryParams.set("expiry", expiry);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        writeTournamentRecord2(bearerToken, tournamentId, body, options = {}) {
          if (null === tournamentId || void 0 === tournamentId) throw new Error("'tournamentId' is a required parameter but is null or undefined.");
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/tournament/{tournamentId}".replace("{tournamentId}", encodeURIComponent(String(tournamentId)));
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        writeTournamentRecord(bearerToken, tournamentId, body, options = {}) {
          if (null === tournamentId || void 0 === tournamentId) throw new Error("'tournamentId' is a required parameter but is null or undefined.");
          if (null === body || void 0 === body) throw new Error("'body' is a required parameter but is null or undefined.");
          const urlPath = "/v2/tournament/{tournamentId}".replace("{tournamentId}", encodeURIComponent(String(tournamentId)));
          const queryParams = new Map();
          let bodyJson = "";
          bodyJson = JSON.stringify(body || {});
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("PUT", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        joinTournament(bearerToken, tournamentId, options = {}) {
          if (null === tournamentId || void 0 === tournamentId) throw new Error("'tournamentId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/tournament/{tournamentId}/join".replace("{tournamentId}", encodeURIComponent(String(tournamentId)));
          const queryParams = new Map();
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("POST", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listTournamentRecordsAroundOwner(bearerToken, tournamentId, ownerId, limit, expiry, options = {}) {
          if (null === tournamentId || void 0 === tournamentId) throw new Error("'tournamentId' is a required parameter but is null or undefined.");
          if (null === ownerId || void 0 === ownerId) throw new Error("'ownerId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/tournament/{tournamentId}/owner/{ownerId}".replace("{tournamentId}", encodeURIComponent(String(tournamentId))).replace("{ownerId}", encodeURIComponent(String(ownerId)));
          const queryParams = new Map();
          queryParams.set("limit", limit);
          queryParams.set("expiry", expiry);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        getUsers(bearerToken, ids, usernames, facebookIds, options = {}) {
          const urlPath = "/v2/user";
          const queryParams = new Map();
          queryParams.set("ids", ids);
          queryParams.set("usernames", usernames);
          queryParams.set("facebook_ids", facebookIds);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        listUserGroups(bearerToken, userId, limit, state, cursor, options = {}) {
          if (null === userId || void 0 === userId) throw new Error("'userId' is a required parameter but is null or undefined.");
          const urlPath = "/v2/user/{userId}/group".replace("{userId}", encodeURIComponent(String(userId)));
          const queryParams = new Map();
          queryParams.set("limit", limit);
          queryParams.set("state", state);
          queryParams.set("cursor", cursor);
          let bodyJson = "";
          const fullUrl = this.buildFullUrl(this.basePath, urlPath, queryParams);
          const fetchOptions = buildFetchOptions("GET", options, bodyJson);
          bearerToken && (fetchOptions.headers["Authorization"] = "Bearer " + bearerToken);
          return Promise.race([ fetch(fullUrl, fetchOptions).then(response => {
            if (204 == response.status) return response;
            if (response.status >= 200 && response.status < 300) return response.json();
            throw response;
          }), new Promise((_, reject) => setTimeout(reject, this.timeoutMs, "Request timed out.")) ]);
        }
        buildFullUrl(basePath, fragment, queryParams) {
          let fullPath = basePath + fragment + "?";
          for (let [k, v] of queryParams) v instanceof Array ? fullPath += v.reduce((prev, curr) => prev + encodeURIComponent(k) + "=" + encodeURIComponent(curr) + "&", "") : null != v && (fullPath += encodeURIComponent(k) + "=" + encodeURIComponent(v) + "&");
          return fullPath;
        }
      };
      var Session = class {
        constructor(token, refresh_token, created) {
          this.created = created;
          this.token = token;
          this.refresh_token = refresh_token;
          this.created_at = Math.floor(new Date().getTime() / 1e3);
          this.update(token, refresh_token);
        }
        isexpired(currenttime) {
          return this.expires_at - currenttime < 0;
        }
        isrefreshexpired(currenttime) {
          return this.refresh_expires_at - currenttime < 0;
        }
        update(token, refreshToken) {
          const tokenParts = token.split(".");
          if (3 != tokenParts.length) throw "jwt is not valid.";
          const tokenDecoded = JSON.parse(atob(tokenParts[1]));
          const tokenExpiresAt = Math.floor(parseInt(tokenDecoded["exp"]));
          if (refreshToken) {
            const refreshTokenParts = refreshToken.split(".");
            if (3 != refreshTokenParts.length) throw "refresh jwt is not valid.";
            const refreshTokenDecoded = JSON.parse(atob(refreshTokenParts[1]));
            const refreshTokenExpiresAt = Math.floor(parseInt(refreshTokenDecoded["exp"]));
            this.refresh_expires_at = refreshTokenExpiresAt;
            this.refresh_token = refreshToken;
          }
          this.token = token;
          this.expires_at = tokenExpiresAt;
          this.username = tokenDecoded["usn"];
          this.user_id = tokenDecoded["uid"];
          this.vars = tokenDecoded["vrs"];
        }
        static restore(token, refreshToken) {
          return new Session(token, refreshToken, false);
        }
      };
      var WebSocketAdapterText = class {
        constructor() {
          this._isConnected = false;
        }
        get onClose() {
          return this._socket.onclose;
        }
        set onClose(value) {
          this._socket.onclose = value;
        }
        get onError() {
          return this._socket.onerror;
        }
        set onError(value) {
          this._socket.onerror = value;
        }
        get onMessage() {
          return this._socket.onmessage;
        }
        set onMessage(value) {
          value ? this._socket.onmessage = evt => {
            const message = JSON.parse(evt.data);
            value(message);
          } : value = null;
        }
        get onOpen() {
          return this._socket.onopen;
        }
        set onOpen(value) {
          this._socket.onopen = value;
        }
        get isConnected() {
          return this._isConnected;
        }
        connect(scheme, host, port, createStatus, token) {
          const url = `${scheme}${host}:${port}/ws?lang=en&status=${encodeURIComponent(createStatus.toString())}&token=${encodeURIComponent(token)}`;
          this._socket = new WebSocket(url);
          this._isConnected = true;
        }
        close() {
          this._isConnected = false;
          this._socket.close();
          this._socket = void 0;
        }
        send(msg) {
          msg.match_data_send ? msg.match_data_send.op_code = msg.match_data_send.op_code.toString() : msg.party_data_send && (msg.party_data_send.op_code = msg.party_data_send.op_code.toString());
          this._socket.send(JSON.stringify(msg));
        }
      };
      var DefaultSocket = class {
        constructor(host, port, useSSL = false, verbose = false, adapter = new WebSocketAdapterText()) {
          this.host = host;
          this.port = port;
          this.useSSL = useSSL;
          this.verbose = verbose;
          this.adapter = adapter;
          this.cIds = {};
          this.nextCid = 1;
        }
        generatecid() {
          const cid = this.nextCid.toString();
          ++this.nextCid;
          return cid;
        }
        connect(session, createStatus = false) {
          if (this.adapter.isConnected) return Promise.resolve(session);
          const scheme = this.useSSL ? "wss://" : "ws://";
          this.adapter.connect(scheme, this.host, this.port, createStatus, session.token);
          this.adapter.onClose = evt => {
            this.ondisconnect(evt);
          };
          this.adapter.onError = evt => {
            this.onerror(evt);
          };
          this.adapter.onMessage = message => {
            this.verbose && window && window.console && console.log("Response: %o", JSON.stringify(message));
            if (void 0 == message.cid) if (message.notifications) message.notifications.notifications.forEach(n => {
              n.content = n.content ? JSON.parse(n.content) : void 0;
              this.onnotification(n);
            }); else if (message.match_data) {
              message.match_data.data = null != message.match_data.data ? JSON.parse(b64DecodeUnicode(message.match_data.data)) : null;
              message.match_data.op_code = parseInt(message.match_data.op_code);
              this.onmatchdata(message.match_data);
            } else if (message.match_presence_event) this.onmatchpresence(message.match_presence_event); else if (message.matchmaker_ticket) this.onmatchmakerticket(message.matchmaker_ticket); else if (message.matchmaker_matched) this.onmatchmakermatched(message.matchmaker_matched); else if (message.status_presence_event) this.onstatuspresence(message.status_presence_event); else if (message.stream_presence_event) this.onstreampresence(message.stream_presence_event); else if (message.stream_data) this.onstreamdata(message.stream_data); else if (message.channel_message) {
              message.channel_message.content = JSON.parse(message.channel_message.content);
              this.onchannelmessage(message.channel_message);
            } else if (message.channel_presence_event) this.onchannelpresence(message.channel_presence_event); else if (message.party_data) {
              message.party_data.data = null != message.party_data.data ? JSON.parse(b64DecodeUnicode(message.party_data.data)) : null;
              message.party_data.op_code = parseInt(message.party_data.op_code);
              this.onpartydata(message.party_data);
            } else message.on_party_close ? this.onpartyclose() : message.party_join_request ? this.onpartyjoinrequest(message.party_join_request) : message.party_leader ? this.onpartyleader(message.party_leader) : message.party_matchmaker_ticket ? this.onpartymatchmakerticket(message.party_matchmaker_ticket) : message.party_presence_event ? this.onpartypresence(message.party_presence_event) : message.party ? this.onparty(message.party) : this.verbose && window && window.console && console.log("Unrecognized message received: %o", message); else {
              const executor = this.cIds[message.cid];
              if (!executor) {
                this.verbose && window && window.console && console.error("No promise executor for message: %o", message);
                return;
              }
              delete this.cIds[message.cid];
              message.error ? executor.reject(message.error) : executor.resolve(message);
            }
          };
          return new Promise((resolve, reject) => {
            this.adapter.onOpen = evt => {
              this.verbose && window && window.console && console.log(evt);
              resolve(session);
            };
            this.adapter.onError = evt => {
              reject(evt);
              this.adapter.close();
            };
          });
        }
        disconnect(fireDisconnectEvent = true) {
          this.adapter.isConnected && this.adapter.close();
          fireDisconnectEvent && this.ondisconnect({});
        }
        ondisconnect(evt) {
          this.verbose && window && window.console && console.log(evt);
        }
        onerror(evt) {
          this.verbose && window && window.console && console.log(evt);
        }
        onchannelmessage(channelMessage) {
          this.verbose && window && window.console && console.log(channelMessage);
        }
        onchannelpresence(channelPresence) {
          this.verbose && window && window.console && console.log(channelPresence);
        }
        onnotification(notification) {
          this.verbose && window && window.console && console.log(notification);
        }
        onmatchdata(matchData) {
          this.verbose && window && window.console && console.log(matchData);
        }
        onmatchpresence(matchPresence) {
          this.verbose && window && window.console && console.log(matchPresence);
        }
        onmatchmakerticket(matchmakerTicket) {
          this.verbose && window && window.console && console.log(matchmakerTicket);
        }
        onmatchmakermatched(matchmakerMatched) {
          this.verbose && window && window.console && console.log(matchmakerMatched);
        }
        onparty(party) {
          this.verbose && window && window.console && console.log(party);
        }
        onpartyclose() {
          this.verbose && window && window.console && console.log("Party closed.");
        }
        onpartyjoinrequest(partyJoinRequest) {
          this.verbose && window && window.console && console.log(partyJoinRequest);
        }
        onpartydata(partyData) {
          this.verbose && window && window.console && console.log(partyData);
        }
        onpartyleader(partyLeader) {
          this.verbose && window && window.console && console.log(partyLeader);
        }
        onpartymatchmakerticket(partyMatched) {
          this.verbose && window && window.console && console.log(partyMatched);
        }
        onpartypresence(partyPresence) {
          this.verbose && window && window.console && console.log(partyPresence);
        }
        onstatuspresence(statusPresence) {
          this.verbose && window && window.console && console.log(statusPresence);
        }
        onstreampresence(streamPresence) {
          this.verbose && window && window.console && console.log(streamPresence);
        }
        onstreamdata(streamData) {
          this.verbose && window && window.console && console.log(streamData);
        }
        send(message) {
          const untypedMessage = message;
          return new Promise((resolve, reject) => {
            if (this.adapter.isConnected) if (untypedMessage.match_data_send) {
              untypedMessage.match_data_send.data = b64EncodeUnicode(JSON.stringify(untypedMessage.match_data_send.data));
              this.adapter.send(untypedMessage);
              resolve();
            } else if (untypedMessage.party_data_send) {
              untypedMessage.party_data_send.data = b64EncodeUnicode(JSON.stringify(untypedMessage.party_data_send.data));
              this.adapter.send(untypedMessage);
              resolve();
            } else {
              untypedMessage.channel_message_send ? untypedMessage.channel_message_send.content = JSON.stringify(untypedMessage.channel_message_send.content) : untypedMessage.channel_message_update && (untypedMessage.channel_message_update.content = JSON.stringify(untypedMessage.channel_message_update.content));
              const cid = this.generatecid();
              this.cIds[cid] = {
                resolve: resolve,
                reject: reject
              };
              untypedMessage.cid = cid;
              this.adapter.send(untypedMessage);
            } else reject("Socket connection has not been established yet.");
            this.verbose && window && window.console && console.log("Sent message: %o", JSON.stringify(untypedMessage));
          });
        }
        acceptPartyMember(party_id, presence) {
          return this.send({
            party_accept: {
              party_id: party_id,
              presence: presence
            }
          });
        }
        addMatchmaker(query, min_count, max_count, string_properties, numeric_properties) {
          return __async(this, null, function*() {
            const response = yield this.send({
              matchmaker_add: {
                min_count: min_count,
                max_count: max_count,
                query: query,
                string_properties: string_properties,
                numeric_properties: numeric_properties
              }
            });
            return response.matchmaker_ticket;
          });
        }
        addMatchmakerParty(party_id, query, min_count, max_count, string_properties, numeric_properties) {
          return __async(this, null, function*() {
            const response = yield this.send({
              party_matchmaker_add: {
                party_id: party_id,
                min_count: min_count,
                max_count: max_count,
                query: query,
                string_properties: string_properties,
                numeric_properties: numeric_properties
              }
            });
            return response.party_matchmaker_ticket;
          });
        }
        closeParty(party_id) {
          return __async(this, null, function*() {
            return yield this.send({
              party_close: {
                party_id: party_id
              }
            });
          });
        }
        createMatch() {
          return __async(this, null, function*() {
            const response = yield this.send({
              match_create: {}
            });
            return response.match;
          });
        }
        createParty(open, max_size) {
          return __async(this, null, function*() {
            const response = yield this.send({
              party_create: {
                open: open,
                max_size: max_size
              }
            });
            return response.party;
          });
        }
        followUsers(userIds) {
          return __async(this, null, function*() {
            const response = yield this.send({
              status_follow: {
                user_ids: userIds
              }
            });
            return response.status;
          });
        }
        joinChat(target, type, persistence, hidden) {
          return __async(this, null, function*() {
            const response = yield this.send({
              channel_join: {
                target: target,
                type: type,
                persistence: persistence,
                hidden: hidden
              }
            });
            return response.channel;
          });
        }
        joinMatch(match_id, token, metadata) {
          return __async(this, null, function*() {
            const join = {
              match_join: {
                metadata: metadata
              }
            };
            token ? join.match_join.token = token : join.match_join.match_id = match_id;
            const response = yield this.send(join);
            return response.match;
          });
        }
        joinParty(party_id) {
          return __async(this, null, function*() {
            return yield this.send({
              party_join: {
                party_id: party_id
              }
            });
          });
        }
        leaveChat(channel_id) {
          return this.send({
            channel_leave: {
              channel_id: channel_id
            }
          });
        }
        leaveMatch(matchId) {
          return this.send({
            match_leave: {
              match_id: matchId
            }
          });
        }
        leaveParty(party_id) {
          return this.send({
            party_leave: {
              party_id: party_id
            }
          });
        }
        listPartyJoinRequests(party_id) {
          return __async(this, null, function*() {
            const response = yield this.send({
              party_join_request_list: {
                party_id: party_id
              }
            });
            return response.party_join_request;
          });
        }
        promotePartyMember(party_id, party_member) {
          return __async(this, null, function*() {
            const response = yield this.send({
              party_promote: {
                party_id: party_id,
                presence: party_member
              }
            });
            return response.party_leader;
          });
        }
        removeChatMessage(channel_id, message_id) {
          return __async(this, null, function*() {
            const response = yield this.send({
              channel_message_remove: {
                channel_id: channel_id,
                message_id: message_id
              }
            });
            return response.channel_message_ack;
          });
        }
        removeMatchmaker(ticket) {
          return this.send({
            matchmaker_remove: {
              ticket: ticket
            }
          });
        }
        removeMatchmakerParty(party_id, ticket) {
          return this.send({
            party_matchmaker_remove: {
              party_id: party_id,
              ticket: ticket
            }
          });
        }
        removePartyMember(party_id, member) {
          return __async(this, null, function*() {
            return this.send({
              party_remove: {
                party_id: party_id,
                presence: member
              }
            });
          });
        }
        rpc(id, payload, http_key) {
          return __async(this, null, function*() {
            const response = yield this.send({
              rpc: {
                id: id,
                payload: payload,
                http_key: http_key
              }
            });
            return response.rpc;
          });
        }
        sendMatchState(matchId, opCode, data, presences) {
          return __async(this, null, function*() {
            return this.send({
              match_data_send: {
                match_id: matchId,
                op_code: opCode,
                data: data,
                presences: null != presences ? presences : []
              }
            });
          });
        }
        sendPartyData(party_id, op_code, data) {
          return this.send({
            party_data_send: {
              party_id: party_id,
              op_code: op_code,
              data: data
            }
          });
        }
        unfollowUsers(user_ids) {
          return this.send({
            status_unfollow: {
              user_ids: user_ids
            }
          });
        }
        updateChatMessage(channel_id, message_id, content) {
          return __async(this, null, function*() {
            const response = yield this.send({
              channel_message_update: {
                channel_id: channel_id,
                message_id: message_id,
                content: content
              }
            });
            return response.channel_message_ack;
          });
        }
        updateStatus(status) {
          return this.send({
            status_update: {
              status: status
            }
          });
        }
        writeChatMessage(channel_id, content) {
          return __async(this, null, function*() {
            const response = yield this.send({
              channel_message_send: {
                channel_id: channel_id,
                content: content
              }
            });
            return response.channel_message_ack;
          });
        }
      };
      var DEFAULT_HOST = "127.0.0.1";
      var DEFAULT_PORT = "7350";
      var DEFAULT_SERVER_KEY = "defaultkey";
      var DEFAULT_TIMEOUT_MS = 7e3;
      var DEFAULT_EXPIRED_TIMESPAN_MS = 3e5;
      var Client = class {
        constructor(serverkey = DEFAULT_SERVER_KEY, host = DEFAULT_HOST, port = DEFAULT_PORT, useSSL = false, timeout = DEFAULT_TIMEOUT_MS, autoRefreshSession = true) {
          this.serverkey = serverkey;
          this.host = host;
          this.port = port;
          this.useSSL = useSSL;
          this.timeout = timeout;
          this.autoRefreshSession = autoRefreshSession;
          this.expiredTimespanMs = DEFAULT_EXPIRED_TIMESPAN_MS;
          const scheme = useSSL ? "https://" : "http://";
          const basePath = `${scheme}${host}:${port}`;
          this.apiClient = new NakamaApi(serverkey, basePath, timeout);
        }
        addGroupUsers(session, groupId, ids) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.addGroupUsers(session.token, groupId, ids).then(response => void 0 !== response);
          });
        }
        addFriends(session, ids, usernames) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.addFriends(session.token, ids, usernames).then(response => void 0 !== response);
          });
        }
        authenticateApple(_0, _1, _2) {
          return __async(this, arguments, function*(token, create, username, vars = new Map(), options = {}) {
            const request = {
              token: token,
              vars: vars
            };
            return this.apiClient.authenticateApple(this.serverkey, "", request, create, username, options).then(apiSession => new Session(apiSession.token || "", apiSession.refresh_token || "", apiSession.created || false));
          });
        }
        authenticateCustom(id, create, username, vars = new Map(), options = {}) {
          const request = {
            id: id,
            vars: vars
          };
          return this.apiClient.authenticateCustom(this.serverkey, "", request, create, username, options).then(apiSession => new Session(apiSession.token || "", apiSession.refresh_token || "", apiSession.created || false));
        }
        authenticateDevice(id, create, username, vars) {
          const request = {
            id: id,
            vars: vars
          };
          return this.apiClient.authenticateDevice(this.serverkey, "", request, create, username).then(apiSession => new Session(apiSession.token || "", apiSession.refresh_token || "", apiSession.created || false));
        }
        authenticateEmail(email, password, create, username, vars) {
          const request = {
            email: email,
            password: password,
            vars: vars
          };
          return this.apiClient.authenticateEmail(this.serverkey, "", request, create, username).then(apiSession => new Session(apiSession.token || "", apiSession.refresh_token || "", apiSession.created || false));
        }
        authenticateFacebookInstantGame(signedPlayerInfo, create, username, vars, options = {}) {
          const request = {
            signed_player_info: signedPlayerInfo,
            vars: vars
          };
          return this.apiClient.authenticateFacebookInstantGame(this.serverkey, "", {
            signed_player_info: request.signed_player_info,
            vars: request.vars
          }, create, username, options).then(apiSession => new Session(apiSession.token || "", apiSession.refresh_token || "", apiSession.created || false));
        }
        authenticateFacebook(token, create, username, sync, vars, options = {}) {
          const request = {
            token: token,
            vars: vars
          };
          return this.apiClient.authenticateFacebook(this.serverkey, "", request, create, username, sync, options).then(apiSession => new Session(apiSession.token || "", apiSession.refresh_token || "", apiSession.created || false));
        }
        authenticateGoogle(token, create, username, vars, options = {}) {
          const request = {
            token: token,
            vars: vars
          };
          return this.apiClient.authenticateGoogle(this.serverkey, "", request, create, username, options).then(apiSession => new Session(apiSession.token || "", apiSession.refresh_token || "", apiSession.created || false));
        }
        authenticateGameCenter(token, create, username, vars) {
          const request = {
            token: token,
            vars: vars
          };
          return this.apiClient.authenticateGameCenter(this.serverkey, "", request, create, username).then(apiSession => new Session(apiSession.token || "", apiSession.refresh_token || "", apiSession.created || false));
        }
        authenticateSteam(token, create, username, sync, vars) {
          return __async(this, null, function*() {
            const request = {
              token: token,
              vars: vars,
              sync: sync
            };
            return this.apiClient.authenticateSteam(this.serverkey, "", request, create, username).then(apiSession => new Session(apiSession.token || "", apiSession.refresh_token || "", apiSession.created || false));
          });
        }
        banGroupUsers(session, groupId, ids) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.banGroupUsers(session.token, groupId, ids).then(response => void 0 !== response);
          });
        }
        blockFriends(session, ids, usernames) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.blockFriends(session.token, ids, usernames).then(response => Promise.resolve(void 0 != response));
          });
        }
        createGroup(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.createGroup(session.token, request).then(response => Promise.resolve({
              avatar_url: response.avatar_url,
              create_time: response.create_time,
              creator_id: response.creator_id,
              description: response.description,
              edge_count: response.edge_count ? Number(response.edge_count) : 0,
              id: response.id,
              lang_tag: response.lang_tag,
              max_count: response.max_count ? Number(response.max_count) : 0,
              metadata: response.metadata ? JSON.parse(response.metadata) : void 0,
              name: response.name,
              open: response.open,
              update_time: response.update_time
            }));
          });
        }
        createSocket(useSSL = false, verbose = false, adapter = new WebSocketAdapterText()) {
          return new DefaultSocket(this.host, this.port, useSSL, verbose, adapter);
        }
        deleteFriends(session, ids, usernames) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.deleteFriends(session.token, ids, usernames).then(response => void 0 !== response);
          });
        }
        deleteGroup(session, groupId) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.deleteGroup(session.token, groupId).then(response => void 0 !== response);
          });
        }
        deleteNotifications(session, ids) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.deleteNotifications(session.token, ids).then(response => Promise.resolve(void 0 != response));
          });
        }
        deleteStorageObjects(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.deleteStorageObjects(session.token, request).then(response => Promise.resolve(void 0 != response));
          });
        }
        demoteGroupUsers(session, groupId, ids) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.demoteGroupUsers(session.token, groupId, ids).then(response => Promise.resolve(void 0 != response));
          });
        }
        emitEvent(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.event(session.token, request).then(response => Promise.resolve(void 0 != response));
          });
        }
        getAccount(session) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.getAccount(session.token);
          });
        }
        importFacebookFriends(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.importFacebookFriends(session.token, request).then(response => void 0 !== response);
          });
        }
        importSteamFriends(session, request, reset) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.importSteamFriends(session.token, request, reset).then(response => void 0 !== response);
          });
        }
        getUsers(session, ids, usernames, facebookIds) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.getUsers(session.token, ids, usernames, facebookIds).then(response => {
              var result = {
                users: []
              };
              if (null == response.users) return Promise.resolve(result);
              response.users.forEach(u => {
                result.users.push({
                  avatar_url: u.avatar_url,
                  create_time: u.create_time,
                  display_name: u.display_name,
                  edge_count: u.edge_count ? Number(u.edge_count) : 0,
                  facebook_id: u.facebook_id,
                  gamecenter_id: u.gamecenter_id,
                  google_id: u.google_id,
                  id: u.id,
                  lang_tag: u.lang_tag,
                  location: u.location,
                  online: u.online,
                  steam_id: u.steam_id,
                  timezone: u.timezone,
                  update_time: u.update_time,
                  username: u.username,
                  metadata: u.metadata ? JSON.parse(u.metadata) : void 0
                });
              });
              return Promise.resolve(result);
            });
          });
        }
        joinGroup(session, groupId) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.joinGroup(session.token, groupId, {}).then(response => void 0 !== response);
          });
        }
        joinTournament(session, tournamentId) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.joinTournament(session.token, tournamentId, {}).then(response => void 0 !== response);
          });
        }
        kickGroupUsers(session, groupId, ids) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.kickGroupUsers(session.token, groupId, ids).then(response => Promise.resolve(void 0 != response));
          });
        }
        leaveGroup(session, groupId) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.leaveGroup(session.token, groupId, {}).then(response => void 0 !== response);
          });
        }
        listChannelMessages(session, channelId, limit, forward, cursor) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listChannelMessages(session.token, channelId, limit, forward, cursor).then(response => {
              var result = {
                messages: [],
                next_cursor: response.next_cursor,
                prev_cursor: response.prev_cursor,
                cacheable_cursor: response.cacheable_cursor
              };
              if (null == response.messages) return Promise.resolve(result);
              response.messages.forEach(m => {
                result.messages.push({
                  channel_id: m.channel_id,
                  code: m.code ? Number(m.code) : 0,
                  create_time: m.create_time,
                  message_id: m.message_id,
                  persistent: m.persistent,
                  sender_id: m.sender_id,
                  update_time: m.update_time,
                  username: m.username,
                  content: m.content ? JSON.parse(m.content) : void 0,
                  group_id: m.group_id,
                  room_name: m.room_name,
                  user_id_one: m.user_id_one,
                  user_id_two: m.user_id_two
                });
              });
              return Promise.resolve(result);
            });
          });
        }
        listGroupUsers(session, groupId, state, limit, cursor) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listGroupUsers(session.token, groupId, limit, state, cursor).then(response => {
              var result = {
                group_users: [],
                cursor: response.cursor
              };
              if (null == response.group_users) return Promise.resolve(result);
              response.group_users.forEach(gu => {
                result.group_users.push({
                  user: {
                    avatar_url: gu.user.avatar_url,
                    create_time: gu.user.create_time,
                    display_name: gu.user.display_name,
                    edge_count: gu.user.edge_count ? Number(gu.user.edge_count) : 0,
                    facebook_id: gu.user.facebook_id,
                    gamecenter_id: gu.user.gamecenter_id,
                    google_id: gu.user.google_id,
                    id: gu.user.id,
                    lang_tag: gu.user.lang_tag,
                    location: gu.user.location,
                    online: gu.user.online,
                    steam_id: gu.user.steam_id,
                    timezone: gu.user.timezone,
                    update_time: gu.user.update_time,
                    username: gu.user.username,
                    metadata: gu.user.metadata ? JSON.parse(gu.user.metadata) : void 0
                  },
                  state: gu.state ? Number(gu.state) : 0
                });
              });
              return Promise.resolve(result);
            });
          });
        }
        listUserGroups(session, userId, state, limit, cursor) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listUserGroups(session.token, userId, state, limit, cursor).then(response => {
              var result = {
                user_groups: [],
                cursor: response.cursor
              };
              if (null == response.user_groups) return Promise.resolve(result);
              response.user_groups.forEach(ug => {
                result.user_groups.push({
                  group: {
                    avatar_url: ug.group.avatar_url,
                    create_time: ug.group.create_time,
                    creator_id: ug.group.creator_id,
                    description: ug.group.description,
                    edge_count: ug.group.edge_count ? Number(ug.group.edge_count) : 0,
                    id: ug.group.id,
                    lang_tag: ug.group.lang_tag,
                    max_count: ug.group.max_count,
                    metadata: ug.group.metadata ? JSON.parse(ug.group.metadata) : void 0,
                    name: ug.group.name,
                    open: ug.group.open,
                    update_time: ug.group.update_time
                  },
                  state: ug.state ? Number(ug.state) : 0
                });
              });
              return Promise.resolve(result);
            });
          });
        }
        listGroups(session, name, cursor, limit) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listGroups(session.token, name, cursor, limit).then(response => {
              var result = {
                groups: []
              };
              if (null == response.groups) return Promise.resolve(result);
              result.cursor = response.cursor;
              response.groups.forEach(ug => {
                result.groups.push({
                  avatar_url: ug.avatar_url,
                  create_time: ug.create_time,
                  creator_id: ug.creator_id,
                  description: ug.description,
                  edge_count: ug.edge_count ? Number(ug.edge_count) : 0,
                  id: ug.id,
                  lang_tag: ug.lang_tag,
                  max_count: ug.max_count,
                  metadata: ug.metadata ? JSON.parse(ug.metadata) : void 0,
                  name: ug.name,
                  open: ug.open,
                  update_time: ug.update_time
                });
              });
              return Promise.resolve(result);
            });
          });
        }
        linkApple(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.linkApple(session.token, request).then(response => void 0 !== response);
          });
        }
        linkCustom(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.linkCustom(session.token, request).then(response => void 0 !== response);
          });
        }
        linkDevice(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.linkDevice(session.token, request).then(response => void 0 !== response);
          });
        }
        linkEmail(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.linkEmail(session.token, request).then(response => void 0 !== response);
          });
        }
        linkFacebook(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.linkFacebook(session.token, request).then(response => void 0 !== response);
          });
        }
        linkFacebookInstantGame(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.linkFacebookInstantGame(session.token, request).then(response => void 0 !== response);
          });
        }
        linkGoogle(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.linkGoogle(session.token, request).then(response => void 0 !== response);
          });
        }
        linkGameCenter(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.linkGameCenter(session.token, request).then(response => void 0 !== response);
          });
        }
        linkSteam(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.linkSteam(session.token, request).then(response => void 0 !== response);
          });
        }
        listFriends(session, state, limit, cursor) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listFriends(session.token, limit, state, cursor).then(response => {
              var result = {
                friends: [],
                cursor: response.cursor
              };
              if (null == response.friends) return Promise.resolve(result);
              response.friends.forEach(f => {
                result.friends.push({
                  user: {
                    avatar_url: f.user.avatar_url,
                    create_time: f.user.create_time,
                    display_name: f.user.display_name,
                    edge_count: f.user.edge_count ? Number(f.user.edge_count) : 0,
                    facebook_id: f.user.facebook_id,
                    gamecenter_id: f.user.gamecenter_id,
                    google_id: f.user.google_id,
                    id: f.user.id,
                    lang_tag: f.user.lang_tag,
                    location: f.user.location,
                    online: f.user.online,
                    steam_id: f.user.steam_id,
                    timezone: f.user.timezone,
                    update_time: f.user.update_time,
                    username: f.user.username,
                    metadata: f.user.metadata ? JSON.parse(f.user.metadata) : void 0,
                    facebook_instant_game_id: f.user.facebook_instant_game_id
                  },
                  state: f.state
                });
              });
              return Promise.resolve(result);
            });
          });
        }
        listLeaderboardRecords(session, leaderboardId, ownerIds, limit, cursor, expiry) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listLeaderboardRecords(session.token, leaderboardId, ownerIds, limit, cursor, expiry).then(response => {
              var list = {
                next_cursor: response.next_cursor,
                prev_cursor: response.prev_cursor,
                owner_records: [],
                records: []
              };
              null != response.owner_records && response.owner_records.forEach(o => {
                list.owner_records.push({
                  expiry_time: o.expiry_time,
                  leaderboard_id: o.leaderboard_id,
                  metadata: o.metadata ? JSON.parse(o.metadata) : void 0,
                  num_score: o.num_score ? Number(o.num_score) : 0,
                  owner_id: o.owner_id,
                  rank: o.rank ? Number(o.rank) : 0,
                  score: o.score ? Number(o.score) : 0,
                  subscore: o.subscore ? Number(o.subscore) : 0,
                  update_time: o.update_time,
                  username: o.username,
                  max_num_score: o.max_num_score ? Number(o.max_num_score) : 0
                });
              });
              null != response.records && response.records.forEach(o => {
                list.records.push({
                  expiry_time: o.expiry_time,
                  leaderboard_id: o.leaderboard_id,
                  metadata: o.metadata ? JSON.parse(o.metadata) : void 0,
                  num_score: o.num_score ? Number(o.num_score) : 0,
                  owner_id: o.owner_id,
                  rank: o.rank ? Number(o.rank) : 0,
                  score: o.score ? Number(o.score) : 0,
                  subscore: o.subscore ? Number(o.subscore) : 0,
                  update_time: o.update_time,
                  username: o.username,
                  max_num_score: o.max_num_score ? Number(o.max_num_score) : 0
                });
              });
              return Promise.resolve(list);
            });
          });
        }
        listLeaderboardRecordsAroundOwner(session, leaderboardId, ownerId, limit, expiry) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listLeaderboardRecordsAroundOwner(session.token, leaderboardId, ownerId, limit, expiry).then(response => {
              var list = {
                next_cursor: response.next_cursor,
                prev_cursor: response.prev_cursor,
                owner_records: [],
                records: []
              };
              null != response.owner_records && response.owner_records.forEach(o => {
                list.owner_records.push({
                  expiry_time: o.expiry_time,
                  leaderboard_id: o.leaderboard_id,
                  metadata: o.metadata ? JSON.parse(o.metadata) : void 0,
                  num_score: o.num_score ? Number(o.num_score) : 0,
                  owner_id: o.owner_id,
                  rank: o.rank ? Number(o.rank) : 0,
                  score: o.score ? Number(o.score) : 0,
                  subscore: o.subscore ? Number(o.subscore) : 0,
                  update_time: o.update_time,
                  username: o.username,
                  max_num_score: o.max_num_score ? Number(o.max_num_score) : 0
                });
              });
              null != response.records && response.records.forEach(o => {
                list.records.push({
                  expiry_time: o.expiry_time,
                  leaderboard_id: o.leaderboard_id,
                  metadata: o.metadata ? JSON.parse(o.metadata) : void 0,
                  num_score: o.num_score ? Number(o.num_score) : 0,
                  owner_id: o.owner_id,
                  rank: o.rank ? Number(o.rank) : 0,
                  score: o.score ? Number(o.score) : 0,
                  subscore: o.subscore ? Number(o.subscore) : 0,
                  update_time: o.update_time,
                  username: o.username,
                  max_num_score: o.max_num_score ? Number(o.max_num_score) : 0
                });
              });
              return Promise.resolve(list);
            });
          });
        }
        listMatches(session, limit, authoritative, label, minSize, maxSize, query) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listMatches(session.token, limit, authoritative, label, minSize, maxSize, query);
          });
        }
        listNotifications(session, limit, cacheableCursor) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listNotifications(session.token, limit, cacheableCursor).then(response => {
              var result = {
                cacheable_cursor: response.cacheable_cursor,
                notifications: []
              };
              if (null == response.notifications) return Promise.resolve(result);
              response.notifications.forEach(n => {
                result.notifications.push({
                  code: n.code ? Number(n.code) : 0,
                  create_time: n.create_time,
                  id: n.id,
                  persistent: n.persistent,
                  sender_id: n.sender_id,
                  subject: n.subject,
                  content: n.content ? JSON.parse(n.content) : void 0
                });
              });
              return Promise.resolve(result);
            });
          });
        }
        listStorageObjects(session, collection, userId, limit, cursor) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listStorageObjects(session.token, collection, userId, limit, cursor).then(response => {
              var result = {
                objects: [],
                cursor: response.cursor
              };
              if (null == response.objects) return Promise.resolve(result);
              response.objects.forEach(o => {
                result.objects.push({
                  collection: o.collection,
                  key: o.key,
                  permission_read: o.permission_read ? Number(o.permission_read) : 0,
                  permission_write: o.permission_write ? Number(o.permission_write) : 0,
                  value: o.value ? JSON.parse(o.value) : void 0,
                  version: o.version,
                  user_id: o.user_id,
                  create_time: o.create_time,
                  update_time: o.update_time
                });
              });
              return Promise.resolve(result);
            });
          });
        }
        listTournaments(session, categoryStart, categoryEnd, startTime, endTime, limit, cursor) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listTournaments(session.token, categoryStart, categoryEnd, startTime, endTime, limit, cursor).then(response => {
              var list = {
                cursor: response.cursor,
                tournaments: []
              };
              null != response.tournaments && response.tournaments.forEach(o => {
                list.tournaments.push({
                  id: o.id,
                  title: o.title,
                  description: o.description,
                  duration: o.duration ? Number(o.duration) : 0,
                  category: o.category ? Number(o.category) : 0,
                  sort_order: o.sort_order ? Number(o.sort_order) : 0,
                  size: o.size ? Number(o.size) : 0,
                  max_size: o.max_size ? Number(o.max_size) : 0,
                  max_num_score: o.max_num_score ? Number(o.max_num_score) : 0,
                  can_enter: o.can_enter,
                  end_active: o.end_active ? Number(o.end_active) : 0,
                  next_reset: o.next_reset ? Number(o.next_reset) : 0,
                  metadata: o.metadata ? JSON.parse(o.metadata) : void 0,
                  create_time: o.create_time,
                  start_time: o.start_time,
                  end_time: o.end_time,
                  start_active: o.start_active
                });
              });
              return Promise.resolve(list);
            });
          });
        }
        listTournamentRecords(session, tournamentId, ownerIds, limit, cursor, expiry) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listTournamentRecords(session.token, tournamentId, ownerIds, limit, cursor, expiry).then(response => {
              var list = {
                next_cursor: response.next_cursor,
                prev_cursor: response.prev_cursor,
                owner_records: [],
                records: []
              };
              null != response.owner_records && response.owner_records.forEach(o => {
                list.owner_records.push({
                  expiry_time: o.expiry_time,
                  leaderboard_id: o.leaderboard_id,
                  metadata: o.metadata ? JSON.parse(o.metadata) : void 0,
                  num_score: o.num_score ? Number(o.num_score) : 0,
                  owner_id: o.owner_id,
                  rank: o.rank ? Number(o.rank) : 0,
                  score: o.score ? Number(o.score) : 0,
                  subscore: o.subscore ? Number(o.subscore) : 0,
                  update_time: o.update_time,
                  username: o.username,
                  max_num_score: o.max_num_score ? Number(o.max_num_score) : 0
                });
              });
              null != response.records && response.records.forEach(o => {
                list.records.push({
                  expiry_time: o.expiry_time,
                  leaderboard_id: o.leaderboard_id,
                  metadata: o.metadata ? JSON.parse(o.metadata) : void 0,
                  num_score: o.num_score ? Number(o.num_score) : 0,
                  owner_id: o.owner_id,
                  rank: o.rank ? Number(o.rank) : 0,
                  score: o.score ? Number(o.score) : 0,
                  subscore: o.subscore ? Number(o.subscore) : 0,
                  update_time: o.update_time,
                  username: o.username,
                  max_num_score: o.max_num_score ? Number(o.max_num_score) : 0
                });
              });
              return Promise.resolve(list);
            });
          });
        }
        listTournamentRecordsAroundOwner(session, tournamentId, ownerId, limit, expiry) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.listTournamentRecordsAroundOwner(session.token, tournamentId, ownerId, limit, expiry).then(response => {
              var list = {
                next_cursor: response.next_cursor,
                prev_cursor: response.prev_cursor,
                owner_records: [],
                records: []
              };
              null != response.owner_records && response.owner_records.forEach(o => {
                list.owner_records.push({
                  expiry_time: o.expiry_time,
                  leaderboard_id: o.leaderboard_id,
                  metadata: o.metadata ? JSON.parse(o.metadata) : void 0,
                  num_score: o.num_score ? Number(o.num_score) : 0,
                  owner_id: o.owner_id,
                  rank: o.rank ? Number(o.rank) : 0,
                  score: o.score ? Number(o.score) : 0,
                  subscore: o.subscore ? Number(o.subscore) : 0,
                  update_time: o.update_time,
                  username: o.username,
                  max_num_score: o.max_num_score ? Number(o.max_num_score) : 0
                });
              });
              null != response.records && response.records.forEach(o => {
                list.records.push({
                  expiry_time: o.expiry_time,
                  leaderboard_id: o.leaderboard_id,
                  metadata: o.metadata ? JSON.parse(o.metadata) : void 0,
                  num_score: o.num_score ? Number(o.num_score) : 0,
                  owner_id: o.owner_id,
                  rank: o.rank ? Number(o.rank) : 0,
                  score: o.score ? Number(o.score) : 0,
                  subscore: o.subscore ? Number(o.subscore) : 0,
                  update_time: o.update_time,
                  username: o.username,
                  max_num_score: o.max_num_score ? Number(o.max_num_score) : 0
                });
              });
              return Promise.resolve(list);
            });
          });
        }
        promoteGroupUsers(session, groupId, ids) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.promoteGroupUsers(session.token, groupId, ids);
          });
        }
        readStorageObjects(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.readStorageObjects(session.token, request).then(response => {
              var result = {
                objects: []
              };
              if (null == response.objects) return Promise.resolve(result);
              response.objects.forEach(o => {
                result.objects.push({
                  collection: o.collection,
                  key: o.key,
                  permission_read: o.permission_read ? Number(o.permission_read) : 0,
                  permission_write: o.permission_write ? Number(o.permission_write) : 0,
                  value: o.value ? JSON.parse(o.value) : void 0,
                  version: o.version,
                  user_id: o.user_id,
                  create_time: o.create_time,
                  update_time: o.update_time
                });
              });
              return Promise.resolve(result);
            });
          });
        }
        rpc(session, id, input) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.rpcFunc(session.token, id, JSON.stringify(input)).then(response => Promise.resolve({
              id: response.id,
              payload: response.payload ? JSON.parse(response.payload) : void 0
            }));
          });
        }
        rpcHttpKey(httpKey, id, input) {
          return __async(this, null, function*() {
            return this.apiClient.rpcFunc2("", id, input && JSON.stringify(input) || "", httpKey).then(response => Promise.resolve({
              id: response.id,
              payload: response.payload ? JSON.parse(response.payload) : void 0
            })).catch(err => {
              throw err;
            });
          });
        }
        sessionLogout(session, token, refreshToken) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.sessionLogout(session.token, {
              refresh_token: refreshToken,
              token: token
            }).then(response => void 0 !== response);
          });
        }
        sessionRefresh(_0) {
          return __async(this, arguments, function*(session, vars = new Map()) {
            if (!session) {
              console.error("Cannot refresh a null session.");
              return session;
            }
            session.created && session.expires_at - session.created_at < 70 && console.warn("Session lifetime too short, please set '--session.token_expiry_sec' option. See the documentation for more info: https://heroiclabs.com/docs/install-configuration/#session");
            session.created && session.refresh_expires_at - session.created_at < 3700 && console.warn("Session refresh lifetime too short, please set '--session.refresh_token_expiry_sec' option. See the documentation for more info: https://heroiclabs.com/docs/install-configuration/#session");
            const apiSession = yield this.apiClient.sessionRefresh(this.serverkey, "", {
              token: session.refresh_token,
              vars: vars
            });
            session.update(apiSession.token, apiSession.refresh_token);
            return session;
          });
        }
        unlinkApple(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.unlinkApple(session.token, request).then(response => void 0 !== response);
          });
        }
        unlinkCustom(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.unlinkCustom(session.token, request).then(response => void 0 !== response);
          });
        }
        unlinkDevice(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.unlinkDevice(session.token, request).then(response => void 0 !== response);
          });
        }
        unlinkEmail(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.unlinkEmail(session.token, request).then(response => void 0 !== response);
          });
        }
        unlinkFacebook(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.unlinkFacebook(session.token, request).then(response => void 0 !== response);
          });
        }
        unlinkFacebookInstantGame(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.unlinkFacebookInstantGame(session.token, request).then(response => void 0 !== response);
          });
        }
        unlinkGoogle(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.unlinkGoogle(session.token, request).then(response => void 0 !== response);
          });
        }
        unlinkGameCenter(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.unlinkGameCenter(session.token, request).then(response => void 0 !== response);
          });
        }
        unlinkSteam(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.unlinkSteam(session.token, request).then(response => void 0 !== response);
          });
        }
        updateAccount(session, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.updateAccount(session.token, request).then(response => void 0 !== response);
          });
        }
        updateGroup(session, groupId, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.updateGroup(session.token, groupId, request).then(response => void 0 !== response);
          });
        }
        validatePurchaseApple(session, receipt) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.validatePurchaseApple(session.token, {
              receipt: receipt
            });
          });
        }
        validatePurchaseGoogle(session, purchase) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.validatePurchaseGoogle(session.token, {
              purchase: purchase
            });
          });
        }
        validatePurchaseHuawei(session, purchase, signature) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.validatePurchaseHuawei(session.token, {
              purchase: purchase,
              signature: signature
            });
          });
        }
        writeLeaderboardRecord(session, leaderboardId, request) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            return this.apiClient.writeLeaderboardRecord(session.token, leaderboardId, {
              metadata: request.metadata ? JSON.stringify(request.metadata) : void 0,
              score: request.score,
              subscore: request.subscore
            }).then(response => Promise.resolve({
              expiry_time: response.expiry_time,
              leaderboard_id: response.leaderboard_id,
              metadata: response.metadata ? JSON.parse(response.metadata) : void 0,
              num_score: response.num_score ? Number(response.num_score) : 0,
              owner_id: response.owner_id,
              score: response.score ? Number(response.score) : 0,
              subscore: response.subscore ? Number(response.subscore) : 0,
              update_time: response.update_time,
              username: response.username,
              max_num_score: response.max_num_score ? Number(response.max_num_score) : 0,
              rank: response.rank ? Number(response.rank) : 0
            }));
          });
        }
        writeStorageObjects(session, objects) {
          return __async(this, null, function*() {
            this.autoRefreshSession && session.refresh_token && session.isexpired((Date.now() + this.expiredTimespanMs) / 1e3) && (yield this.sessionRefresh(session));
            var request = {
              objects: []
            };
            objects.forEach(o => {
              request.objects.push({
                collection: o.collection,
                key: o.key,
                permission_read: o.permission_read,
                permission_write: o.permission_write,
                value: JSON.stringify(o.value),
                version: o.version
              });
            });
            return this.apiClient.writeStorageObjects(session.token, request);
          });
        }
        writeTournamentRecord(session, tournamentId, request) {
          return __async(this, null, function*() {
            return this.apiClient.writeTournamentRecord(session.token, tournamentId, {
              metadata: request.metadata ? JSON.stringify(request.metadata) : void 0,
              score: request.score,
              subscore: request.subscore
            }).then(response => Promise.resolve({
              expiry_time: response.expiry_time,
              leaderboard_id: response.leaderboard_id,
              metadata: response.metadata ? JSON.parse(response.metadata) : void 0,
              num_score: response.num_score ? Number(response.num_score) : 0,
              owner_id: response.owner_id,
              score: response.score ? Number(response.score) : 0,
              subscore: response.subscore ? Number(response.subscore) : 0,
              update_time: response.update_time,
              username: response.username,
              max_num_score: response.max_num_score ? Number(response.max_num_score) : 0,
              rank: response.rank ? Number(response.rank) : 0
            }));
          });
        }
      };
    }).call(this, require("buffer").Buffer);
  }, {
    buffer: 18
  } ],
  2: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "v1", {
      enumerable: true,
      get: function() {
        return _v.default;
      }
    });
    Object.defineProperty(exports, "v3", {
      enumerable: true,
      get: function() {
        return _v2.default;
      }
    });
    Object.defineProperty(exports, "v4", {
      enumerable: true,
      get: function() {
        return _v3.default;
      }
    });
    Object.defineProperty(exports, "v5", {
      enumerable: true,
      get: function() {
        return _v4.default;
      }
    });
    Object.defineProperty(exports, "NIL", {
      enumerable: true,
      get: function() {
        return _nil.default;
      }
    });
    Object.defineProperty(exports, "version", {
      enumerable: true,
      get: function() {
        return _version.default;
      }
    });
    Object.defineProperty(exports, "validate", {
      enumerable: true,
      get: function() {
        return _validate.default;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function() {
        return _stringify.default;
      }
    });
    Object.defineProperty(exports, "parse", {
      enumerable: true,
      get: function() {
        return _parse.default;
      }
    });
    var _v = _interopRequireDefault(require("./v1.js"));
    var _v2 = _interopRequireDefault(require("./v3.js"));
    var _v3 = _interopRequireDefault(require("./v4.js"));
    var _v4 = _interopRequireDefault(require("./v5.js"));
    var _nil = _interopRequireDefault(require("./nil.js"));
    var _version = _interopRequireDefault(require("./version.js"));
    var _validate = _interopRequireDefault(require("./validate.js"));
    var _stringify = _interopRequireDefault(require("./stringify.js"));
    var _parse = _interopRequireDefault(require("./parse.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  }, {
    "./nil.js": 4,
    "./parse.js": 5,
    "./stringify.js": 9,
    "./v1.js": 10,
    "./v3.js": 11,
    "./v4.js": 13,
    "./v5.js": 14,
    "./validate.js": 15,
    "./version.js": 16
  } ],
  3: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function md5(bytes) {
      if ("string" === typeof bytes) {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = new Uint8Array(msg.length);
        for (let i = 0; i < msg.length; ++i) bytes[i] = msg.charCodeAt(i);
      }
      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), 8 * bytes.length));
    }
    function md5ToHexEncodedArray(input) {
      const output = [];
      const length32 = 32 * input.length;
      const hexTab = "0123456789abcdef";
      for (let i = 0; i < length32; i += 8) {
        const x = input[i >> 5] >>> i % 32 & 255;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(15 & x), 16);
        output.push(hex);
      }
      return output;
    }
    function getOutputLength(inputLength8) {
      return 14 + (inputLength8 + 64 >>> 9 << 4) + 1;
    }
    function wordsToMd5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[getOutputLength(len) - 1] = len;
      let a = 1732584193;
      let b = -271733879;
      let c = -1732584194;
      let d = 271733878;
      for (let i = 0; i < x.length; i += 16) {
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }
      return [ a, b, c, d ];
    }
    function bytesToWords(input) {
      if (0 === input.length) return [];
      const length8 = 8 * input.length;
      const output = new Uint32Array(getOutputLength(length8));
      for (let i = 0; i < length8; i += 8) output[i >> 5] |= (255 & input[i / 8]) << i % 32;
      return output;
    }
    function safeAdd(x, y) {
      const lsw = (65535 & x) + (65535 & y);
      const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | 65535 & lsw;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }
    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    var _default = md5;
    exports.default = _default;
  }, {} ],
  4: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = "00000000-0000-0000-0000-000000000000";
    exports.default = _default;
  }, {} ],
  5: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require("./validate.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function parse(uuid) {
      if (!(0, _validate.default)(uuid)) throw TypeError("Invalid UUID");
      let v;
      const arr = new Uint8Array(16);
      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
      arr[1] = v >>> 16 & 255;
      arr[2] = v >>> 8 & 255;
      arr[3] = 255 & v;
      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
      arr[5] = 255 & v;
      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
      arr[7] = 255 & v;
      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
      arr[9] = 255 & v;
      arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
      arr[11] = v / 4294967296 & 255;
      arr[12] = v >>> 24 & 255;
      arr[13] = v >>> 16 & 255;
      arr[14] = v >>> 8 & 255;
      arr[15] = 255 & v;
      return arr;
    }
    var _default = parse;
    exports.default = _default;
  }, {
    "./validate.js": 15
  } ],
  6: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    exports.default = _default;
  }, {} ],
  7: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = rng;
    let getRandomValues;
    const rnds8 = new Uint8Array(16);
    function rng() {
      if (!getRandomValues) {
        getRandomValues = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
      return getRandomValues(rnds8);
    }
  }, {} ],
  8: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function f(s, x, y, z) {
      switch (s) {
       case 0:
        return x & y ^ ~x & z;

       case 1:
        return x ^ y ^ z;

       case 2:
        return x & y ^ x & z ^ y & z;

       case 3:
        return x ^ y ^ z;
      }
    }
    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }
    function sha1(bytes) {
      const K = [ 1518500249, 1859775393, 2400959708, 3395469782 ];
      const H = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ];
      if ("string" === typeof bytes) {
        const msg = unescape(encodeURIComponent(bytes));
        bytes = [];
        for (let i = 0; i < msg.length; ++i) bytes.push(msg.charCodeAt(i));
      } else Array.isArray(bytes) || (bytes = Array.prototype.slice.call(bytes));
      bytes.push(128);
      const l = bytes.length / 4 + 2;
      const N = Math.ceil(l / 16);
      const M = new Array(N);
      for (let i = 0; i < N; ++i) {
        const arr = new Uint32Array(16);
        for (let j = 0; j < 16; ++j) arr[j] = bytes[64 * i + 4 * j] << 24 | bytes[64 * i + 4 * j + 1] << 16 | bytes[64 * i + 4 * j + 2] << 8 | bytes[64 * i + 4 * j + 3];
        M[i] = arr;
      }
      M[N - 1][14] = 8 * (bytes.length - 1) / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = 8 * (bytes.length - 1) & 4294967295;
      for (let i = 0; i < N; ++i) {
        const W = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) W[t] = M[i][t];
        for (let t = 16; t < 80; ++t) W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for (let t = 0; t < 80; ++t) {
          const s = Math.floor(t / 20);
          const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }
      return [ H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, 255 & H[0], H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, 255 & H[1], H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, 255 & H[2], H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, 255 & H[3], H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, 255 & H[4] ];
    }
    var _default = sha1;
    exports.default = _default;
  }, {} ],
  9: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require("./validate.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    const byteToHex = [];
    for (let i = 0; i < 256; ++i) byteToHex.push((i + 256).toString(16).substr(1));
    function stringify(arr, offset = 0) {
      const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
      if (!(0, _validate.default)(uuid)) throw TypeError("Stringified UUID is invalid");
      return uuid;
    }
    var _default = stringify;
    exports.default = _default;
  }, {
    "./validate.js": 15
  } ],
  10: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require("./rng.js"));
    var _stringify = _interopRequireDefault(require("./stringify.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    let _nodeId;
    let _clockseq;
    let _lastMSecs = 0;
    let _lastNSecs = 0;
    function v1(options, buf, offset) {
      let i = buf && offset || 0;
      const b = buf || new Array(16);
      options = options || {};
      let node = options.node || _nodeId;
      let clockseq = void 0 !== options.clockseq ? options.clockseq : _clockseq;
      if (null == node || null == clockseq) {
        const seedBytes = options.random || (options.rng || _rng.default)();
        null == node && (node = _nodeId = [ 1 | seedBytes[0], seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5] ]);
        null == clockseq && (clockseq = _clockseq = 16383 & (seedBytes[6] << 8 | seedBytes[7]));
      }
      let msecs = void 0 !== options.msecs ? options.msecs : Date.now();
      let nsecs = void 0 !== options.nsecs ? options.nsecs : _lastNSecs + 1;
      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
      dt < 0 && void 0 === options.clockseq && (clockseq = clockseq + 1 & 16383);
      (dt < 0 || msecs > _lastMSecs) && void 0 === options.nsecs && (nsecs = 0);
      if (nsecs >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq;
      msecs += 122192928e5;
      const tl = (1e4 * (268435455 & msecs) + nsecs) % 4294967296;
      b[i++] = tl >>> 24 & 255;
      b[i++] = tl >>> 16 & 255;
      b[i++] = tl >>> 8 & 255;
      b[i++] = 255 & tl;
      const tmh = msecs / 4294967296 * 1e4 & 268435455;
      b[i++] = tmh >>> 8 & 255;
      b[i++] = 255 & tmh;
      b[i++] = tmh >>> 24 & 15 | 16;
      b[i++] = tmh >>> 16 & 255;
      b[i++] = clockseq >>> 8 | 128;
      b[i++] = 255 & clockseq;
      for (let n = 0; n < 6; ++n) b[i + n] = node[n];
      return buf || (0, _stringify.default)(b);
    }
    var _default = v1;
    exports.default = _default;
  }, {
    "./rng.js": 7,
    "./stringify.js": 9
  } ],
  11: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require("./v35.js"));
    var _md = _interopRequireDefault(require("./md5.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    const v3 = (0, _v.default)("v3", 48, _md.default);
    var _default = v3;
    exports.default = _default;
  }, {
    "./md5.js": 3,
    "./v35.js": 12
  } ],
  12: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    exports.URL = exports.DNS = void 0;
    var _stringify = _interopRequireDefault(require("./stringify.js"));
    var _parse = _interopRequireDefault(require("./parse.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str));
      const bytes = [];
      for (let i = 0; i < str.length; ++i) bytes.push(str.charCodeAt(i));
      return bytes;
    }
    const DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    exports.DNS = DNS;
    const URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    exports.URL = URL;
    function _default(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        "string" === typeof value && (value = stringToBytes(value));
        "string" === typeof namespace && (namespace = (0, _parse.default)(namespace));
        if (16 !== namespace.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = 15 & bytes[6] | version;
        bytes[8] = 63 & bytes[8] | 128;
        if (buf) {
          offset = offset || 0;
          for (let i = 0; i < 16; ++i) buf[offset + i] = bytes[i];
          return buf;
        }
        return (0, _stringify.default)(bytes);
      }
      try {
        generateUUID.name = name;
      } catch (err) {}
      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    }
  }, {
    "./parse.js": 5,
    "./stringify.js": 9
  } ],
  13: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rng = _interopRequireDefault(require("./rng.js"));
    var _stringify = _interopRequireDefault(require("./stringify.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function v4(options, buf, offset) {
      options = options || {};
      const rnds = options.random || (options.rng || _rng.default)();
      rnds[6] = 15 & rnds[6] | 64;
      rnds[8] = 63 & rnds[8] | 128;
      if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
        return buf;
      }
      return (0, _stringify.default)(rnds);
    }
    var _default = v4;
    exports.default = _default;
  }, {
    "./rng.js": 7,
    "./stringify.js": 9
  } ],
  14: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _v = _interopRequireDefault(require("./v35.js"));
    var _sha = _interopRequireDefault(require("./sha1.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    const v5 = (0, _v.default)("v5", 80, _sha.default);
    var _default = v5;
    exports.default = _default;
  }, {
    "./sha1.js": 8,
    "./v35.js": 12
  } ],
  15: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regex = _interopRequireDefault(require("./regex.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function validate(uuid) {
      return "string" === typeof uuid && _regex.default.test(uuid);
    }
    var _default = validate;
    exports.default = _default;
  }, {
    "./regex.js": 6
  } ],
  16: [ function(require, module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _validate = _interopRequireDefault(require("./validate.js"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function version(uuid) {
      if (!(0, _validate.default)(uuid)) throw TypeError("Invalid UUID");
      return parseInt(uuid.substr(14, 1), 16);
    }
    var _default = version;
    exports.default = _default;
  }, {
    "./validate.js": 15
  } ],
  Bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84550JeSjpPf6DUDeJ8wk53", "Bullet");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bullet = function(_super) {
      __extends(Bullet, _super);
      function Bullet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.trail = null;
        _this.vx = null;
        _this.vy = null;
        _this.vel = 2e3;
        _this.damage = 10;
        _this.isHit = false;
        return _this;
      }
      Bullet.prototype.setPosition = function(x, y) {
        this.node.setPosition(x, y);
      };
      Bullet.prototype.setAngle = function(angle) {
        this.trail.node.angle = angle + 90;
        this.vy = Math.cos(angle * Math.PI / 180) * this.vel;
        this.vx = -Math.tan(angle * Math.PI / 180) * this.vy;
      };
      Bullet.prototype.start = function() {};
      Bullet.prototype.fire = function() {
        this.node.active = true;
        this.trail.node.active = true;
        this.isHit = false;
        this.trail.node.scaleX = 0;
        this.trail.node.stopAllActions();
        cc.tween(this.trail.node).to(.07, {
          scaleX: 1
        }).union().start();
      };
      Bullet.prototype.hit = function() {
        var _this = this;
        this.isHit = true;
        this.trail.node.stopAllActions();
        cc.tween(this.trail.node).to(.05, {
          scaleX: 0
        }).call(function() {
          _this.node.active = false;
          _this.trail.node.active = false;
        }).union().start();
      };
      Bullet.prototype.isAvailable = function() {
        return !this.node.active;
      };
      Bullet.prototype.updateFly = function(dt) {
        this.node.x += this.vx * dt;
        this.node.y += this.vy * dt;
      };
      __decorate([ property(cc.Sprite) ], Bullet.prototype, "trail", void 0);
      Bullet = __decorate([ ccclass ], Bullet);
      return Bullet;
    }(cc.Component);
    exports.default = Bullet;
    cc._RF.pop();
  }, {} ],
  Bush: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd95bnWttZJJ4k16s0IP4HF", "Bush");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Obstacle_1 = require("./Obstacle");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bush = function(_super) {
      __extends(Bush, _super);
      function Bush() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.root = null;
        _this.leaf = null;
        return _this;
      }
      Bush.prototype.onLoad = function() {
        this.r = this.root.node.width / 2;
      };
      Bush.prototype.start = function() {};
      Bush.prototype.checkCollisionCircle = function(r, x, y) {
        var d2 = (this.node.x - x) * (this.node.x - x) + (this.node.y - y) * (this.node.y - y);
        return d2 <= r * r + this.r * this.r + 2 * r * this.r;
      };
      Bush.prototype.checkCollisionPoint = function(x, y) {
        var d2 = (this.node.x - x) * (this.node.x - x) + (this.node.y - y) * (this.node.y - y);
        return d2 <= this.r * this.r;
      };
      __decorate([ property(cc.Sprite) ], Bush.prototype, "root", void 0);
      __decorate([ property(cc.Sprite) ], Bush.prototype, "leaf", void 0);
      Bush = __decorate([ ccclass ], Bush);
      return Bush;
    }(Obstacle_1.default);
    exports.default = Bush;
    cc._RF.pop();
  }, {
    "./Obstacle": "Obstacle"
  } ],
  17: [ function(require, module, exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len = b64.length;
      if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var validLen = b64.indexOf("=");
      -1 === validLen && (validLen = len);
      var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
      return [ validLen, placeHoldersLen ];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i;
      for (i = 0; i < len; i += 4) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      if (2 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = 255 & tmp;
      }
      if (1 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
      if (1 === extraBytes) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (2 === extraBytes) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }, {} ],
  18: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      var base64 = require("base64-js");
      var ieee754 = require("ieee754");
      var isArray = require("isarray");
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      Buffer.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
      exports.kMaxLength = kMaxLength();
      function typedArraySupport() {
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42;
            }
          };
          return 42 === arr.foo() && "function" === typeof arr.subarray && 0 === arr.subarray(1, 1).byteLength;
        } catch (e) {
          return false;
        }
      }
      function kMaxLength() {
        return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function createBuffer(that, length) {
        if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = new Uint8Array(length);
          that.__proto__ = Buffer.prototype;
        } else {
          null === that && (that = new Buffer(length));
          that.length = length;
        }
        return that;
      }
      function Buffer(arg, encodingOrOffset, length) {
        if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
        if ("number" === typeof arg) {
          if ("string" === typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
          return allocUnsafe(this, arg);
        }
        return from(this, arg, encodingOrOffset, length);
      }
      Buffer.poolSize = 8192;
      Buffer._augment = function(arr) {
        arr.__proto__ = Buffer.prototype;
        return arr;
      };
      function from(that, value, encodingOrOffset, length) {
        if ("number" === typeof value) throw new TypeError('"value" argument must not be a number');
        if ("undefined" !== typeof ArrayBuffer && value instanceof ArrayBuffer) return fromArrayBuffer(that, value, encodingOrOffset, length);
        if ("string" === typeof value) return fromString(that, value, encodingOrOffset);
        return fromObject(that, value);
      }
      Buffer.from = function(value, encodingOrOffset, length) {
        return from(null, value, encodingOrOffset, length);
      };
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        Buffer.prototype.__proto__ = Uint8Array.prototype;
        Buffer.__proto__ = Uint8Array;
        "undefined" !== typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
      function assertSize(size) {
        if ("number" !== typeof size) throw new TypeError('"size" argument must be a number');
        if (size < 0) throw new RangeError('"size" argument must not be negative');
      }
      function alloc(that, size, fill, encoding) {
        assertSize(size);
        if (size <= 0) return createBuffer(that, size);
        if (void 0 !== fill) return "string" === typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
        return createBuffer(that, size);
      }
      Buffer.alloc = function(size, fill, encoding) {
        return alloc(null, size, fill, encoding);
      };
      function allocUnsafe(that, size) {
        assertSize(size);
        that = createBuffer(that, size < 0 ? 0 : 0 | checked(size));
        if (!Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
        return that;
      }
      Buffer.allocUnsafe = function(size) {
        return allocUnsafe(null, size);
      };
      Buffer.allocUnsafeSlow = function(size) {
        return allocUnsafe(null, size);
      };
      function fromString(that, string, encoding) {
        "string" === typeof encoding && "" !== encoding || (encoding = "utf8");
        if (!Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
        var length = 0 | byteLength(string, encoding);
        that = createBuffer(that, length);
        var actual = that.write(string, encoding);
        actual !== length && (that = that.slice(0, actual));
        return that;
      }
      function fromArrayLike(that, array) {
        var length = array.length < 0 ? 0 : 0 | checked(array.length);
        that = createBuffer(that, length);
        for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
        return that;
      }
      function fromArrayBuffer(that, array, byteOffset, length) {
        array.byteLength;
        if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
        if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
        array = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = array;
          that.__proto__ = Buffer.prototype;
        } else that = fromArrayLike(that, array);
        return that;
      }
      function fromObject(that, obj) {
        if (Buffer.isBuffer(obj)) {
          var len = 0 | checked(obj.length);
          that = createBuffer(that, len);
          if (0 === that.length) return that;
          obj.copy(that, 0, 0, len);
          return that;
        }
        if (obj) {
          if ("undefined" !== typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) {
            if ("number" !== typeof obj.length || isnan(obj.length)) return createBuffer(that, 0);
            return fromArrayLike(that, obj);
          }
          if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data);
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }
      function checked(length) {
        if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
        return 0 | length;
      }
      function SlowBuffer(length) {
        +length != length && (length = 0);
        return Buffer.alloc(+length);
      }
      Buffer.isBuffer = function isBuffer(b) {
        return !!(null != b && b._isBuffer);
      };
      Buffer.compare = function compare(a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
        if (a === b) return 0;
        var x = a.length;
        var y = b.length;
        for (var i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
         case "hex":
         case "utf8":
         case "utf-8":
         case "ascii":
         case "latin1":
         case "binary":
         case "base64":
         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return true;

         default:
          return false;
        }
      };
      Buffer.concat = function concat(list, length) {
        if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === list.length) return Buffer.alloc(0);
        var i;
        if (void 0 === length) {
          length = 0;
          for (i = 0; i < list.length; ++i) length += list[i].length;
        }
        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
          buf.copy(buffer, pos);
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) return string.length;
        if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
        "string" !== typeof string && (string = "" + string);
        var len = string.length;
        if (0 === len) return 0;
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "ascii":
         case "latin1":
         case "binary":
          return len;

         case "utf8":
         case "utf-8":
         case void 0:
          return utf8ToBytes(string).length;

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return 2 * len;

         case "hex":
          return len >>> 1;

         case "base64":
          return base64ToBytes(string).length;

         default:
          if (loweredCase) return utf8ToBytes(string).length;
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        var loweredCase = false;
        (void 0 === start || start < 0) && (start = 0);
        if (start > this.length) return "";
        (void 0 === end || end > this.length) && (end = this.length);
        if (end <= 0) return "";
        end >>>= 0;
        start >>>= 0;
        if (end <= start) return "";
        encoding || (encoding = "utf8");
        while (true) switch (encoding) {
         case "hex":
          return hexSlice(this, start, end);

         case "utf8":
         case "utf-8":
          return utf8Slice(this, start, end);

         case "ascii":
          return asciiSlice(this, start, end);

         case "latin1":
         case "binary":
          return latin1Slice(this, start, end);

         case "base64":
          return base64Slice(this, start, end);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return utf16leSlice(this, start, end);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.prototype._isBuffer = true;
      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
        return this;
      };
      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer.prototype.toString = function toString() {
        var length = 0 | this.length;
        if (0 === length) return "";
        if (0 === arguments.length) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
        if (this === b) return true;
        return 0 === Buffer.compare(this, b);
      };
      Buffer.prototype.inspect = function inspect() {
        var str = "";
        var max = exports.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
          this.length > max && (str += " ... ");
        }
        return "<Buffer " + str + ">";
      };
      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
        void 0 === start && (start = 0);
        void 0 === end && (end = target ? target.length : 0);
        void 0 === thisStart && (thisStart = 0);
        void 0 === thisEnd && (thisEnd = this.length);
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
        if (thisStart >= thisEnd && start >= end) return 0;
        if (thisStart >= thisEnd) return -1;
        if (start >= end) return 1;
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);
        for (var i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (0 === buffer.length) return -1;
        if ("string" === typeof byteOffset) {
          encoding = byteOffset;
          byteOffset = 0;
        } else byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648);
        byteOffset = +byteOffset;
        isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1);
        byteOffset < 0 && (byteOffset = buffer.length + byteOffset);
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (!dir) return -1;
          byteOffset = 0;
        }
        "string" === typeof val && (val = Buffer.from(val, encoding));
        if (Buffer.isBuffer(val)) {
          if (0 === val.length) return -1;
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        }
        if ("number" === typeof val) {
          val &= 255;
          if (Buffer.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf) return dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;
        if (void 0 !== encoding) {
          encoding = String(encoding).toLowerCase();
          if ("ucs2" === encoding || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding) {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i) {
          return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize);
        }
        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, -1 === foundIndex ? 0 : i - foundIndex)) {
            -1 === foundIndex && (foundIndex = i);
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            -1 !== foundIndex && (i -= i - foundIndex);
            foundIndex = -1;
          }
        } else {
          byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength);
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return -1 !== this.indexOf(val, byteOffset, encoding);
      };
      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (length) {
          length = Number(length);
          length > remaining && (length = remaining);
        } else length = remaining;
        var strLen = string.length;
        if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
        length > strLen / 2 && (length = strLen / 2);
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(2 * i, 2), 16);
          if (isNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function latin1Write(buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer.prototype.write = function write(string, offset, length, encoding) {
        if (void 0 === offset) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (void 0 === length && "string" === typeof offset) {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else {
          if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          offset |= 0;
          if (isFinite(length)) {
            length |= 0;
            void 0 === encoding && (encoding = "utf8");
          } else {
            encoding = length;
            length = void 0;
          }
        }
        var remaining = this.length - offset;
        (void 0 === length || length > remaining) && (length = remaining);
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        encoding || (encoding = "utf8");
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "hex":
          return hexWrite(this, string, offset, length);

         case "utf8":
         case "utf-8":
          return utf8Write(this, string, offset, length);

         case "ascii":
          return asciiWrite(this, string, offset, length);

         case "latin1":
         case "binary":
          return latin1Write(this, string, offset, length);

         case "base64":
          return base64Write(this, string, offset, length);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return ucs2Write(this, string, offset, length);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      };
      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
             case 1:
              firstByte < 128 && (codePoint = firstByte);
              break;

             case 2:
              secondByte = buf[i + 1];
              if (128 === (192 & secondByte)) {
                tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte;
                tempCodePoint > 127 && (codePoint = tempCodePoint);
              }
              break;

             case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte)) {
                tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte;
                tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint);
              }
              break;

             case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte) && 128 === (192 & fourthByte)) {
                tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte;
                tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint);
              }
            }
          }
          if (null === codePoint) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | 1023 & codePoint;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
        var res = "";
        var i = 0;
        while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        return res;
      }
      function asciiSlice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
        return ret;
      }
      function latin1Slice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
        return ret;
      }
      function hexSlice(buf, start, end) {
        var len = buf.length;
        (!start || start < 0) && (start = 0);
        (!end || end < 0 || end > len) && (end = len);
        var out = "";
        for (var i = start; i < end; ++i) out += toHex(buf[i]);
        return out;
      }
      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = "";
        for (var i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
        return res;
      }
      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = void 0 === end ? len : ~~end;
        if (start < 0) {
          start += len;
          start < 0 && (start = 0);
        } else start > len && (start = len);
        if (end < 0) {
          end += len;
          end < 0 && (end = 0);
        } else end > len && (end = len);
        end < start && (end = start);
        var newBuf;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          newBuf = this.subarray(start, end);
          newBuf.__proto__ = Buffer.prototype;
        } else {
          var sliceLen = end - start;
          newBuf = new Buffer(sliceLen, void 0);
          for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start];
        }
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        return val;
      };
      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
        return val;
      };
      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3];
      };
      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        if (!(128 & this[offset])) return this[offset];
        return -1 * (255 - this[offset] + 1);
      };
      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var mul = 1;
        var i = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 255, 0);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        this[offset] = 255 & value;
        return offset + 1;
      };
      function objectWriteUInt16(buf, value, offset, littleEndian) {
        value < 0 && (value = 65535 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i);
      }
      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      function objectWriteUInt32(buf, value, offset, littleEndian) {
        value < 0 && (value = 4294967295 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255;
      }
      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset + 3] = value >>> 24;
          this[offset + 2] = value >>> 16;
          this[offset + 1] = value >>> 8;
          this[offset] = 255 & value;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 127, -128);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        value < 0 && (value = 255 + value + 1);
        this[offset] = 255 & value;
        return offset + 1;
      };
      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        value < 0 && (value = 4294967295 + value + 1);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        start || (start = 0);
        end || 0 === end || (end = this.length);
        targetStart >= target.length && (targetStart = target.length);
        targetStart || (targetStart = 0);
        end > 0 && end < start && (end = start);
        if (end === start) return 0;
        if (0 === target.length || 0 === this.length) return 0;
        if (targetStart < 0) throw new RangeError("targetStart out of bounds");
        if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        end > this.length && (end = this.length);
        target.length - targetStart < end - start && (end = target.length - targetStart + start);
        var len = end - start;
        var i;
        if (this === target && start < targetStart && targetStart < end) for (i = len - 1; i >= 0; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
        return len;
      };
      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        if ("string" === typeof val) {
          if ("string" === typeof start) {
            encoding = start;
            start = 0;
            end = this.length;
          } else if ("string" === typeof end) {
            encoding = end;
            end = this.length;
          }
          if (1 === val.length) {
            var code = val.charCodeAt(0);
            code < 256 && (val = code);
          }
          if (void 0 !== encoding && "string" !== typeof encoding) throw new TypeError("encoding must be a string");
          if ("string" === typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        } else "number" === typeof val && (val &= 255);
        if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
        if (end <= start) return this;
        start >>>= 0;
        end = void 0 === end ? this.length : end >>> 0;
        val || (val = 0);
        var i;
        if ("number" === typeof val) for (i = start; i < end; ++i) this[i] = val; else {
          var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
          var len = bytes.length;
          for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
        }
        return this;
      };
      var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = stringtrim(str).replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) str += "=";
        return str;
      }
      function stringtrim(str) {
        if (str.trim) return str.trim();
        return str.replace(/^\s+|\s+$/g, "");
      }
      function toHex(n) {
        if (n < 16) return "0" + n.toString(16);
        return n.toString(16);
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];
        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              if (i + 1 === length) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              (units -= 3) > -1 && bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = 65536 + (leadSurrogate - 55296 << 10 | codePoint - 56320);
          } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128);
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          } else {
            if (!(codePoint < 1114112)) throw new Error("Invalid code point");
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) byteArray.push(255 & str.charCodeAt(i));
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isnan(val) {
        return val !== val;
      }
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "base64-js": 17,
    ieee754: 20,
    isarray: 19
  } ],
  19: [ function(require, module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return "[object Array]" == toString.call(arr);
    };
  }, {} ],
  20: [ function(require, module, exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (;nBits > 0; e = 256 * e + buffer[offset + i], i += d, nBits -= 8) ;
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (;nBits > 0; m = 256 * m + buffer[offset + i], i += d, nBits -= 8) ;
      if (0 === e) e = 1 - eBias; else {
        if (e === eMax) return m ? NaN : Infinity * (s ? -1 : 1);
        m += Math.pow(2, mLen);
        e -= eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || Infinity === value) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e += eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (;mLen >= 8; buffer[offset + i] = 255 & m, i += d, m /= 256, mLen -= 8) ;
      e = e << mLen | m;
      eLen += mLen;
      for (;eLen > 0; buffer[offset + i] = 255 & e, i += d, e /= 256, eLen -= 8) ;
      buffer[offset + i - d] |= 128 * s;
    };
  }, {} ],
  EventHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c7d931tBZHOLbckBwIgLVy", "EventHandler");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.eventHandler = void 0;
    var EventHandler = function() {
      function EventHandler() {
        this.eventTarget = new cc.EventTarget();
      }
      EventHandler.prototype.on = function(event, callback) {
        this.eventTarget.on(event, callback);
      };
      EventHandler.prototype.off = function(event, callback) {
        this.eventTarget.off(event, callback);
      };
      EventHandler.prototype.dispatchEvent = function(event, data) {
        if (event instanceof cc.Event) this.eventTarget.dispatchEvent(event); else {
          var eventCustom = new cc.Event.EventCustom(event, true);
          eventCustom.setUserData(data);
          this.eventTarget.dispatchEvent(eventCustom);
        }
      };
      return EventHandler;
    }();
    exports.eventHandler = new EventHandler();
    cc._RF.pop();
  }, {} ],
  GameConstants: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5af4dpVBNBMISkKHaX72Ia", "GameConstants");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Config = exports.MapConfig = exports.PlayerColor = void 0;
    var PlayerColor = function() {
      function PlayerColor() {}
      PlayerColor.body = [ cc.color().fromHEX("#f8c574"), cc.color().fromHEX("#c40000"), cc.color().fromHEX("#bc002d"), cc.color().fromHEX("#1b400c"), cc.color().fromHEX("#990000") ];
      PlayerColor.hand = [ cc.color().fromHEX("#f8c574"), cc.color().fromHEX("#16b900"), cc.color().fromHEX("#FFFFFF"), cc.color().fromHEX("#b5c58b"), cc.color().fromHEX("#4c1111") ];
      PlayerColor.back = [ cc.color().fromHEX("#816537"), cc.color().fromHEX("#059300"), cc.color().fromHEX("#c0a73f"), cc.color().fromHEX("#ab7c29"), cc.color().fromHEX("#ffcc00") ];
      return PlayerColor;
    }();
    exports.PlayerColor = PlayerColor;
    var MapConfig = function() {
      function MapConfig() {}
      MapConfig.numObs = 10;
      MapConfig.obsPos = [ {
        x: -100,
        y: 200
      }, {
        x: -132,
        y: 1019
      }, {
        x: 441,
        y: 15
      }, {
        x: 607,
        y: -333
      }, {
        x: 115,
        y: -231
      }, {
        x: 19,
        y: 449
      }, {
        x: 1004,
        y: -876
      }, {
        x: -1407,
        y: 1113
      }, {
        x: -999,
        y: 1
      }, {
        x: -12,
        y: 1397
      } ];
      MapConfig.width = 3600;
      MapConfig.height = 3e3;
      MapConfig.mapScale = .1;
      return MapConfig;
    }();
    exports.MapConfig = MapConfig;
    var Config = function() {
      function Config() {}
      Config.IS_ONLINE = true;
      return Config;
    }();
    exports.Config = Config;
    cc._RF.pop();
  }, {} ],
  GameEventType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3110E96GJD4Isb3ZjzGmcC", "GameEventType");
    var GameEventType;
    (function(GameEventType) {
      GameEventType["CONNECTING"] = "connecting";
      GameEventType["CONNECTED"] = "connected";
      GameEventType["DISCONNECTED"] = "disconnected";
      GameEventType["LOGIN_SUCCESS"] = "login_success";
      GameEventType["LOGIN_FAIL"] = "login_fail";
    })(GameEventType || (GameEventType = {}));
    cc._RF.pop();
  }, {} ],
  GameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3e65tkzmNFzaPtYFmIGG61", "GameManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MultiplayerManager_1 = require("../Nakama/MultiplayerManager");
    var EventHandler_1 = require("../Utils/EventHandler");
    var SceneChanger_1 = require("../General/SceneChanger");
    var MatchManager_1 = require("../Match/Logic/MatchManager");
    var UserInfo_1 = require("./UserInfo");
    var NakamaManager_1 = require("../Nakama/NakamaManager");
    var GameManager = function() {
      function GameManager() {
        this.VictoriesRequiredToWin = 3;
        this.playersWins = [];
        this.winner = 0;
        this.userInfo = new UserInfo_1.UserInfo();
      }
      GameManager.init = function() {
        GameManager.instance = new GameManager();
        EventHandler_1.eventHandler.on(NakamaManager_1.default.OnLoginSuccess, function() {
          GameManager.instance.userInfo = new UserInfo_1.UserInfo(NakamaManager_1.default.instance.session.user_id);
        });
        EventHandler_1.eventHandler.on(MultiplayerManager_1.default.OnMatchJoin, GameManager.instance.joinedMatch.bind(GameManager.instance));
        EventHandler_1.eventHandler.on(MultiplayerManager_1.default.OnMatchLeave, GameManager.instance.leavedMatch.bind(GameManager.instance));
      };
      GameManager.prototype.onDestroy = function() {};
      GameManager.prototype.joinedMatch = function() {
        cc.log("GameManager", this);
        cc.log("instance", GameManager.instance);
        this.resetPlayerWins();
        this.goToLobby();
      };
      GameManager.prototype.leavedMatch = function() {
        this.goToHome();
      };
      GameManager.prototype.resetPlayerWins = function() {
        cc.log("ResetPlayerWins");
        this.playersWins = new Array(4);
      };
      GameManager.prototype.goToHome = function() {
        SceneChanger_1.default.instance.loadHomeScene();
      };
      GameManager.prototype.goToLobby = function() {
        MatchManager_1.MatchManager.getInstance().newMatch();
      };
      GameManager.instance = null;
      return GameManager;
    }();
    exports.default = GameManager;
    cc._RF.pop();
  }, {
    "../General/SceneChanger": "SceneChanger",
    "../Match/Logic/MatchManager": "MatchManager",
    "../Nakama/MultiplayerManager": "MultiplayerManager",
    "../Nakama/NakamaManager": "NakamaManager",
    "../Utils/EventHandler": "EventHandler",
    "./UserInfo": "UserInfo"
  } ],
  HomeScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "HomeScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MatchManager_1 = require("../Match/Logic/MatchManager");
    var MultiplayerManager_1 = require("../Nakama/MultiplayerManager");
    var GameConstants_1 = require("./GameConstants");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HomeScene = function(_super) {
      __extends(HomeScene, _super);
      function HomeScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.buttonPlayNow = null;
        _this.avatar = null;
        _this.playerName = null;
        _this.playerLevel = null;
        return _this;
      }
      HomeScene.prototype.start = function() {
        this.buttonPlayNow.node.on("click", this.onPlayNow, this);
        this.playerName.string = "Tien No Mo Non";
        this.playerLevel.string = "10";
      };
      HomeScene.prototype.onPlayNow = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!GameConstants_1.Config.IS_ONLINE) return [ 3, 2 ];
              return [ 4, MultiplayerManager_1.default.instance.joinMatchAsync() ];

             case 1:
              _a.sent();
              return [ 3, 3 ];

             case 2:
              MatchManager_1.MatchManager.getInstance().newMatch();
              _a.label = 3;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Button) ], HomeScene.prototype, "buttonPlayNow", void 0);
      __decorate([ property(cc.Sprite) ], HomeScene.prototype, "avatar", void 0);
      __decorate([ property(cc.Label) ], HomeScene.prototype, "playerName", void 0);
      __decorate([ property(cc.Label) ], HomeScene.prototype, "playerLevel", void 0);
      HomeScene = __decorate([ ccclass ], HomeScene);
      return HomeScene;
    }(cc.Component);
    exports.default = HomeScene;
    cc._RF.pop();
  }, {
    "../Match/Logic/MatchManager": "MatchManager",
    "../Nakama/MultiplayerManager": "MultiplayerManager",
    "./GameConstants": "GameConstants"
  } ],
  Initializer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2a6fNcTG9NZ6ekWYvYZJCZ", "Initializer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneChanger_1 = require("./General/SceneChanger");
    var NakamaManager_1 = require("./Nakama/NakamaManager");
    var MultiplayerManager_1 = require("./Nakama/MultiplayerManager");
    var GameManager_1 = require("./Game/GameManager");
    var NakamaAutoLogin_1 = require("./Nakama/NakamaAutoLogin");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Initializer = function(_super) {
      __extends(Initializer, _super);
      function Initializer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Initializer.prototype.start = function() {
        SceneChanger_1.default.init();
        NakamaManager_1.default.init();
        MultiplayerManager_1.default.init();
        GameManager_1.default.init();
        NakamaAutoLogin_1.default.init();
      };
      Initializer = __decorate([ ccclass ], Initializer);
      return Initializer;
    }(cc.Component);
    exports.default = Initializer;
    cc._RF.pop();
  }, {
    "./Game/GameManager": "GameManager",
    "./General/SceneChanger": "SceneChanger",
    "./Nakama/MultiplayerManager": "MultiplayerManager",
    "./Nakama/NakamaAutoLogin": "NakamaAutoLogin",
    "./Nakama/NakamaManager": "NakamaManager"
  } ],
  LocalStorageKeys: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cdfcdz0rd1PBaxBVY18T0Ug", "LocalStorageKeys");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LocalStorageKeys = function() {
      function LocalStorageKeys() {}
      LocalStorageKeys.DeviceId = "DeviceId";
      return LocalStorageKeys;
    }();
    exports.default = LocalStorageKeys;
    cc._RF.pop();
  }, {} ],
  MatchManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb137GOq91HQqvheWSyHXPY", "MatchManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MatchManager = void 0;
    var MatchScene_1 = require("../MatchScene");
    var MatchNetwork_1 = require("./MatchNetwork");
    var OperationCode_1 = require("../../Nakama/OperationCode");
    var SceneChanger_1 = require("../../General/SceneChanger");
    var PlayerLogic_1 = require("./PlayerLogic");
    var GameManager_1 = require("../../Game/GameManager");
    var MatchManager = function() {
      function MatchManager() {
        this.matchScene = null;
        this.network = null;
      }
      MatchManager.getInstance = function() {
        this.instance || (this.instance = new MatchManager());
        return this.instance;
      };
      MatchManager.prototype.newMatch = function() {
        this.playerLogicsMap = new Map();
        this.mainPlayerLogic = new PlayerLogic_1.PlayerLogic();
        SceneChanger_1.default.instance.loadMatchScene();
        this.network = new MatchNetwork_1.MatchNetwork(this);
        this.network.subscribeListener();
      };
      MatchManager.prototype.setScene = function(scene) {
        this.matchScene = scene;
      };
      MatchManager.prototype.inMatch = function() {
        return this.matchScene instanceof MatchScene_1.default;
      };
      MatchManager.prototype.onReceiveNewPlayerJoin = function(pk) {
        cc.log("NEW PLAYER JOIN, ID: ", pk.userID);
        this.createNewPlayer(pk.userID);
      };
      MatchManager.prototype.createNewPlayer = function(id) {
        var playerLogic = new PlayerLogic_1.PlayerLogic(id);
        this.playerLogicsMap.set(id, playerLogic);
        this.matchScene.newPlayerJoin(id);
      };
      MatchManager.prototype.getPlayerLogic = function(id) {
        if (!this.playerLogicsMap.has(id)) return null;
        return this.playerLogicsMap.get(id);
      };
      MatchManager.prototype.getMainPlayerLogic = function() {
        return this.mainPlayerLogic;
      };
      MatchManager.prototype.sendUpdatePlayerPos = function(x, y, angle) {
        var data = {
          x: x,
          y: y,
          angle: angle,
          userID: GameManager_1.default.instance.userInfo.userId
        };
        this.network.send(OperationCode_1.Code.PlayerPosition, data);
      };
      MatchManager.prototype.onReceivePlayerUpdatePos = function(pk) {
        if (pk.userID === GameManager_1.default.instance.userInfo.userId) return;
        this.updatePlayerPos(pk.userID, pk.x, pk.y, pk.angle);
      };
      MatchManager.prototype.updatePlayerPos = function(id, x, y, angle) {
        this.playerLogicsMap.has(id) || this.createNewPlayer(id);
        var playerLogic = this.playerLogicsMap.get(id);
        playerLogic.setPosition(x, y);
        playerLogic.setRotation(angle);
        this.matchScene.updatePlayerPos(id, x, y, angle);
      };
      MatchManager.prototype.updateMainPlayerPos = function(x, y, angle) {
        this.mainPlayerLogic.setPosition(x, y);
        this.mainPlayerLogic.setRotation(angle);
        this.matchScene.updateMyPlayerPos(x, y);
      };
      MatchManager.prototype.sendFire = function(x, y, angle) {
        var data = {
          x: x,
          y: y,
          angle: angle,
          userID: GameManager_1.default.instance.userInfo.userId
        };
        this.network.send(OperationCode_1.Code.BulletFire, data);
      };
      MatchManager.prototype.onReceiveFire = function(pk) {
        pk.userID !== GameManager_1.default.instance.userInfo.userId && this.matchScene.onFire(pk.x, pk.y, pk.angle);
      };
      MatchManager.prototype.sendPlayerEquip = function(isEquip) {
        var data = {
          isEquip: isEquip,
          userID: GameManager_1.default.instance.userInfo.userId
        };
        this.network.send(OperationCode_1.Code.PlayerEquip, data);
      };
      MatchManager.prototype.onReceivePlayerEquip = function(pk) {
        pk.userID !== GameManager_1.default.instance.userInfo.userId && this.updatePlayerEquip(pk.userID, pk.isEquip);
      };
      MatchManager.prototype.updatePlayerEquip = function(id, isEquip) {
        this.playerLogicsMap.has(id) || this.createNewPlayer(id);
        this.playerLogicsMap.get(id).setEquip(isEquip);
        this.matchScene.onPlayerEquip(id, isEquip);
      };
      MatchManager.prototype.onReceiveDied = function(userId) {
        userId !== GameManager_1.default.instance.userInfo.userId ? this.matchScene.onDied(userId) : this.matchScene.onMainPlayerDied();
      };
      return MatchManager;
    }();
    exports.MatchManager = MatchManager;
    cc._RF.pop();
  }, {
    "../../Game/GameManager": "GameManager",
    "../../General/SceneChanger": "SceneChanger",
    "../../Nakama/OperationCode": "OperationCode",
    "../MatchScene": "MatchScene",
    "./MatchNetwork": "MatchNetwork",
    "./PlayerLogic": "PlayerLogic"
  } ],
  MatchNetwork: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4bbf7bENBJApYC5/zj+rngY", "MatchNetwork");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MatchNetwork = void 0;
    var NakamaManager_1 = require("../../Nakama/NakamaManager");
    var MultiplayerManager_1 = require("../../Nakama/MultiplayerManager");
    var OperationCode_1 = require("../../Nakama/OperationCode");
    var GameConstants_1 = require("../../Game/GameConstants");
    var MatchNetwork = function() {
      function MatchNetwork(mgr) {
        this.mgr = null;
        this.mgr = mgr;
      }
      MatchNetwork.prototype.subscribeListener = function() {
        var _this = this;
        if (!GameConstants_1.Config.IS_ONLINE) return;
        NakamaManager_1.default.instance.socket.onmatchdata = function(matchData) {
          _this.onReceivePacket(matchData.op_code, matchData.data);
        };
      };
      MatchNetwork.prototype.onReceivePacket = function(code, data) {
        if (!this.mgr.inMatch()) return;
        switch (code) {
         case OperationCode_1.Code.PlayerJoined:
          this.mgr.onReceiveNewPlayerJoin(data);
          break;

         case OperationCode_1.Code.PlayerPosition:
          this.mgr.onReceivePlayerUpdatePos(data);
          break;

         case OperationCode_1.Code.PlayerEquip:
          this.mgr.onReceivePlayerEquip(data);
          break;

         case OperationCode_1.Code.BulletFire:
          this.mgr.onReceiveFire(data);
        }
      };
      MatchNetwork.prototype.send = function(code, data) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!GameConstants_1.Config.IS_ONLINE) return [ 2 ];
              return [ 4, MultiplayerManager_1.default.instance.send(code, data) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      return MatchNetwork;
    }();
    exports.MatchNetwork = MatchNetwork;
    cc._RF.pop();
  }, {
    "../../Game/GameConstants": "GameConstants",
    "../../Nakama/MultiplayerManager": "MultiplayerManager",
    "../../Nakama/NakamaManager": "NakamaManager",
    "../../Nakama/OperationCode": "OperationCode"
  } ],
  MatchScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34700T+IotHdqfgXSMJS6j2", "MatchScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Obstacle_1 = require("./Obstacle/Obstacle");
    var Player_1 = require("./Player");
    var Bullet_1 = require("./MapObject/Bullet");
    var MatchManager_1 = require("./Logic/MatchManager");
    var GameConstants_1 = require("../Game/GameConstants");
    var MiniMap_1 = require("./MiniMap");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MatchScene = function(_super) {
      __extends(MatchScene, _super);
      function MatchScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isUp = false;
        _this.isDown = false;
        _this.isLeft = false;
        _this.isRight = false;
        _this.vel = 200;
        _this.bushPrefab = null;
        _this.playerPrefab = null;
        _this.bulletPrefab = null;
        _this.map = null;
        _this.mapGrid = null;
        _this.camera = null;
        _this.hud = null;
        _this.miniMapNode = null;
        _this.myHpProgress = null;
        _this.mainPlayerNode = null;
        _this.mainPlayer = null;
        _this.playersMap = new Map();
        _this.bullets = [];
        _this.obstacles = [];
        _this.miniMap = null;
        return _this;
      }
      MatchScene.prototype.onLoad = function() {
        this.map.width = GameConstants_1.MapConfig.width;
        this.map.height = GameConstants_1.MapConfig.height;
        this.camera.width = this.node.width;
        this.camera.height = this.node.height;
        this.drawMapGrid();
        var ctx = this.hud.getComponent(cc.Graphics);
        ctx.rect(this.miniMapNode.x - this.miniMapNode.width / 2, this.miniMapNode.y - this.miniMapNode.height / 2, this.miniMapNode.width, this.miniMapNode.height);
        ctx.stroke();
        this.mainPlayer = this.mainPlayerNode.getComponent(Player_1.default);
        this.genObstacles();
        this.miniMap = this.miniMapNode.getComponent(MiniMap_1.default);
        this.miniMap.init(this.bushPrefab);
      };
      MatchScene.prototype.start = function() {
        MatchManager_1.MatchManager.getInstance().setScene(this);
        var playerPosInValid = false, randX, randY;
        do {
          playerPosInValid = false;
          randX = (Math.random() - .5) * this.map.width;
          randY = (Math.random() - .5) * this.map.height;
          for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
            var obs = _a[_i];
            obs.checkCollisionCircle(28, randX, randY) && (playerPosInValid = true);
          }
        } while (playerPosInValid);
        MatchManager_1.MatchManager.getInstance().updateMainPlayerPos(randX, randY, 0);
        MatchManager_1.MatchManager.getInstance().sendUpdatePlayerPos(this.mainPlayerNode.x, this.mainPlayerNode.y, this.mainPlayerNode.angle);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.camera.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.camera.on(cc.Node.EventType.MOUSE_DOWN, this.onClick, this);
        this.camera.on(cc.Node.EventType.MOUSE_WHEEL, this.onScroll, this);
      };
      MatchScene.prototype.onKeyDown = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.a:
          this.isLeft = true;
          break;

         case cc.macro.KEY.s:
          this.isDown = true;
          break;

         case cc.macro.KEY.d:
          this.isRight = true;
          break;

         case cc.macro.KEY.w:
          this.isUp = true;
          break;

         case cc.macro.KEY.f:
          this.toggleMainPlayerEquip();
          MatchManager_1.MatchManager.getInstance().sendPlayerEquip(this.mainPlayer.isEquip);
          break;

         case cc.macro.KEY.t:
          MatchManager_1.MatchManager.getInstance().createNewPlayer("123");
        }
      };
      MatchScene.prototype.onKeyUp = function(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.a:
          this.isLeft = false;
          break;

         case cc.macro.KEY.s:
          this.isDown = false;
          break;

         case cc.macro.KEY.d:
          this.isRight = false;
          break;

         case cc.macro.KEY.w:
          this.isUp = false;
        }
      };
      MatchScene.prototype.onMouseMove = function(event) {
        var dx = event.getLocationX() - this.camera.width / 2;
        var dy = event.getLocationY() - this.camera.height / 2;
        var angle = 180 * Math.atan(-dx / dy) / Math.PI;
        dy < 0 && (angle = 180 + angle);
        this.mainPlayerNode.angle = angle;
      };
      MatchScene.prototype.onClick = function(event) {
        switch (event.getButton()) {
         case cc.Event.EventMouse.BUTTON_LEFT:
          this.mainPlayer.fire();
        }
      };
      MatchScene.prototype.onScroll = function(event) {
        event.getScrollY() > 0 ? this.zoomIn() : this.zoomOut();
      };
      MatchScene.prototype.zoomOut = function() {
        if (this.map.scale < 1 / 8) return;
        this.map.scale /= 2;
      };
      MatchScene.prototype.zoomIn = function() {
        if (this.map.scale >= 1) return;
        this.map.scale *= 2;
      };
      MatchScene.prototype.drawMapGrid = function() {
        this.mapGrid.zIndex = -2;
        var ctx = this.mapGrid.getComponent(cc.Graphics);
        var start = -GameConstants_1.MapConfig.width / 2;
        while (start < GameConstants_1.MapConfig.width / 2) {
          start += 300;
          ctx.moveTo(start, -GameConstants_1.MapConfig.height / 2);
          ctx.lineTo(start, GameConstants_1.MapConfig.height / 2);
          ctx.stroke();
        }
        start = -GameConstants_1.MapConfig.height / 2;
        while (start < GameConstants_1.MapConfig.height / 2) {
          start += 300;
          ctx.moveTo(-GameConstants_1.MapConfig.width / 2, start);
          ctx.lineTo(GameConstants_1.MapConfig.width / 2, start);
          ctx.stroke();
        }
      };
      MatchScene.prototype.genObstacles = function() {
        for (var i = 0; i < GameConstants_1.MapConfig.numObs; i++) {
          var node = cc.instantiate(this.bushPrefab);
          this.map.addChild(node);
          this.obstacles.push(node.getComponent(Obstacle_1.default));
          node.setPosition(GameConstants_1.MapConfig.obsPos[i].x, GameConstants_1.MapConfig.obsPos[i].y);
        }
      };
      MatchScene.prototype.getBullet = function() {
        for (var _i = 0, _a = this.bullets; _i < _a.length; _i++) {
          var bullet_1 = _a[_i];
          if (bullet_1.isAvailable()) return bullet_1;
        }
        var node = cc.instantiate(this.bulletPrefab);
        this.map.addChild(node, -1);
        var bullet = node.getComponent(Bullet_1.default);
        this.bullets.push(bullet);
        return bullet;
      };
      MatchScene.prototype.newPlayerJoin = function(id) {
        if (this.playersMap.has(id)) return;
        cc.log("Create new player, id:", id);
        var player = cc.instantiate(this.playerPrefab);
        this.map.addChild(player);
        this.playersMap.set(id, player.getComponent(Player_1.default));
      };
      MatchScene.prototype.updateMyPlayerPos = function(x, y) {
        this.mainPlayerNode.setPosition(x, y);
        this.miniMap.updateMyPlayerPos(x, y);
      };
      MatchScene.prototype.updatePlayerPos = function(id, x, y, angle) {
        this.playersMap.has(id) || MatchManager_1.MatchManager.getInstance().createNewPlayer(id);
        this.playersMap.get(id).node.setPosition(x, y);
        this.playersMap.get(id).node.angle = angle;
      };
      MatchScene.prototype.onFire = function(x, y, angle) {
        var bullet = this.getBullet();
        bullet.setPosition(x, y);
        bullet.setAngle(angle);
        bullet.fire();
      };
      MatchScene.prototype.toggleMainPlayerEquip = function() {
        this.mainPlayer.toggleEquipGun();
      };
      MatchScene.prototype.onPlayerEquip = function(id, isEquip) {
        this.playersMap.has(id) || MatchManager_1.MatchManager.getInstance().createNewPlayer(id);
        this.playersMap.get(id).setEquipGun(isEquip);
      };
      MatchScene.prototype.onMainPlayerDied = function() {
        this.mainPlayer.died();
      };
      MatchScene.prototype.onDied = function(id) {
        if (!this.playersMap.has(id)) return;
        this.playersMap.get(id).died();
        this.playersMap.delete(id);
      };
      MatchScene.prototype.update = function(dt) {
        var _this = this;
        this.moveMainPlayer(dt);
        this.bullets.forEach(function(e) {
          if (!e.isHit) {
            e.updateFly(dt);
            _this.checkHitPlayer(e);
            _this.checkHitObstacle(e);
          }
        });
      };
      MatchScene.prototype.moveMainPlayer = function(dt) {
        var newX = this.mainPlayerNode.x, newY = this.mainPlayerNode.y;
        if (this.isLeft && this.isUp) {
          newX -= this.vel / 1.4 * dt;
          newY += this.vel / 1.4 * dt;
        } else if (this.isLeft && this.isDown) {
          newX -= this.vel / 1.4 * dt;
          newY -= this.vel / 1.4 * dt;
        } else if (this.isRight && this.isUp) {
          newX += this.vel / 1.4 * dt;
          newY += this.vel / 1.4 * dt;
        } else if (this.isRight && this.isDown) {
          newX += this.vel / 1.4 * dt;
          newY -= this.vel / 1.4 * dt;
        } else this.isLeft && this.isRight || this.isUp && this.isDown || (this.isLeft ? newX -= this.vel * dt : this.isRight ? newX += this.vel * dt : this.isUp ? newY += this.vel * dt : this.isDown && (newY -= this.vel * dt));
        for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
          var obs = _a[_i];
          if (obs.checkCollisionCircle(28, newX, newY)) if (obs.checkCollisionCircle(28, this.mainPlayerNode.x, newY)) {
            if (obs.checkCollisionCircle(28, newX, this.mainPlayerNode.y)) return;
            newY = this.mainPlayerNode.y;
          } else newX = this.mainPlayerNode.x;
        }
        MatchManager_1.MatchManager.getInstance().sendUpdatePlayerPos(newX, newY, this.mainPlayerNode.angle);
        MatchManager_1.MatchManager.getInstance().updateMainPlayerPos(newX, newY, this.mainPlayerNode.angle);
        this.camera.x = this.mainPlayerNode.x;
        this.camera.y = this.mainPlayerNode.y;
        this.hud.node.x = this.mainPlayerNode.x;
        this.hud.node.y = this.mainPlayerNode.y;
      };
      MatchScene.prototype.checkHitPlayer = function(bullet) {
        if (this.mainPlayer.checkCollisionPoint(bullet.node.x, bullet.node.y)) {
          this.mainPlayer.hit(bullet.damage);
          this.myHpProgress.progress = this.mainPlayer.getHpRatio();
          bullet.hit();
          return true;
        }
        this.playersMap.forEach(function(e) {
          if (e.checkCollisionPoint(bullet.node.x, bullet.node.y)) {
            e.hit(bullet.damage);
            bullet.hit();
            return true;
          }
        });
        return false;
      };
      MatchScene.prototype.checkHitObstacle = function(bullet) {
        this.obstacles.forEach(function(e) {
          if (e.checkCollisionPoint(bullet.node.x, bullet.node.y)) {
            e.hit();
            bullet.hit();
            return true;
          }
        });
        return false;
      };
      MatchScene.prototype.onDestroy = function() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.camera.off(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.camera.off(cc.Node.EventType.MOUSE_DOWN, this.onClick, this);
        this.camera.off(cc.Node.EventType.MOUSE_WHEEL, this.onScroll, this);
      };
      __decorate([ property ], MatchScene.prototype, "vel", void 0);
      __decorate([ property(cc.Prefab) ], MatchScene.prototype, "bushPrefab", void 0);
      __decorate([ property(cc.Prefab) ], MatchScene.prototype, "playerPrefab", void 0);
      __decorate([ property(cc.Prefab) ], MatchScene.prototype, "bulletPrefab", void 0);
      __decorate([ property(cc.Node) ], MatchScene.prototype, "map", void 0);
      __decorate([ property(cc.Node) ], MatchScene.prototype, "mapGrid", void 0);
      __decorate([ property(cc.Node) ], MatchScene.prototype, "camera", void 0);
      __decorate([ property(cc.Layout) ], MatchScene.prototype, "hud", void 0);
      __decorate([ property(cc.Node) ], MatchScene.prototype, "miniMapNode", void 0);
      __decorate([ property(cc.ProgressBar) ], MatchScene.prototype, "myHpProgress", void 0);
      __decorate([ property(cc.Node) ], MatchScene.prototype, "mainPlayerNode", void 0);
      MatchScene = __decorate([ ccclass ], MatchScene);
      return MatchScene;
    }(cc.Component);
    exports.default = MatchScene;
    cc._RF.pop();
  }, {
    "../Game/GameConstants": "GameConstants",
    "./Logic/MatchManager": "MatchManager",
    "./MapObject/Bullet": "Bullet",
    "./MiniMap": "MiniMap",
    "./Obstacle/Obstacle": "Obstacle",
    "./Player": "Player"
  } ],
  MiniMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e35aJ9veZCyJM/USjg5V8n", "MiniMap");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConstants_1 = require("../Game/GameConstants");
    var Obstacle_1 = require("./Obstacle/Obstacle");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MiniMap = function(_super) {
      __extends(MiniMap, _super);
      function MiniMap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.grid = null;
        _this.mainPlayer = null;
        _this.playerColor = GameConstants_1.PlayerColor.body[0];
        _this.obstacles = [];
        return _this;
      }
      MiniMap.prototype.onLoad = function() {
        this.bg.node.width = GameConstants_1.MapConfig.width;
        this.bg.node.height = GameConstants_1.MapConfig.height;
        this.bg.node.scale = GameConstants_1.MapConfig.mapScale;
      };
      MiniMap.prototype.init = function(bushPrefab) {
        this.drawMapGrid();
        this.bushPrefab = bushPrefab;
        this.genObstacles();
        var ctx = this.mainPlayer.getComponent(cc.Graphics);
        ctx.fillColor = this.playerColor;
        ctx.strokeColor = this.playerColor;
        ctx.circle(0, 0, 28);
        ctx.fill();
        ctx.stroke();
        this.mainPlayer.scale = 2 * GameConstants_1.MapConfig.mapScale;
      };
      MiniMap.prototype.drawMapGrid = function() {
        var ctx = this.grid.getComponent(cc.Graphics);
        ctx.lineWidth /= GameConstants_1.MapConfig.mapScale;
        var start = -GameConstants_1.MapConfig.width / 2;
        while (start < GameConstants_1.MapConfig.width / 2) {
          start += 300;
          ctx.moveTo(start, -GameConstants_1.MapConfig.height / 2);
          ctx.lineTo(start, GameConstants_1.MapConfig.height / 2);
          ctx.stroke();
        }
        start = -GameConstants_1.MapConfig.height / 2;
        while (start < GameConstants_1.MapConfig.height / 2) {
          start += 300;
          ctx.moveTo(-GameConstants_1.MapConfig.width / 2, start);
          ctx.lineTo(GameConstants_1.MapConfig.width / 2, start);
          ctx.stroke();
        }
      };
      MiniMap.prototype.genObstacles = function() {
        for (var i = 0; i < GameConstants_1.MapConfig.numObs; i++) {
          var node = cc.instantiate(this.bushPrefab);
          this.bg.node.addChild(node);
          this.obstacles.push(node.getComponent(Obstacle_1.default));
          node.setPosition(GameConstants_1.MapConfig.obsPos[i].x, GameConstants_1.MapConfig.obsPos[i].y);
        }
      };
      MiniMap.prototype.updateMyPlayerPos = function(x, y) {
        this.bg.node.x = -x * GameConstants_1.MapConfig.mapScale;
        this.bg.node.y = -y * GameConstants_1.MapConfig.mapScale;
      };
      MiniMap.prototype.start = function() {};
      MiniMap.prototype.onDestroy = function() {};
      __decorate([ property(cc.Sprite) ], MiniMap.prototype, "bg", void 0);
      __decorate([ property(cc.Node) ], MiniMap.prototype, "grid", void 0);
      __decorate([ property(cc.Node) ], MiniMap.prototype, "mainPlayer", void 0);
      MiniMap = __decorate([ ccclass ], MiniMap);
      return MiniMap;
    }(cc.Component);
    exports.default = MiniMap;
    cc._RF.pop();
  }, {
    "../Game/GameConstants": "GameConstants",
    "./Obstacle/Obstacle": "Obstacle"
  } ],
  MultiplayerManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "625cfUh5UNFdKpDxBJ/oXA/", "MultiplayerManager");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NakamaManager_1 = require("./NakamaManager");
    var EventHandler_1 = require("../Utils/EventHandler");
    var RPCs_1 = require("../Utils/RPCs");
    var MultiplayerManager = function() {
      function MultiplayerManager() {
        this.tickRate = 5;
        this.sendRate = 1 / this.tickRate;
        this.logFormat = "{0} with code {1}:\n{2}";
        this.enableLog = false;
        this.match = null;
      }
      MultiplayerManager.prototype.self = function() {
        return null == this.match ? null : this.match.self;
      };
      MultiplayerManager.prototype.isOnMatch = function() {
        return null != this.match;
      };
      MultiplayerManager.init = function() {
        MultiplayerManager.instance = new MultiplayerManager();
        MultiplayerManager.instance.interval = setInterval(MultiplayerManager.instance.localTickPassed, 1e3 * MultiplayerManager.instance.sendRate);
      };
      MultiplayerManager.prototype.localTickPassed = function() {
        EventHandler_1.eventHandler.dispatchEvent(MultiplayerManager.OnLocalTick);
      };
      MultiplayerManager.prototype.joinMatchAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
          var rpcResult, result, matchId, _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              EventHandler_1.eventHandler.on(NakamaManager_1.default.OnDisconnected, this.disconnected.bind(this));
              cc.log("NakamaManager:", NakamaManager_1.default.instance);
              return [ 4, NakamaManager_1.default.instance.sendRPC(RPCs_1.default.JoinOrCreateMatchRpc) ];

             case 1:
              rpcResult = _b.sent();
              cc.log("rpcResult:", JSON.stringify(rpcResult));
              result = rpcResult.payload;
              matchId = result.matchId;
              cc.log("matchId", matchId);
              _a = this;
              return [ 4, NakamaManager_1.default.instance.socket.joinMatch(matchId) ];

             case 2:
              _a.match = _b.sent();
              cc.log("match:", this.match);
              EventHandler_1.eventHandler.dispatchEvent(MultiplayerManager.OnMatchJoin);
              return [ 2 ];
            }
          });
        });
      };
      MultiplayerManager.prototype.disconnected = function() {
        EventHandler_1.eventHandler.off(NakamaManager_1.default.OnDisconnected, this.disconnected);
        this.match = null;
        EventHandler_1.eventHandler.dispatchEvent(MultiplayerManager.OnMatchLeave);
      };
      MultiplayerManager.prototype.leaveMatchAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              EventHandler_1.eventHandler.off(NakamaManager_1.default.OnDisconnected, this.disconnected);
              return [ 4, NakamaManager_1.default.instance.socket.leaveMatch(this.match.match_id) ];

             case 1:
              _a.sent();
              this.match = null;
              EventHandler_1.eventHandler.dispatchEvent(MultiplayerManager.OnMatchLeave);
              return [ 2 ];
            }
          });
        });
      };
      MultiplayerManager.prototype.send = function(code, data) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (null == this.match) return [ 2 ];
              this.enableLog && cc.log(MultiplayerManager.SendingDataLog, code, data);
              return [ 4, NakamaManager_1.default.instance.socket.sendMatchState(this.match.match_id, code, data) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      MultiplayerManager.prototype.receive = function(newState) {
        if (this.enableLog) {
          var encoder = new TextEncoder();
          var json = encoder.encode(newState.State);
          cc.log(MultiplayerManager.ReceivedDataLog, newState.OpCode, json);
        }
      };
      MultiplayerManager.OnLocalTick = "MultiplayerManager.OnLocalTick";
      MultiplayerManager.OnMatchLeave = "MultiplayerManager.OnMatchLeave";
      MultiplayerManager.OnMatchJoin = "MultiplayerManager.OnMatchJoin";
      MultiplayerManager.SendingDataLog = "Sending data";
      MultiplayerManager.ReceivedDataLog = "Received data";
      MultiplayerManager.instance = null;
      return MultiplayerManager;
    }();
    exports.default = MultiplayerManager;
    cc._RF.pop();
  }, {
    "../Utils/EventHandler": "EventHandler",
    "../Utils/RPCs": "RPCs",
    "./NakamaManager": "NakamaManager"
  } ],
  MultiplayerMessage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b983zKtSNA77dB/Y8Ms+iI", "MultiplayerMessage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MultiplayerMessage = function() {
      function MultiplayerMessage() {
        this.json = null;
        this.bytes = null;
      }
      MultiplayerMessage.prototype.MultiplayerMessage = function(matchState) {
        this.dataCode = matchState.opCode;
        if (null != matchState.UserPresence) {
          this.userId = matchState.userPresence.userId;
          this.sessionId = matchState.userPresence.sessionId;
          this.username = matchState.userPresence.username;
        }
        var encoder = new TextEncoder();
        this.bytes = encoder.encode(matchState.State);
        this.json = this.bytes.toString();
      };
      MultiplayerMessage.prototype.getData = function() {};
      MultiplayerMessage.prototype.getBytes = function() {
        return this.bytes;
      };
      return MultiplayerMessage;
    }();
    exports.default = MultiplayerMessage;
    cc._RF.pop();
  }, {} ],
  NakamaAutoLogin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a10a6Gs9JGrJk4DzZuTqTD", "NakamaAutoLogin");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NakamaManager_1 = require("./NakamaManager");
    var EventHandler_1 = require("../Utils/EventHandler");
    var NakamaAutoLogin = function() {
      function NakamaAutoLogin() {
        this.retryTime = 5;
      }
      NakamaAutoLogin.init = function() {
        new NakamaAutoLogin().onLoad();
      };
      NakamaAutoLogin.prototype.onLoad = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              cc.log("NakamaAutoLogin.start");
              EventHandler_1.eventHandler.on(NakamaManager_1.default.OnLoginFail, this.loginFailed.bind(this));
              return [ 4, this.tryLogin() ];

             case 1:
              _a.sent();
              EventHandler_1.eventHandler.on(NakamaManager_1.default.OnLoginSuccess, function() {
                cc.log("Tien log bat event On Login Success");
              });
              return [ 2 ];
            }
          });
        });
      };
      NakamaAutoLogin.prototype.onDestroy = function() {
        EventHandler_1.eventHandler.off(NakamaManager_1.default.OnLoginFail, this.loginFailed);
      };
      NakamaAutoLogin.prototype.tryLogin = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, NakamaManager_1.default.instance.loginWithDeviceId() ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      NakamaAutoLogin.prototype.loginFailed = function() {
        var _this = this;
        setTimeout(function() {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, this.tryLogin() ];

               case 1:
                _a.sent();
                return [ 2 ];
              }
            });
          });
        }, 1e3 * this.retryTime);
      };
      return NakamaAutoLogin;
    }();
    exports.default = NakamaAutoLogin;
    cc._RF.pop();
  }, {
    "../Utils/EventHandler": "EventHandler",
    "./NakamaManager": "NakamaManager"
  } ],
  NakamaConnectionData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40c991GUflGQ5B6xKkKuiLj", "NakamaConnectionData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NakamaConnectionData = function() {
      function NakamaConnectionData(host, port, serverKey, useSSL) {
        void 0 === useSSL && (useSSL = false);
        this.host = "127.0.0.1";
        this.port = "7350";
        this.serverKey = "defaultKey";
        this.useSSL = false;
        this.host = host;
        this.port = port;
        this.serverKey = serverKey;
        this.useSSL = useSSL;
      }
      return NakamaConnectionData;
    }();
    exports.default = NakamaConnectionData;
    cc._RF.pop();
  }, {} ],
  NakamaManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c86bnOmN5LS6jV/ZhMCJXx", "NakamaManager");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var nakama_js_1 = require("@heroiclabs/nakama-js");
    var uuid_1 = require("uuid");
    var NakamaConnectionData_1 = require("./NakamaConnectionData");
    var LocalStorageKeys_1 = require("../Utils/LocalStorageKeys");
    var EventHandler_1 = require("../Utils/EventHandler");
    var NakamaManager = function() {
      function NakamaManager() {
        this.connectionData = new NakamaConnectionData_1.default("survival2d.live", "7350", "defaultkey", true);
        this.client = null;
        this.session = null;
        this.socket = null;
      }
      NakamaManager.prototype.username = function() {
        return null == this.session ? "" : this.session.username;
      };
      NakamaManager.prototype.isLoggedIn = function() {
        return null != this.socket;
      };
      NakamaManager.init = function() {
        cc.log("NakamaManager::init");
        NakamaManager.instance = new NakamaManager();
      };
      NakamaManager.prototype.onApplicationQuit = function() {
        null != this.socket && this.socket.disconnect(true);
      };
      NakamaManager.prototype.loginWithUdid = function() {};
      NakamaManager.prototype.loginWithDeviceId = function() {
        return __awaiter(this, void 0, void 0, function() {
          var deviceId;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.client = new nakama_js_1.Client(this.connectionData.serverKey, this.connectionData.host, this.connectionData.port, this.connectionData.useSSL);
              deviceId = cc.sys.localStorage.getItem(LocalStorageKeys_1.default.DeviceId);
              if (null === deviceId) {
                deviceId = uuid_1.v4();
                cc.sys.localStorage.setItem(LocalStorageKeys_1.default.DeviceId, deviceId);
              }
              return [ 4, this.loginAsync(this.connectionData, this.client.authenticateDevice(deviceId)) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      NakamaManager.prototype.loginWithCustomId = function(customId) {
        this.client = new nakama_js_1.Client(this.connectionData.serverKey, this.connectionData.host, this.connectionData.port);
        this.loginAsync(this.connectionData, this.client.authenticateCustom(customId));
      };
      NakamaManager.prototype.loginAsync = function(connectionData, sessionTask) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            EventHandler_1.eventHandler.dispatchEvent(new cc.Event.EventCustom(NakamaManager.OnConnecting, true));
            sessionTask.then(function(session) {
              _this.session = session;
              _this.socket = _this.client.createSocket(_this.connectionData.useSSL);
              _this.socket.connect(_this.session, true);
              EventHandler_1.eventHandler.dispatchEvent(new cc.Event.EventCustom(NakamaManager.OnLoginSuccess, true));
              cc.log("login thanh cong", _this.session, _this.client);
            }).catch(function(exception) {
              cc.error(exception);
              EventHandler_1.eventHandler.dispatchEvent(new cc.Event.EventCustom(NakamaManager.OnLoginFail, true));
            });
            return [ 2 ];
          });
        });
      };
      NakamaManager.prototype.logOut = function() {
        this.socket.disconnect(true);
      };
      NakamaManager.prototype.connected = function() {
        EventHandler_1.eventHandler.dispatchEvent(new cc.Event.EventCustom(NakamaManager.OnConnected, true));
      };
      NakamaManager.prototype.disconnected = function() {
        EventHandler_1.eventHandler.dispatchEvent(new cc.Event.EventCustom(NakamaManager.OnDisconnected, true));
      };
      NakamaManager.prototype.sendRPC = function(rpc, payload) {
        void 0 === payload && (payload = {});
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (null === this.client || null == this.session) return [ 2, null ];
              return [ 4, this.client.rpc(this.session, rpc, payload) ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      NakamaManager.prototype.onDestroy = function() {
        cc.log("NakamaManager.onDestroy");
      };
      NakamaManager.OnConnecting = "NakamaManager.OnConnecting";
      NakamaManager.OnConnected = "NakamaManager.OnConnected";
      NakamaManager.OnDisconnected = "NakamaManager.OnDisconnected";
      NakamaManager.OnLoginSuccess = "NakamaManager.OnLoginSuccess";
      NakamaManager.OnLoginFail = "NakamaManager.OnLoginFail";
      NakamaManager.instance = null;
      return NakamaManager;
    }();
    exports.default = NakamaManager;
    cc._RF.pop();
  }, {
    "../Utils/EventHandler": "EventHandler",
    "../Utils/LocalStorageKeys": "LocalStorageKeys",
    "./NakamaConnectionData": "NakamaConnectionData",
    "@heroiclabs/nakama-js": 1,
    uuid: 2
  } ],
  Obstacle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b547cm8bFBj7HnJRUfLXaY", "Obstacle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Obstacle = function(_super) {
      __extends(Obstacle, _super);
      function Obstacle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.r = 0;
        return _this;
      }
      Obstacle.prototype.setPosition = function(x, y) {
        this.node.setPosition(x, y);
      };
      Obstacle.prototype.checkCollisionCircle = function(r, x, y) {
        return false;
      };
      Obstacle.prototype.checkCollisionPoint = function(x, y) {
        return false;
      };
      Obstacle.prototype.hit = function() {
        cc.log("bullet hit obstacle");
      };
      Obstacle = __decorate([ ccclass ], Obstacle);
      return Obstacle;
    }(cc.Component);
    exports.default = Obstacle;
    cc._RF.pop();
  }, {} ],
  OperationCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a70d0QTp0dGsrLA0b7UAMJA", "OperationCode");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Code = void 0;
    var Code;
    (function(Code) {
      Code[Code["Players"] = 0] = "Players";
      Code[Code["PlayerJoined"] = 1] = "PlayerJoined";
      Code[Code["PlayerInput"] = 2] = "PlayerInput";
      Code[Code["PlayerWon"] = 3] = "PlayerWon";
      Code[Code["Draw"] = 4] = "Draw";
      Code[Code["ChangeScene"] = 5] = "ChangeScene";
      Code[Code["PlayerPosition"] = 101] = "PlayerPosition";
      Code[Code["PlayerEquip"] = 102] = "PlayerEquip";
      Code[Code["BulletFire"] = 103] = "BulletFire";
    })(Code = exports.Code || (exports.Code = {}));
    cc._RF.pop();
  }, {} ],
  PersistNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8c18de+zs1I6baqXqshNuvx", "PersistNode");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ccclass = cc._decorator.ccclass;
    var PersistNode = function(_super) {
      __extends(PersistNode, _super);
      function PersistNode() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PersistNode.prototype.onLoad = function() {
        cc.game.addPersistRootNode(this.node);
      };
      PersistNode = __decorate([ ccclass ], PersistNode);
      return PersistNode;
    }(cc.Component);
    exports.default = PersistNode;
    cc._RF.pop();
  }, {} ],
  PlayerData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9712pEhZhBbbMJot67X/vO", "PlayerData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PlayerData = void 0;
    var PlayerData = function() {
      function PlayerData(id) {
        this.colorId = 0;
        this.maxHp = 100;
        this.maxBullets = 100;
        void 0 !== id && (this.id = id);
        this.hp = this.maxHp;
      }
      PlayerData.prototype.loadBullet = function() {
        this.nBullets = this.maxBullets;
      };
      PlayerData.prototype.fire = function() {
        this.nBullets--;
        this.nBullets <= 0 && this.loadBullet();
        return true;
      };
      PlayerData.prototype.takeDamage = function(damage) {
        this.hp -= damage;
      };
      PlayerData.prototype.heal = function(hp) {
        this.hp += hp;
        this.hp > this.maxHp && (this.hp = this.maxHp);
      };
      PlayerData.prototype.setHp = function(hp) {
        hp < 0 && (this.hp = 0);
        this.hp = hp > this.maxHp ? this.maxHp : hp;
      };
      PlayerData.prototype.isDead = function() {
        return this.hp <= 0;
      };
      PlayerData.prototype.getHpRatio = function() {
        return this.hp / this.maxHp;
      };
      return PlayerData;
    }();
    exports.PlayerData = PlayerData;
    cc._RF.pop();
  }, {} ],
  PlayerLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01798EDop1BC5cdTpshim90", "PlayerLogic");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PlayerLogic = void 0;
    var PlayerData_1 = require("./PlayerData");
    var PlayerLogic = function() {
      function PlayerLogic(id) {
        void 0 === id && (this.data = new PlayerData_1.PlayerData());
        this.data = new PlayerData_1.PlayerData(id);
      }
      PlayerLogic.prototype.getId = function() {
        return this.data.id;
      };
      PlayerLogic.prototype.setPosition = function(x, y) {
        this.x = x;
        this.y = y;
      };
      PlayerLogic.prototype.setRotation = function(angle) {
        this.angle = angle;
      };
      PlayerLogic.prototype.setEquip = function(bool) {
        this.isEquip = bool;
      };
      return PlayerLogic;
    }();
    exports.PlayerLogic = PlayerLogic;
    cc._RF.pop();
  }, {
    "./PlayerData": "PlayerData"
  } ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3ed7ZDgLhOeo0P8YJBnGlX", "Player");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConstants_1 = require("../Game/GameConstants");
    var MatchScene_1 = require("./MatchScene");
    var PlayerData_1 = require("./Logic/PlayerData");
    var MatchManager_1 = require("./Logic/MatchManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Player = function(_super) {
      __extends(Player, _super);
      function Player() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.body = null;
        _this.leftHand = null;
        _this.rightHand = null;
        _this.backPack = null;
        _this.gun = null;
        _this.r = 28;
        _this.bodyColor = GameConstants_1.PlayerColor.body[0];
        _this.handColor = GameConstants_1.PlayerColor.hand[0];
        _this.backColor = GameConstants_1.PlayerColor.back[0];
        _this.isEquip = false;
        return _this;
      }
      Player.prototype.onLoad = function() {
        this.genPlayer();
        this.data = new PlayerData_1.PlayerData();
      };
      Player.prototype.genPlayer = function() {
        var ctx = this.body.getComponent(cc.Graphics);
        ctx.fillColor = this.bodyColor;
        ctx.strokeColor = this.bodyColor;
        ctx.circle(0, 0, 28);
        ctx.fill();
        ctx.stroke();
        ctx = this.leftHand.getComponent(cc.Graphics);
        ctx.fillColor = this.handColor;
        ctx.circle(0, 0, 10);
        ctx.fill();
        ctx.stroke();
        ctx = this.rightHand.getComponent(cc.Graphics);
        ctx.fillColor = this.handColor;
        ctx.circle(0, 0, 10);
        ctx.fill();
        ctx.stroke();
        ctx = this.backPack.getComponent(cc.Graphics);
        ctx.fillColor = this.backColor;
        ctx.circle(0, 0, 27);
        ctx.fill();
        ctx.stroke();
        this.body.setPosition(0, 0);
        this.leftHand.setPosition(-25, 25);
        this.rightHand.setPosition(25, 25);
        this.backPack.setPosition(0, -10);
        this.gun.node.setPosition(0, 50);
      };
      Player.prototype.start = function() {
        this.gun.node.active = false;
      };
      Player.prototype.checkCollisionPoint = function(x, y) {
        var d2 = (this.node.x - x) * (this.node.x - x) + (this.node.y - y) * (this.node.y - y);
        return d2 <= this.r * this.r;
      };
      Player.prototype.setEquipGun = function(bool) {
        this.isEquip = bool;
        bool ? this.equipGun() : this.unEquipGun();
      };
      Player.prototype.toggleEquipGun = function() {
        this.isEquip = !this.isEquip;
        this.isEquip ? this.equipGun() : this.unEquipGun();
      };
      Player.prototype.equipGun = function() {
        this.gun.node.active = true;
        this.leftHand.setPosition(-10, 50);
        this.rightHand.setPosition(10, 35);
      };
      Player.prototype.unEquipGun = function() {
        this.gun.node.active = false;
        this.leftHand.setPosition(-25, 25);
        this.rightHand.setPosition(25, 25);
      };
      Player.prototype.fire = function() {
        if (this.isEquip) {
          if (this.data.fire()) {
            var dy = Math.cos(this.node.angle * Math.PI / 180) * (this.gun.node.width / 2 + this.gun.node.y);
            var dx = -Math.tan(this.node.angle * Math.PI / 180) * dy;
            var scene = cc.director.getScene();
            scene.getChildByName("Canvas").getComponent(MatchScene_1.default).onFire(this.node.x + dx, this.node.y + dy, this.node.angle);
            MatchManager_1.MatchManager.getInstance().sendFire(this.node.x + dx, this.node.y + dy, this.node.angle);
          }
        } else this.fight();
      };
      Player.prototype.fight = function() {};
      Player.prototype.hit = function(damage) {
        cc.log("DMM bullet hit player");
        this.data.takeDamage(damage);
        this.data.isDead() && this.died();
      };
      Player.prototype.getHpRatio = function() {
        return this.data.getHpRatio();
      };
      Player.prototype.died = function() {
        this.node.removeFromParent();
      };
      Player.prototype.onDestroy = function() {};
      __decorate([ property(cc.Node) ], Player.prototype, "body", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "leftHand", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "rightHand", void 0);
      __decorate([ property(cc.Node) ], Player.prototype, "backPack", void 0);
      __decorate([ property(cc.Sprite) ], Player.prototype, "gun", void 0);
      Player = __decorate([ ccclass ], Player);
      return Player;
    }(cc.Component);
    exports.default = Player;
    cc._RF.pop();
  }, {
    "../Game/GameConstants": "GameConstants",
    "./Logic/MatchManager": "MatchManager",
    "./Logic/PlayerData": "PlayerData",
    "./MatchScene": "MatchScene"
  } ],
  RPCData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d466S/Eu1H0pg+hmmHrs5t", "RPCData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  RPCs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f5759VSStOiLAWRY87a0Pq", "RPCs");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RPCs = function() {
      function RPCs() {}
      RPCs.JoinOrCreateMatchRpc = "JoinOrCreateMatchRpc";
      return RPCs;
    }();
    exports.default = RPCs;
    cc._RF.pop();
  }, {} ],
  SceneChanger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2860hOueRPnJpiLzfyyzTn", "SceneChanger");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventHandler_1 = require("../Utils/EventHandler");
    var NakamaManager_1 = require("../Nakama/NakamaManager");
    var SceneChanger = function() {
      function SceneChanger() {}
      SceneChanger.init = function() {
        cc.log("SceneChanger::init");
        SceneChanger.instance = new SceneChanger();
        EventHandler_1.eventHandler.on(NakamaManager_1.default.OnLoginSuccess, SceneChanger.instance.loadHomeScene.bind(this));
      };
      SceneChanger.prototype.loadHomeScene = function() {
        cc.log("SceneChanger::loadHomeScene");
        cc.director.loadScene("HomeScene");
      };
      SceneChanger.prototype.loadLobbyScene = function() {
        cc.log("SceneChanger::loadLobbyScene");
        cc.director.loadScene("LobbyScene");
      };
      SceneChanger.prototype.loadMatchScene = function() {
        cc.log("SceneChanger::loadMatchScene");
        cc.director.loadScene("MatchScene");
      };
      return SceneChanger;
    }();
    exports.default = SceneChanger;
    cc._RF.pop();
  }, {
    "../Nakama/NakamaManager": "NakamaManager",
    "../Utils/EventHandler": "EventHandler"
  } ],
  UserInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c074d6YXmNEYqoZGeC9rEfS", "UserInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UserInfo = void 0;
    var UserInfo = function() {
      function UserInfo(id) {
        this.userId = void 0 === id ? "0" : id;
      }
      return UserInfo;
    }();
    exports.UserInfo = UserInfo;
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameConstants", "GameManager", "HomeScene", "UserInfo", "SceneChanger", "Initializer", "MatchManager", "MatchNetwork", "PlayerData", "PlayerLogic", "Bullet", "MatchScene", "MiniMap", "Bush", "Obstacle", "Player", "MultiplayerManager", "MultiplayerMessage", "NakamaAutoLogin", "NakamaConnectionData", "NakamaManager", "OperationCode", "RPCData", "EventHandler", "GameEventType", "LocalStorageKeys", "PersistNode", "RPCs" ]);