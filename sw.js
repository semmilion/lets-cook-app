/* Let's cook! Service Worker
 * При выпуске новой версии меняйте CACHE_VERSION. Регистрация также принудительно
 * проверяет обновление sw.js при запуске приложения.
 */
'use strict';

const CACHE_VERSION = 'lets-cook-v5';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './privacy.html'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    // Не проваливаем установку целиком, если один необязательный ресурс недоступен.
    await Promise.all(APP_SHELL.map(async url => {
      try {
        const response = await fetch(url, { cache: 'reload' });
        if (response.ok && response.type !== 'opaque') await cache.put(url, response);
      } catch (_) {}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key =>
      key.startsWith('lets-cook-') && key !== CACHE_VERSION
    ).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    // Не кэшируем сторонние API/авторизацию/скрипты.
    if (/identitytoolkit|securetoken|firebaseinstallations|googleapis\.com/.test(url.hostname)) return;
  }

  const isNavigation = request.mode === 'navigate' ||
    request.destination === 'document' ||
    url.pathname.endsWith('/index.html') ||
    url.pathname.endsWith('/');

  if (isNavigation) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_VERSION);
          cache.put('./index.html', response.clone()).catch(() => {});
        }
        return response;
      } catch (_) {
        return (await caches.match(request)) ||
          (await caches.match('./index.html')) ||
          new Response('Нет подключения к интернету. Откройте приложение онлайн хотя бы один раз.', {
            status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
      }
    })());
    return;
  }

  // Cache-first для локальных ресурсов; сохраняем только успешные same-origin ответы.
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response && response.ok && response.type !== 'opaque') {
          const cache = await caches.open(CACHE_VERSION);
          cache.put(request, response.clone()).catch(() => {});
        }
        return response;
      } catch (_) {
        return new Response('', { status: 504, statusText: 'Offline' });
      }
    })());
  }
});
