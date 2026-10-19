const CACHE = 'lets-cook-v18-illustrated-cooking-workspace';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './assets/food/pancakes.jpg',
  './assets/food/omelette.jpg',
  './assets/food/chicken-soup.jpg',
  './assets/food/salad.jpg',
  './assets/food/syrniki.jpg',
  './assets/food/chocolate-cake.jpg',
  './assets/food/pasta.jpg',
  './assets/food/salmon.jpg',
  './assets/food/vegetable-stew.jpg',
  './assets/illustrations/mixing-bowl.png',
  './assets/illustrations/whisk.png',
  './assets/illustrations/frying-pan.png',
  './assets/illustrations/spatula.png',
  './assets/illustrations/measuring-jug.png',
  './assets/illustrations/kitchen-scale.png',
  './assets/illustrations/bowl-whisk.png',
  './assets/illustrations/chopping-board.png',
  './assets/illustrations/soup-bowl.png',
  './assets/illustrations/oven.png',
  './assets/illustrations/plated-meal.png',
  './assets/illustrations/chef-kitchen-scene.jpg',
  './assets/illustrations/pan-pancake-scene.jpg',
  './assets/illustrations/ingredients-prep-scene.jpg',
  './assets/illustrations/plating-pancakes-scene.jpg',

  './assets/food/smoothie.jpg',
  './assets/food/cookies.jpg',
  './assets/food/berry-pancakes.jpg',
  './assets/food/ramen.jpg',
  './assets/food/tom-yum.jpg',
  './assets/food/borsch.jpg',
  './assets/food/pumpkin-soup.jpg',
  './assets/food/greek-salad.jpg',
  './assets/food/caesar-salad.jpg',
  './assets/food/salmon-poke.jpg',
  './assets/food/lasagna.jpg',
  './assets/food/tiramisu.jpg',
  './assets/food/syrniki-fresh.jpg',
  './assets/food/margherita-pizza.jpg',
  './assets/food/chocolate-cake-fresh.jpg',
  './privacy.html',
  './delete-account.html',
  './assets/drawings/blender.webp',
  './assets/drawings/chef.webp',
  './assets/drawings/doodle_food.webp',
  './assets/drawings/egg.webp',
  './assets/drawings/food_strip.webp',
  './assets/drawings/kitchen_pattern.webp',
  './assets/drawings/pan.webp',
  './assets/drawings/utensils.webp',
  './assets/icons/saucepan.png',
  './assets/icons/steaming-pot.png',
  './assets/icons/frying-pan.png',
  './assets/icons/casserole.png',
  './assets/icons/kettle.png',
  './assets/icons/microwave.png',
  './assets/icons/oven.png',
  './assets/icons/blender.png',
  './assets/icons/stand-mixer.png',
  './assets/icons/whisk.png',
  './assets/icons/mixing-bowl.png',
  './assets/icons/measuring-jug.png',
  './assets/icons/kitchen-scale.png',
  './assets/icons/grater.png',
  './assets/icons/cutting-board-knife.png',
  './assets/icons/colander.png',
  './assets/icons/spatula.png',
  './assets/icons/ladle.png',
  './assets/icons/rolling-pin.png',
  './assets/icons/oven-mitt.png',
  './assets/icons/pepper-shaker.png',
  './assets/icons/salt-shaker.png',
  './assets/icons/plate-cutlery.png',
  './assets/icons/timer.png',
  './assets/icons/refrigerator.png',
  './doodle_food.webp'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Cache each local asset independently: one missing optional asset must not
    // prevent the application shell from being installed for offline use.
    await Promise.all(ASSETS.map(async asset => {
      try {
        const response = await fetch(asset, { cache: 'reload' });
        if (response.ok) await cache.put(asset, response);
      } catch (_) {}
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
  // Never intercept Firebase/auth/API calls or third-party scripts.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/sw.js')) return;

  const isHTML = request.mode === 'navigate' ||
    request.destination === 'document' ||
    url.pathname.endsWith('/index.html') || url.pathname.endsWith('/');

  if (isHTML) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE);
          cache.put('./index.html', response.clone()).catch(() => {});
        }
        return response;
      } catch (_) {
        return (await caches.match(request)) ||
          (await caches.match('./index.html')) ||
          new Response('Приложение недоступно офлайн. Откройте его с интернетом хотя бы один раз.', {
            status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok && response.type === 'basic') {
        const cache = await caches.open(CACHE);
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    } catch (_) {
      return (await caches.match('./index.html')) || Response.error();
    }
  })());
});
