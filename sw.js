const CACHE = 'lets-cook-v18-illustrations';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './assets/illustrations/baking-chef.png',
  './assets/illustrations/batter-bowl.png',
  './assets/illustrations/blender.png',
  './assets/illustrations/boiling-pot-2.png',
  './assets/illustrations/boiling-pot.png',
  './assets/illustrations/bowl-whisk.png',
  './assets/illustrations/chef-hat.png',
  './assets/illustrations/chef-rolling-pin.png',
  './assets/illustrations/chopping-board.png',
  './assets/illustrations/colander.png',
  './assets/illustrations/cooking-pot.png',
  './assets/illustrations/covered-pan.png',
  './assets/illustrations/crepe-pan.png',
  './assets/illustrations/cucumber-board.png',
  './assets/illustrations/cutting-board-knife.png',
  './assets/illustrations/faucet.png',
  './assets/illustrations/fried-egg.png',
  './assets/illustrations/frying-pan.png',
  './assets/illustrations/grater-cheese.png',
  './assets/illustrations/grater.png',
  './assets/illustrations/herb-board.png',
  './assets/illustrations/kettle.png',
  './assets/illustrations/kitchen-scale.png',
  './assets/illustrations/lid-pot.png',
  './assets/illustrations/measuring-cup.png',
  './assets/illustrations/measuring-jug.png',
  './assets/illustrations/microwave-bowl.png',
  './assets/illustrations/microwave-food.png',
  './assets/illustrations/microwave-oven.png',
  './assets/illustrations/microwave.png',
  './assets/illustrations/mixing-bowl-2.png',
  './assets/illustrations/mixing-bowl.png',
  './assets/illustrations/mug.png',
  './assets/illustrations/oven-mitt-2.png',
  './assets/illustrations/oven-mitt.png',
  './assets/illustrations/oven.png',
  './assets/illustrations/pan-fry.png',
  './assets/illustrations/pancake-flip.png',
  './assets/illustrations/pancake-stack.png',
  './assets/illustrations/pasta-plate.png',
  './assets/illustrations/pepper-mill.png',
  './assets/illustrations/pepper-shaker.png',
  './assets/illustrations/pizza.png',
  './assets/illustrations/plate-cutlery.png',
  './assets/illustrations/plate.png',
  './assets/illustrations/plated-meal.png',
  './assets/illustrations/pot-cooking.png',
  './assets/illustrations/pot-lid.png',
  './assets/illustrations/pot-motion.png',
  './assets/illustrations/pot-small.png',
  './assets/illustrations/pot-steam.png',
  './assets/illustrations/pouring-ingredient.png',
  './assets/illustrations/red-saucepan.png',
  './assets/illustrations/refrigerator.png',
  './assets/illustrations/rolled-pancakes.png',
  './assets/illustrations/rolling-pin-2.png',
  './assets/illustrations/rolling-pin.png',
  './assets/illustrations/salad-bowl-2.png',
  './assets/illustrations/salad-bowl.png',
  './assets/illustrations/salad-mix.png',
  './assets/illustrations/salt-shaker.png',
  './assets/illustrations/saucepan-steam.png',
  './assets/illustrations/saute-pan.png',
  './assets/illustrations/scale-2.png',
  './assets/illustrations/scale-3.png',
  './assets/illustrations/seasoning-pot.png',
  './assets/illustrations/serving-dome.png',
  './assets/illustrations/simmering-pot.png',
  './assets/illustrations/snowflake-timer.png',
  './assets/illustrations/soup-bowl.png',
  './assets/illustrations/soup-pan.png',
  './assets/illustrations/soup.png',
  './assets/illustrations/spatula.png',
  './assets/illustrations/stand-mixer.png',
  './assets/illustrations/steaming-bowl.png',
  './assets/illustrations/stirring-pot.png',
  './assets/illustrations/teapot.png',
  './assets/illustrations/thermometer.png',
  './assets/illustrations/vegetable-board.png',
  './assets/illustrations/whisk.png',
  './assets/food/pancakes.jpg',
  './assets/food/omelette.jpg',
  './assets/food/chicken-soup.jpg',
  './assets/food/salad.jpg',
  './assets/food/syrniki.jpg',
  './assets/food/chocolate-cake.jpg',
  './assets/food/pasta.jpg',
  './assets/food/salmon.jpg',
  './assets/food/vegetable-stew.jpg',
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
  './doodle_food.webp',
  './assets/cooking-scenes/bliny/dish.webp',
  './assets/cooking-scenes/bliny/step-1.webp',
  './assets/cooking-scenes/bliny/step-2.webp',
  './assets/cooking-scenes/bliny/step-3.webp',
  './assets/cooking-scenes/bliny/step-4.webp',
  './assets/cooking-scenes/borsch/dish.webp',
  './assets/cooking-scenes/borsch/step-1.webp',
  './assets/cooking-scenes/borsch/step-2.webp',
  './assets/cooking-scenes/borsch/step-3.webp',
  './assets/cooking-scenes/borsch/step-4.webp',
  './assets/cooking-scenes/carbonara/dish.webp',
  './assets/cooking-scenes/carbonara/step-1.webp',
  './assets/cooking-scenes/carbonara/step-2.webp',
  './assets/cooking-scenes/carbonara/step-3.webp',
  './assets/cooking-scenes/carbonara/step-4.webp',
  './assets/cooking-scenes/chicken-soup/dish.webp',
  './assets/cooking-scenes/chicken-soup/step-1.webp',
  './assets/cooking-scenes/chicken-soup/step-2.webp',
  './assets/cooking-scenes/chicken-soup/step-3.webp',
  './assets/cooking-scenes/chicken-soup/step-4.webp',
  './assets/cooking-scenes/oladi/dish.webp',
  './assets/cooking-scenes/oladi/step-1.webp',
  './assets/cooking-scenes/oladi/step-2.webp',
  './assets/cooking-scenes/oladi/step-3.webp',
  './assets/cooking-scenes/oladi/step-4.webp',
  './assets/cooking-scenes/omelet/dish.webp',
  './assets/cooking-scenes/omelet/step-1.webp',
  './assets/cooking-scenes/omelet/step-2.webp',
  './assets/cooking-scenes/omelet/step-3.webp',
  './assets/cooking-scenes/omelet/step-4.webp',
  './assets/cooking-scenes/sharlotka/dish.webp',
  './assets/cooking-scenes/sharlotka/step-1.webp',
  './assets/cooking-scenes/sharlotka/step-2.webp',
  './assets/cooking-scenes/sharlotka/step-3.webp',
  './assets/cooking-scenes/sharlotka/step-4.webp',
  './assets/cooking-scenes/syrniki/dish.webp',
  './assets/cooking-scenes/syrniki/step-1.webp',
  './assets/cooking-scenes/syrniki/step-2.webp',
  './assets/cooking-scenes/syrniki/step-3.webp',
  './assets/cooking-scenes/syrniki/step-4.webp'
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
