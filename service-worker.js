if(!self.define){let n,e={};const i=(i,s)=>(i=new URL(i+".js",s).href,e[i]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=i,n.onload=e,document.head.appendChild(n)}else n=i,importScripts(i),e()})).then((()=>{let n=e[i];if(!n)throw new Error(`Module ${i} didn’t register its module`);return n})));self.define=(s,r)=>{const o=n||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let l={};const c=n=>i(n,o),f={module:{uri:o},exports:l,require:c};e[o]=Promise.all(s.map((n=>f[n]||c(n)))).then((n=>(r(...n),l)))}}define(["./workbox-49d4ab5b"],(function(n){"use strict";n.setCacheNameDetails({prefix:"quasar-barcode"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"barcode-scanner-beep-sound.mp3",revision:"0601a26fb337ea6254694c14ee4da87f"},{url:"css/230.9c745b96.css",revision:null},{url:"css/327.49ed6480.css",revision:null},{url:"css/41.1f1d2628.css",revision:null},{url:"css/465.94f9004b.css",revision:null},{url:"css/60.9c745b96.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.c7997c93.css",revision:null},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.c5371cfb.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"icons/youtube.png",revision:"34350043f03b705de94fee2c7d16f5a2"},{url:"index.html",revision:"a3da5092dd0738d4f6b8df0c45b2d007"},{url:"js/146.7a9a404a.js",revision:null},{url:"js/230.e8bbcc42.js",revision:null},{url:"js/327.b9893d89.js",revision:null},{url:"js/41.59893ee8.js",revision:null},{url:"js/465.551669c0.js",revision:null},{url:"js/60.1c6dbcb7.js",revision:null},{url:"js/686.bcf7a73f.js",revision:null},{url:"js/app.79a8cae0.js",revision:null},{url:"js/vendor.503e0aa3.js",revision:null},{url:"manifest.json",revision:"b64d33f46c23116d69daeffa62a4de6a"},{url:"qrcode/qrcode-app.png",revision:"0b17bb3d904e95bb12a3a707a3a396bd"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
