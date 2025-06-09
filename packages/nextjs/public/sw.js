if (!self.define) {
  let e,
    s = {};
  const n = (n, t) => (
    (n = new URL(n + ".js", t).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, a) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let c = {};
    const d = (e) => n(e, i),
      r = { module: { uri: i }, exports: c, require: d };
    s[i] = Promise.all(t.map((e) => r[e] || d(e))).then((e) => (a(...e), c));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/Starknet-icon.svg",
          revision: "a852428b70519dd23336c99f621061c3",
        },
        {
          url: "/_next/app-build-manifest.json",
          revision: "971c1e70d5822483532eea14619f8afd",
        },
        {
          url: "/_next/static/chunks/141-50a5892ec81792c9.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/200-4d558bc3bd19d50e.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/2f0b94e8-734829800d3eb38b.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/404-9b8bb7c9cc3e1f02.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/473f56c0-0933f1e2ac7ad0b5.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/498-0ffa083ec9ba7ddd.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/4bd1b696-d7ad30c17a1a2a68.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/503-f64df01edf0d76df.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/524-57545d5b603d8d3d.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/584-4a437ac08b45e35d.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/592.ae95544c767ad634.js",
          revision: "ae95544c767ad634",
        },
        {
          url: "/_next/static/chunks/658-143fd6f0a4c2dc9e.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/684-0f537fd81cd78cb3.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/70646a03-d8bbffbaf77fafd0.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/766-b1287cc196db6605.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/850-67db09e7e8f434ac.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/972.8e639e6b8256d383.js",
          revision: "8e639e6b8256d383",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-925fa8a4d118a7d4.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/api/ipfs/add/route-2067d5bec965cc76.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/api/ipfs/get-metadata/route-ae45c8214d5690fb.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/api/price/%5Bsymbol%5D/route-ed15158e77b7f609.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/api/price/route-e6755f6df9642d40.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/configure/page-9226dce9677b528d.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/debug/page-84a852bb95a98673.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/ipfsDownload/page-15368d05d39b70e8.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/ipfsUpload/page-6fe63694f735f3c2.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/layout-39b14ba8a4173bee.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/myNFTs/page-78c054363f3f7b49.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/page-da8253e2e1a983cc.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/app/transfers/page-9c9963896cd54708.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/e6909d18-01177ac94a980e5f.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/framework-859199dea06580b0.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/main-a106802aa546c841.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/main-app-d2a1fca2d32d253e.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/pages/_app-da15c11dea942c36.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/pages/_error-cc3f077a18ea1793.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-9a453f72906cd770.js",
          revision: "h_Y810HP0Ed6NUds7D-Kt",
        },
        {
          url: "/_next/static/css/7e43d7debabbdae2.css",
          revision: "7e43d7debabbdae2",
        },
        {
          url: "/_next/static/h_Y810HP0Ed6NUds7D-Kt/_buildManifest.js",
          revision: "58ac5c698ebbb8378dbccc5960a57c29",
        },
        {
          url: "/_next/static/h_Y810HP0Ed6NUds7D-Kt/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/blast-icon-color.svg",
          revision: "f455c22475a343be9fcd764de7e7147e",
        },
        {
          url: "/ch0-balance.png",
          revision: "6d08def8fb217be8e8e00602569638a9",
        },
        { url: "/ch0-cover.png", revision: "e35a91db843b80c704a4d1bd8429f208" },
        { url: "/ch0-mynft.png", revision: "2c5ad74a317e2820609d0904274b04ed" },
        {
          url: "/ch0-nfts-images-transfer.png",
          revision: "efb610e6366dcf5e142b9555ee10d349",
        },
        {
          url: "/ch0-nfts-images.png",
          revision: "3188b6b032a06a5cb3b7f27a225e1f01",
        },
        {
          url: "/ch0-scaffold-config.png",
          revision: "1ebfc244c31732dc4273fe292bd07596",
        },
        {
          url: "/ch0-wallet.png",
          revision: "c69b9da92b4f804b1b568a93ccadf4a0",
        },
        {
          url: "/debug-icon.svg",
          revision: "25aadc709736507034d14ca7aabcd29d",
        },
        {
          url: "/explorer-icon.svg",
          revision: "84507da0e8989bb5b7616a3f66d31f48",
        },
        {
          url: "/gradient-s.svg",
          revision: "c003f595a6d30b1b476115f64476e2cf",
        },
        { url: "/hero.png", revision: "e35a91db843b80c704a4d1bd8429f208" },
        {
          url: "/icon-starknet.svg",
          revision: "947b84cccd487643cbe9ceab110b8859",
        },
        {
          url: "/logo-header.svg",
          revision: "d44fd4dcff4b3e67f8a805e0e01ecbd2",
        },
        { url: "/logo.ico", revision: "0359e607e29a3d3b08095d84a9d25c39" },
        { url: "/logo.svg", revision: "962a8546ade641ef7ad4e1b669f0548c" },
        { url: "/manifest.json", revision: "d984b4906d46a476872e50b7db464f22" },
        {
          url: "/scaffold-config.png",
          revision: "1ebfc244c31732dc4273fe292bd07596",
        },
        {
          url: "/sn-symbol-gradient.png",
          revision: "908b60a4f6b92155b8ea38a009fa7081",
        },
        {
          url: "/speedrunStarknet.svg",
          revision: "6879a26a6fd5dccdd8f76b1732e7b706",
        },
        {
          url: "/starkcompass-icon.svg",
          revision: "eccc2ece017ee9e73e512996b74e49ac",
        },
        { url: "/starknet.svg", revision: "6019c24568afe59a51ddca618b4080b0" },
        {
          url: "/voyager-icon.svg",
          revision: "06663dd5ba2c49423225a8e3893b45fe",
        },
      ],
      { ignoreURLParametersMatching: [] },
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
              event: n,
              state: t,
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
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
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
      "GET",
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
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
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
      "GET",
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
      "GET",
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
      "GET",
    );
});
