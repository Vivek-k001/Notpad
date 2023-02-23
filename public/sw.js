if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise(s => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let c = {};
    const o = e => a(e, t),
      r = { module: { uri: t }, exports: c, require: o };
    s[t] = Promise.all(n.map(e => r[e] || o(e))).then(e => (i(...e), c));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/CNAME", revision: "befa44374d79f5503ed0091d0b12fa98" },
        {
          url: "/_next/static/_nL3CWca8wh0KRHQoB4qr/_buildManifest.js",
          revision: "0024d9ce7359d153222537a7b49d5e5d",
        },
        {
          url: "/_next/static/_nL3CWca8wh0KRHQoB4qr/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/292-9744f304dd87dd7f.js",
          revision: "9744f304dd87dd7f",
        },
        {
          url: "/_next/static/chunks/d2094a0f-c06700a8ededfd23.js",
          revision: "c06700a8ededfd23",
        },
        {
          url: "/_next/static/chunks/d3048c20-16b4afec2f9c98a4.js",
          revision: "16b4afec2f9c98a4",
        },
        {
          url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js",
          revision: "2c79e2a64abdb08b",
        },
        {
          url: "/_next/static/chunks/main-129e5da6b2161174.js",
          revision: "129e5da6b2161174",
        },
        {
          url: "/_next/static/chunks/pages/_app-a5aaa9620651f52d.js",
          revision: "a5aaa9620651f52d",
        },
        {
          url: "/_next/static/chunks/pages/_error-8353112a01355ec2.js",
          revision: "8353112a01355ec2",
        },
        {
          url: "/_next/static/chunks/pages/index-397b7b1804913f4d.js",
          revision: "397b7b1804913f4d",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-dfcd803d090a823b.js",
          revision: "dfcd803d090a823b",
        },
        {
          url: "/_next/static/css/d9b331d577144d50.css",
          revision: "d9b331d577144d50",
        },
        {
          url: "/assets/favicon.ico",
          revision: "418ead8e9da2cb355c9d951bcfadf714",
        },
        {
          url: "/assets/fonts/lucida-console.ttf",
          revision: "97a55c954a18d2daae22c5f9114794d5",
        },
        {
          url: "/assets/images/icon-192x192.png",
          revision: "ac154ce568c970c2d36609e863c749ef",
        },
        {
          url: "/assets/images/icon-256x256.png",
          revision: "297059b329a4eb917bc7ff64d2848fa5",
        },
        {
          url: "/assets/images/icon-384x384.png",
          revision: "920759761cc73f08310bd548c07c2844",
        },
        {
          url: "/assets/images/icon-512x512.png",
          revision: "d74518116f1538404c734a86f7043c96",
        },
        {
          url: "/assets/images/logo.png",
          revision: "691c1ca06016ce1208571ea26f07cb85",
        },
        {
          url: "/assets/images/logo192.png",
          revision: "757e76fe73900a0a24a91d396f3a3338",
        },
        {
          url: "/assets/images/logo512.png",
          revision: "08af4bfae5fac3eee757055572a5eea6",
        },
        {
          url: "/assets/images/notepad-shot.png",
          revision: "6a84079ebcdab1a401b945a287085eb3",
        },
        { url: "/index.html", revision: "cb2679bb903d41cf64c730cf3cfff6b5" },
        { url: "/manifest.json", revision: "851ed1c221b7847be5478a6bd3367115" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/robots.txt", revision: "fa1ded1ed7c11438a9b0385b1e112850" },
        { url: "/thirteen.svg", revision: "53f96b8290673ef9d2895908e69b2f92" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
