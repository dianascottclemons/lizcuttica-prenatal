const CACHE_NAME = 'liz-cuttica-v1';
const urlsToCache = [
  '/lizcuttica-prenatal/course-preview.html',
  '/lizcuttica-prenatal/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
