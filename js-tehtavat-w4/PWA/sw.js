const files = [
  './index.html',
  './main.js',
  './Oswald-VariableFont_wght.ttf',
  './pngtreesimple-background-of-multiple-color-gradient-app-interface-materials-png-image_392301.jpg',
  './style.css',
  './manifest.json',
  './icon-192x192.png',
  './icon-256x256.png',
  './icon-384x384.png',
  './icon-512x512.png' 
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll(files);
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('ServiceWorker Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch((e) => {
        console.log(e.message);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName !== 'v1';
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
