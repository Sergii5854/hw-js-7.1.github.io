"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/hw-js-7.1.github.io/index.html","0d0c560f4a61eb170668d2b4d138672a"],["/hw-js-7.1.github.io/static/css/main.36539bbc.css","0b5523a90c0ce05cd5a605b3708f07b4"],["/hw-js-7.1.github.io/static/js/main.91285e9e.js","0fd39aff65b612e4564a634c7b42d8b5"],["/hw-js-7.1.github.io/static/media/IMG-here5.6cac8369.png","6cac8369bc44c0d7e59c1e5929f9f0fc"],["/hw-js-7.1.github.io/static/media/Sergij.9fd2f9da.jpg","9fd2f9da7ed851174ba94f3c8b8d4bcb"],["/hw-js-7.1.github.io/static/media/backgroundImage.95384c68.png","95384c68decd57cab69cd3440d7dfda5"],["/hw-js-7.1.github.io/static/media/design-analysis.cb8b9671.png","cb8b967130239c4b812c899dd49c5374"],["/hw-js-7.1.github.io/static/media/free-consultation.4a2254cb.png","4a2254cbe7b3e91d2a3614296a6c8cc8"],["/hw-js-7.1.github.io/static/media/graphic-design.6051d175.png","6051d175888777f289d363a76088da2b"],["/hw-js-7.1.github.io/static/media/img-here.922d76fd.png","922d76fd11111bd700596628de798be7"],["/hw-js-7.1.github.io/static/media/img-here1.77283050.png","772830505aee51895d252671206e28e4"],["/hw-js-7.1.github.io/static/media/img-here2.575a60b8.png","575a60b8feacd542b51ad6e187e8eca2"],["/hw-js-7.1.github.io/static/media/macHeaderAssett.d76a0959.png","d76a0959beb4a404456bcd83de164585"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/hw-js-7.1.github.io/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});