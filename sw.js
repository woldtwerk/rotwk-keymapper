if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,n)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return d;default:return e(r)}}))).then((e=>{const r=n(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-50dcf2a8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.a9d25ebf.js",revision:"b7b14b15ab23f5eb574a1836d0587575"},{url:"assets/index.b1ae72f9.css",revision:"61d91310b685dba734c49bc19a2718e3"},{url:"assets/vendor.5b0bff46.js",revision:"a546a7f37d67bd212d5759da8e272666"},{url:"index.html",revision:"d43902fcf5b3deb948ff83ca1b265e3e"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"./pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"./pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"5738d39410c517c040c2a3db3f47f277"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
