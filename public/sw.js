// The Barberman Service Worker - Production Ready
const CACHE_NAME = 'the-barberman-v1.0.1';
const OFFLINE_URL = '/offline.html';

// Precache manifest placeholder - required for vite-plugin-pwa injectManifest strategy
self.__WB_MANIFEST;

// Install event - handle offline page caching
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching offline page...');
        return cache.add(OFFLINE_URL);
      })
      .then(() => {
        // Force activation immediately
        return self.skipWaiting();
      })
      .catch((error) => {
        console.log('Offline page caching failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

// Fetch event - handle network requests with optimized caching
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) return;

  // Handle navigation requests (page loads)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // If we get a successful response, return it
          if (response.ok) {
            return response;
          }
          // If we get a 404 or other error, serve the main app (not offline page)
          return caches.match('/index.html');
        })
        .catch(() => {
          // Only serve offline page if there's a complete network failure
          // AND it's not a route that should be handled by the React app
          const url = new URL(event.request.url);
          const pathname = url.pathname;
          
          // Routes that should be handled by React Router
          const reactRoutes = [
            '/',
            '/om-oss',
            '/integritetspolicy',
            '/anvandarvillkor',
            '/privacy',
            '/terms'
          ];
          
          // If it's a React route, serve the main app
          if (reactRoutes.includes(pathname) || pathname.startsWith('/')) {
            return caches.match('/index.html');
          }
          
          // For everything else, serve offline page
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Handle BokaDirekt iframe requests - always try network first
  if (event.request.url.includes('bokadirekt.se')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache successful responses for short term
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
          }
          return response;
        })
        .catch(() => {
          // Try to serve from cache if network fails
          return caches.match(event.request)
            .then((cachedResponse) => {
              return cachedResponse || new Response('', { status: 404 });
            });
        })
    );
    return;
  }

  // Handle static assets with cache-first strategy
  if (event.request.destination === 'image' || 
      event.request.destination === 'style' || 
      event.request.destination === 'script' ||
      event.request.destination === 'font' ||
      event.request.url.includes('fonts.googleapis.com') ||
      event.request.url.includes('fonts.gstatic.com')) {
    
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(event.request)
            .then((response) => {
              // Don't cache non-successful responses
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              // Clone and cache the response
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              
              return response;
            })
            .catch(() => {
              // Return a fallback for images if available
              if (event.request.destination === 'image') {
                return caches.match('/favicon-144x144.png');
              }
              return new Response('', { status: 404 });
            });
        })
    );
    return;
  }

  // For all other requests, try network first, then cache
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache
        return caches.match(event.request);
      })
  );
});

// Handle background sync for offline functionality (future enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      console.log('Background sync triggered')
    );
  }
});

// IMPORTANT: NO push notification handlers to prevent any popups
// Removed all notification-related event listeners