(async() => {
    if ('serviceWorker' in navigator) {
        try {
          const worker = await navigator.serviceWorker.register('./sw.js');
          console.log('Service Worker Registered');
        } catch (e) {
          console.log(e.message);
        }
    }
})();

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
          try {
            const cache = await caches.open('v1');
            return cache.addAll(arrayOfYourStaticFiles);
          } catch (e) {
            console.log(e.message);
          }
      })());
  });