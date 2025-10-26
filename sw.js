// Service Worker with proper update handling
const CACHE_VERSION = 'v1.0.1'; // This will be auto-updated by GitHub Actions
const CACHE_NAME = `kevins-oracle-${CACHE_VERSION}`;

const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './generators.js',
  './icons/icon-72x72.svg',
  './icons/icon-96x96.svg',
  './icons/icon-128x128.svg',
  './icons/icon-144x144.svg',
  './icons/icon-152x152.svg',
  './icons/icon-192x192.svg',
  './icons/icon-384x384.svg',
  './icons/icon-512x512.svg'
];

// Install event - cache essential files and skip waiting
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  
  // Skip waiting to activate immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete all caches that don't match current version
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Claim all clients to ensure they use the updated service worker
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests and browser extensions
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // Clone the request because it can only be used once
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response because it can only be used once
          const responseToCache = response.clone();
          
          // Cache the new response for future requests
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});

// Listen for messages from the client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});