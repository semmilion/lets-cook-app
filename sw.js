const CACHE = 'lets-cook-v30-embedded-food-20261025';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './assets/cooking-scenes/common/chef-kitchen.webp'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Small app shell only. Each request is independent: a missing icon must
    // not prevent installation, and optional food art is fetched on first view.
    await Promise.all(ASSETS.map(async asset => {
      const url = new URL(asset, self.registration.scope);
      try {
        const response = await fetch(new Request(url.href, { cache: 'reload' }));
        if (response.ok && response.type === 'basic') {
          await cache.put(url.href, response);
        }
      } catch (_) {
        // Keep offline installation best-effort for each individual asset.
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('lets-cook-') && key !== CACHE)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // External requests (including Firebase SDK/Auth/Firestore) are never cached or intercepted.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/sw.js')) return;

  const shellIndex = new URL('./index.html', self.registration.scope).href;
  const isHTML = request.mode === 'navigate' ||
    request.destination === 'document' ||
    url.pathname.endsWith('/index.html') || url.pathname.endsWith('/');

  if (isHTML) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok && response.type === 'basic') {
          const cache = await caches.open(CACHE);
          cache.put(shellIndex, response.clone()).catch(() => {});
        }
        return response;
      } catch (_) {
        return (await caches.match(request)) ||
          (await caches.match(shellIndex)) ||
          new Response('Приложение ещё не было открыто онлайн. Подключитесь к интернету и откройте его один раз.', {
            status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
      }
    })());
    return;
  }

  const isImage = request.destination === 'image' ||
    /\.(?:png|jpe?g|webp|gif|svg|avif)$/i.test(url.pathname);
  if (isImage) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response && response.ok && response.type === 'basic') {
          cache.put(request, response.clone()).catch(() => {});
        }
        return response;
      } catch (_) {
        // Do not return HTML for an image request; the <img> handler will try
        // the local fallback.svg or reveal the recipe emoji.
        return Response.error();
      }
    })());
    return;
  }

  // Non-image same-origin resources use the network and do not expand the precache.
  event.respondWith((async () => {
    try { return await fetch(request); }
    catch (_) { return (await caches.match(request)) || Response.error(); }
  })());
});
