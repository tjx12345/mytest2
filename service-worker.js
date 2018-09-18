importScripts("/precache-manifest.11227391f24aaf40a518c028e55f5146.js", "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "test_pwa"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


workbox.routing.registerRoute(
         (obj) =>{
                console.log(obj.url);
                return obj.url.pathname.includes('/api');
         },
         workbox.strategies.cacheFirst()
)
