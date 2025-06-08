const CACHE_NAME = 'yie-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/PWA.png',
  '/images/HeaderDesktop.png',
  '/images/HeaderMobile.png',
  '/assets/index-BPXgnpxB.css',
  '/assets/index-DSKkrJ96.js'
];

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] All URLs cached successfully');
      })
      .catch((error) => {
        console.error('[Service Worker] Cache operation failed during install:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(async function() {
    try {
      // Try to get the response from the cache
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        console.log('[Service Worker] Serving from cache:', event.request.url);
        return cachedResponse;
      }

      // If not in cache, try to fetch from the network
      console.log('[Service Worker] Fetching from network:', event.request.url);
      const networkResponse = await fetch(event.request, { mode: 'cors' });

      // Check if we received a valid response
      if (!networkResponse || networkResponse.status !== 200) {
        return networkResponse; // Return whatever response we got (e.g., 404)
      }

      // Clone the response and put it in cache
      const responseToCache = networkResponse.clone();
      caches.open(CACHE_NAME).then(cache => {
        cache.put(event.request, responseToCache);
      });

      return networkResponse;
    } catch (error) {
      console.error('[Service Worker] Fetch failed:', error);

      // For navigation requests, return the offline HTML page.
      if (event.request.mode === 'navigate') {
        return new Response('<h1>Offline</h1><p>Please connect to the internet.</p>', {
          headers: { 'Content-Type': 'text/html' }
        });
      } else {
        // For other types of requests (scripts, images, CSS), return a generic error response.
        // This prevents MIME type mismatches when the browser expects a specific content type.
        return new Response(null, { status: 404, statusText: 'Not Found' });
      }
    }
  }());
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
          return null; // Return null if no deletion
        })
      );
    })
    .then(() => {
      console.log('[Service Worker] Activation complete.');
    })
    .catch((error) => {
      console.error('[Service Worker] Activation failed:', error);
    })
  );
});