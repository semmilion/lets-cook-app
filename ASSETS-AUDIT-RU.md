# Аудит файлов изображений

Список рассчитан по `FOOD_PHOTOS`, `FOOD_SCENE_PHOTOS`, `COOKING_SCENE_DIRS`, динамическому `cookingStepPhoto()` и карте `cookingActionImage()`. Неиспользуемые файлы не удалены.

## `assets/cooking-scenes/oladi`

**Не используется текущей таблицей рецептов.** В `COOKING_SCENE_DIRS` нет рецепта `oladi`, поэтому перечисленные файлы не достигаются через `cookingStepPhoto()` и `FOOD_SCENE_PHOTOS`. Я оставила их в проекте, как просил пользователь.

```text
cooking-scenes/oladi/dish.webp
cooking-scenes/oladi/step-1.webp
cooking-scenes/oladi/step-2.webp
cooking-scenes/oladi/step-3.webp
cooking-scenes/oladi/step-4.webp
```

## Остальные файлы в `assets/`, на которые код не ссылается

```text
illustrations/baking-chef.png
illustrations/batter-bowl.png
illustrations/boiling-pot-2.png
illustrations/chef-hat.png
illustrations/chef-rolling-pin.png
illustrations/chopping-board.png
illustrations/colander.png
illustrations/covered-pan.png
illustrations/crepe-pan.png
illustrations/cucumber-board.png
illustrations/faucet.png
illustrations/fried-egg.png
illustrations/grater-cheese.png
illustrations/herb-board.png
illustrations/kettle.png
illustrations/kitchen-scale.png
illustrations/lid-pot.png
illustrations/measuring-cup.png
illustrations/microwave-bowl.png
illustrations/microwave-food.png
illustrations/microwave-oven.png
illustrations/microwave.png
illustrations/mug.png
illustrations/oven-mitt-2.png
illustrations/oven-mitt.png
illustrations/pancake-stack.png
illustrations/pasta-plate.png
illustrations/pepper-mill.png
illustrations/pepper-shaker.png
illustrations/pizza.png
illustrations/plate-cutlery.png
illustrations/plate.png
illustrations/pot-cooking.png
illustrations/pot-lid.png
illustrations/pot-motion.png
illustrations/pot-small.png
illustrations/red-saucepan.png
illustrations/refrigerator.png
illustrations/rolled-pancakes.png
illustrations/rolling-pin-2.png
illustrations/salad-bowl-2.png
illustrations/salad-mix.png
illustrations/salt-shaker.png
illustrations/saucepan-steam.png
illustrations/saute-pan.png
illustrations/scale-2.png
illustrations/scale-3.png
illustrations/seasoning-pot.png
illustrations/simmering-pot.png
illustrations/snowflake-timer.png
illustrations/soup-pan.png
illustrations/soup.png
illustrations/spatula.png
illustrations/stand-mixer.png
illustrations/steaming-bowl.png
illustrations/teapot.png
illustrations/thermometer.png
illustrations/vegetable-board.png
illustrations/whisk.png
```

Примечание: неиспользуемые файлы намеренно не удалялись. Часть иллюстраций может быть задумана для будущих шагов; перед удалением их нужно проверить в UI и в истории Git.
