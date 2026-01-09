// Service Worker with proper update handling
const CACHE_VERSION = 'v2'; // Auto-updated by deploy.yml
const CACHE_NAME = `kevins-oracle-${CACHE_VERSION}`;

// Cache ONLY the essential files for offline
const urlsToCache = [
  './manifest.json',
  './generators.js' // Will be versioned by deploy.yml
];

// Install - cache essential files
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - simple strategy
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // NEVER cache index.html - always fetch fresh
  if (event.request.url.includes('index.html')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // For cached files, serve from cache
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});