// Putting the files into the cache const
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/js/index.js",
    "/js/db.js",
    "/manifest.webmanifest",
    "/style.css",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

const CACHE_NAME = "static-cache";
const DATA_CACHE_NAME = "data-cache";

// install Service worker
self.addEventListener("install", function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  
    self.skipWaiting();
  });