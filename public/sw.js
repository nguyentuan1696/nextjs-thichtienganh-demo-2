if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>t(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-runtime.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/server/pages/_middleware.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/cOHbTtt8wbIgPQ1MYILU7/_buildManifest.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/cOHbTtt8wbIgPQ1MYILU7/_middlewareManifest.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/cOHbTtt8wbIgPQ1MYILU7/_ssgManifest.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/chunks/main-871f2b8b933aff11.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/chunks/pages/404-3da080f2457dd394.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/chunks/pages/_app-e8c0e894764e7c85.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/chunks/pages/_error-8d1a9f444fa5e39f.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/chunks/pages/bai-hoc/%5B%5B...slug%5D%5D-2dcf9617fb222f23.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/chunks/pages/bai-viet/%5B%5B...slug%5D%5D-e2306e84d988f9bd.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/chunks/pages/index-f078d84bb0c3043a.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/chunks/webpack-bad78d8784d7438a.js",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/css/1571d52e4a3a740b.css",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/_next/static/css/f280ce44ef1113ac.css",revision:"cOHbTtt8wbIgPQ1MYILU7"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/robots.txt",revision:"ce0f95703a83a8f9d81fc7e94a0c6bf3"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
