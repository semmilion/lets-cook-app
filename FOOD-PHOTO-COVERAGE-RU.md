# Покрытие фотографиями рецептов (88 рецептов)

`FOOD_PHOTOS` содержит отдельную запись для каждого из 88 стандартных рецептов. `foodPhotoPath()` формирует локальный путь; для 7 рецептов с отдельными сценами используется `assets/cooking-scenes/*/dish.webp`, для остальных — `assets/food/*.jpg`. Все указанные пути проверены на наличие.

**Важное ограничение:** в архиве только 24 фотографии из `assets/food` на 88 рецептов. Поэтому таблица честно отмечает «Ближайшее имеющееся фото» там, где отдельного точного кадра в исходном архиве нет; повторное использование картинки не делает её точным изображением рецепта. Подозрительные прежние пары исправлены: `ramen` → `ramen.jpg`, `tom-yum` → `tom-yum.jpg`, `kebab` больше не использует фото лосося, `schnitzel` больше не использует фото лосося, блюда из риса перенаправлены к фото рисовой чаши.

| Категория | Рецепт | Локальный файл | Оценка совпадения |
|---|---|---|---|
| breakfast | Блинчики (`pancakes`) | `assets/cooking-scenes/bliny/dish.webp` | Подходит по сюжету |
| breakfast | Омлет (`omelette`) | `assets/cooking-scenes/omelet/dish.webp` | Подходит по сюжету |
| breakfast | Сырники (`syrniki`) | `assets/cooking-scenes/syrniki/dish.webp` | Подходит по сюжету |
| breakfast | Овсяная каша (`oatmeal`) | `assets/food/pumpkin-soup.jpg` | Ближайшее имеющееся фото |
| breakfast | Тост с авокадо (`avocado-toast`) | `assets/food/salmon-poke.jpg` | Ближайшее имеющееся фото |
| breakfast | Вафли (`waffles`) | `assets/food/berry-pancakes.jpg` | Ближайшее имеющееся фото |
| breakfast | Франц. тост (`french-toast`) | `assets/food/pancakes.jpg` | Ближайшее имеющееся фото |
| breakfast | Шакшука (`shakshuka`) | `assets/food/omelette.jpg` | Подходит по сюжету |
| breakfast | Гранола (`granola`) | `assets/food/berry-pancakes.jpg` | Ближайшее имеющееся фото |
| breakfast | Смузи (`smoothie`) | `assets/food/smoothie.jpg` | Подходит по сюжету |
| breakfast | Яйца Бенедикт (`eggs-benedict`) | `assets/food/omelette.jpg` | Ближайшее имеющееся фото |
| breakfast | Манная каша (`porridge`) | `assets/food/pumpkin-soup.jpg` | Ближайшее имеющееся фото |
| breakfast | Блины с икрой (`blini-caviar`) | `assets/food/pancakes.jpg` | Ближайшее имеющееся фото |
| soups | Борщ (`borsch`) | `assets/cooking-scenes/borsch/dish.webp` | Подходит по сюжету |
| soups | Щи (`shchi`) | `assets/food/borsch.jpg` | Ближайшее имеющееся фото |
| soups | Харчо (`kharcho`) | `assets/food/borsch.jpg` | Ближайшее имеющееся фото |
| soups | Гороховый (`pea-soup`) | `assets/food/chicken-soup.jpg` | Ближайшее имеющееся фото |
| soups | Щавелевый (`sorrel-soup`) | `assets/food/chicken-soup.jpg` | Ближайшее имеющееся фото |
| soups | Куриный с лапшой (`chicken-noodle`) | `assets/cooking-scenes/chicken-soup/dish.webp` | Подходит по сюжету |
| soups | Тыквенный (`pumpkin-soup`) | `assets/food/pumpkin-soup.jpg` | Подходит по сюжету |
| soups | Солянка (`solyanka`) | `assets/food/borsch.jpg` | Ближайшее имеющееся фото |
| soups | Грибной (`mushroom-soup`) | `assets/food/pumpkin-soup.jpg` | Ближайшее имеющееся фото |
| soups | Том Ям (`tom-yum`) | `assets/food/tom-yum.jpg` | Подходит по сюжету |
| soups | Минестроне (`minestrone`) | `assets/food/vegetable-stew.jpg` | Ближайшее имеющееся фото |
| soups | Окрошка (`okroshka`) | `assets/food/greek-salad.jpg` | Ближайшее имеющееся фото |
| soups | Рамен (`ramen`) | `assets/food/ramen.jpg` | Подходит по сюжету |
| soups | Гаспачо (`gazpacho`) | `assets/food/borsch.jpg` | Ближайшее имеющееся фото |
| main | Карбонара (`carbonara`) | `assets/cooking-scenes/carbonara/dish.webp` | Подходит по сюжету |
| main | Плов (`pilaf`) | `assets/food/salmon-poke.jpg` | Ближайшее имеющееся фото |
| main | Котлеты (`cutlets`) | `assets/food/syrniki.jpg` | Ближайшее имеющееся фото |
| main | Стейк (`steak`) | `assets/food/vegetable-stew.jpg` | Ближайшее имеющееся фото |
| main | Рыба запеч. (`fish-baked`) | `assets/food/salmon.jpg` | Подходит по сюжету |
| main | Болоньезе (`bolognese`) | `assets/food/pasta.jpg` | Подходит по сюжету |
| main | Лазанья (`lasagna`) | `assets/food/lasagna.jpg` | Подходит по сюжету |
| main | Ризотто (`risotto`) | `assets/food/salmon-poke.jpg` | Ближайшее имеющееся фото |
| main | Тэрияки (`teriyaki`) | `assets/food/salmon.jpg` | Ближайшее имеющееся фото |
| main | Карри (`curry`) | `assets/food/vegetable-stew.jpg` | Ближайшее имеющееся фото |
| main | Гуляш (`goulash`) | `assets/food/vegetable-stew.jpg` | Ближайшее имеющееся фото |
| main | Бефстроганов (`befstroganoff`) | `assets/food/vegetable-stew.jpg` | Ближайшее имеющееся фото |
| main | Долма (`dolma`) | `assets/food/greek-salad.jpg` | Ближайшее имеющееся фото |
| main | Кебаб (`kebab`) | `assets/food/vegetable-stew.jpg` | Ближайшее имеющееся фото |
| main | Паэлья (`paella`) | `assets/food/salmon-poke.jpg` | Ближайшее имеющееся фото |
| main | Ризотто с грибами (`risotto-mush`) | `assets/food/salmon-poke.jpg` | Ближайшее имеющееся фото |
| main | Шницель (`schnitzel`) | `assets/food/syrniki-fresh.jpg` | Ближайшее имеющееся фото |
| main | Мусака (`moussaka`) | `assets/food/lasagna.jpg` | Ближайшее имеющееся фото |
| salads | Цезарь (`caesar`) | `assets/food/caesar-salad.jpg` | Подходит по сюжету |
| salads | Оливье (`olivier`) | `assets/food/salad.jpg` | Ближайшее имеющееся фото |
| salads | Греческий (`greek`) | `assets/food/greek-salad.jpg` | Подходит по сюжету |
| salads | Винегрет (`vinegret`) | `assets/food/salad.jpg` | Ближайшее имеющееся фото |
| salads | С креветками (`shrimp-salad`) | `assets/food/salmon-poke.jpg` | Ближайшее имеющееся фото |
| salads | Овощной (`veggie`) | `assets/food/salad.jpg` | Ближайшее имеющееся фото |
| salads | Мимоза (`mimosa`) | `assets/food/salad.jpg` | Ближайшее имеющееся фото |
| salads | Капрезе (`caprese`) | `assets/food/greek-salad.jpg` | Ближайшее имеющееся фото |
| salads | Уолдорф (`waldorf`) | `assets/food/salad.jpg` | Ближайшее имеющееся фото |
| salads | Нисуаз (`nicoise`) | `assets/food/salmon-poke.jpg` | Ближайшее имеющееся фото |
| salads | Кобб (`cobb`) | `assets/food/caesar-salad.jpg` | Ближайшее имеющееся фото |
| salads | Табуле (`tabbouleh`) | `assets/food/greek-salad.jpg` | Ближайшее имеющееся фото |
| salads | Крабовый (`crab-salad`) | `assets/food/salmon-poke.jpg` | Ближайшее имеющееся фото |
| salads | Свекольный (`beet-salad`) | `assets/food/salad.jpg` | Ближайшее имеющееся фото |
| desserts | Тирамису (`tiramisu`) | `assets/food/tiramisu.jpg` | Подходит по сюжету |
| desserts | Панна-котта (`panna`) | `assets/food/tiramisu.jpg` | Ближайшее имеющееся фото |
| desserts | Мусс (`mousse`) | `assets/food/chocolate-cake.jpg` | Ближайшее имеющееся фото |
| desserts | Чизкейк (`cheesecake`) | `assets/food/chocolate-cake-fresh.jpg` | Ближайшее имеющееся фото |
| desserts | Мороженое (`icecream`) | `assets/food/chocolate-cake-fresh.jpg` | Ближайшее имеющееся фото |
| desserts | Блины с шоколадом (`choco-pancakes`) | `assets/food/berry-pancakes.jpg` | Подходит по сюжету |
| desserts | Медовик (`medovik`) | `assets/food/chocolate-cake.jpg` | Ближайшее имеющееся фото |
| desserts | Крем-брюле (`creme-brulee`) | `assets/food/tiramisu.jpg` | Ближайшее имеющееся фото |
| desserts | Эклеры (`eclairs`) | `assets/food/cookies.jpg` | Ближайшее имеющееся фото |
| desserts | Наполеон (`napoleon`) | `assets/food/chocolate-cake-fresh.jpg` | Ближайшее имеющееся фото |
| desserts | Брауни (`brownie`) | `assets/food/chocolate-cake.jpg` | Ближайшее имеющееся фото |
| desserts | Макаруны (`macarons`) | `assets/food/cookies.jpg` | Ближайшее имеющееся фото |
| desserts | Профитроли (`profiteroles`) | `assets/food/cookies.jpg` | Ближайшее имеющееся фото |
| desserts | Суфле (`souffle`) | `assets/food/chocolate-cake-fresh.jpg` | Ближайшее имеющееся фото |
| desserts | Павлова (`pavlova`) | `assets/food/berry-pancakes.jpg` | Ближайшее имеющееся фото |
| baking | Хлеб (`bread`) | `assets/food/margherita-pizza.jpg` | Ближайшее имеющееся фото |
| baking | Печенье (`cookies`) | `assets/food/cookies.jpg` | Подходит по сюжету |
| baking | Пицца (`pizza`) | `assets/food/margherita-pizza.jpg` | Подходит по сюжету |
| baking | Маффины (`muffins`) | `assets/food/chocolate-cake-fresh.jpg` | Ближайшее имеющееся фото |
| baking | Круассаны (`croissants`) | `assets/food/cookies.jpg` | Ближайшее имеющееся фото |
| baking | Шарлотка (`pie`) | `assets/cooking-scenes/sharlotka/dish.webp` | Подходит по сюжету |
| baking | Синнабоны (`cinnamon-rolls`) | `assets/food/cookies.jpg` | Ближайшее имеющееся фото |
| baking | Пончики (`donuts`) | `assets/food/cookies.jpg` | Ближайшее имеющееся фото |
| baking | Фокачча (`focaccia`) | `assets/food/margherita-pizza.jpg` | Ближайшее имеющееся фото |
| baking | Багет (`baguette`) | `assets/food/margherita-pizza.jpg` | Ближайшее имеющееся фото |
| baking | Пирог с мясом (`pie-meat`) | `assets/food/vegetable-stew.jpg` | Ближайшее имеющееся фото |
| baking | Хачапури (`cheese-bread`) | `assets/food/margherita-pizza.jpg` | Ближайшее имеющееся фото |
| baking | Капкейки (`cupcake`) | `assets/food/chocolate-cake-fresh.jpg` | Ближайшее имеющееся фото |
| baking | Бискотти (`biscotti`) | `assets/food/cookies.jpg` | Ближайшее имеющееся фото |

## Какие точные кадры ещё стоит добавить

В исходных ассетах нет точных фото для части завтраков (каши, тоста с авокадо, гранолы), отдельных супов, мяса/кебаба/шницеля, ряда салатов, мороженого, панна-котты, крем-брюле и отдельных видов выпечки. Сейчас для них используются ближайшие локальные изображения, чтобы не показывать сломанную картинку; эти кадры лучше заменить на отдельные изображения блюда с подтверждёнными правами.
