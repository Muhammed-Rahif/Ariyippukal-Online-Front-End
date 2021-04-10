// importScripts("./node_modules/workbox-sw/build/workbox-sw.js");
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js");

const staticAssets = [
  "./index.html",
  "./manifest.json",
  "./js/bootstrap.min.js",
  "./js/jquery.min.js",
  "./js/main.js",
  "./script.js",
  "./index.html",
  "./blog-post.html",
  "./contact.html",
  "./about.html",
  "./category.html",
  "./css/bootstrap.min.css",
  "./css/style.css",
  "./css/loader-style.css",
  "./css/font-awesome.min.css",
  "./fonts/fontawesome-webfont.eot",
  "./fonts/fontawesome-webfont.svg",
  "./fonts/fontawesome-webfont.ttf",
  "./fonts/AnjaliOldLipi.ttf",
  "./fonts/FMLYS0XTT.ttf",
  "./fonts/fontawesome-webfont.woff",
  "./fonts/fontawesome-webfont.woff2",
  "./fonts/FontAwesome.otf",
  "./favicon.jpeg",
  "./img/about-1.jpg",
  "./img/about-2.jpg",
  "./img/ad-1.jpg",
  "./img/ad-2.jpg",
  "./img/author.png",
  "./img/avatar.png",
  "./img/logo.png",
  "./img/logo1.png",
  "./img/post-1.jpg",
  "./img/post-2.jpg",
  "./img/post-3.jpg",
  "./img/post-4.jpg",
  "./img/post-5.jpg",
  "./img/post-6.jpg",
  "./img/post-page.jpg",
  "./img/widget-1.jpg",
  "./img/widget-2.jpg",
  "./img/widget-3.jpg",
  "./img/widget-4.jpg",
  "./PWA/images/logo (copy).png",
  "./PWA/images/logo-64x64.png",
  "./PWA/images/logo-96x96.png",
  "./PWA/images/logo-128x128.png",
  "./PWA/images/logo-192x192.png",
  "./PWA/images/logo-512x512.png",
  "./PWA/images/logo.jpg",
  "./PWA/images/logo.png",
  "./PWA/images/logo1.png",
];
workbox.precaching.precache(staticAssets);
workbox.routing.registerRoute(
  /.*\.(css)/,
  new workbox.strategies.CacheFirst({
    cacheName: "all-cache-Stylesheets",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(js)/,
  new workbox.strategies.CacheFirst({
    cacheName: "all-cache-Javascripts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(ttf|woff)/,
  new workbox.strategies.CacheFirst({
    cacheName: "all-cache-Fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
        maxEntries: 20, // only cache 20 request
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(html)/,
  new workbox.strategies.CacheFirst({
    cacheName: "html-documents",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /.*\.(png|jpg|jpeg|gif)/,
  new workbox.strategies.CacheFirst({
    cacheName: "all-image-documents",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  })
);
workbox.routing.registerRoute(
  "https://ariyippukal-online.herokuapp.com/(.*)",
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  new RegExp("https://ariyippukal-online.herokuapp.com/(.*)"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "cache-news-datas",
    cacheExpiration: {
      maxAgeSeconds: 60 * 30, //cache the news content for 30mn
    },
  })
);
