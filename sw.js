const CACHE_NAME = 'ramadan-planner-v1';
const urlsToCache = [
  '/ramadan-planner_/aya-ultimate-plan.html',
  '/ramadan-planner_/manifest.json',
  '/ramadan-planner_/icon-192x192.png',
  '/ramadan-planner_/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
