from PIL import Image, ImageEnhance, ImageFilter
from pathlib import Path
import json, shutil
root=Path('/mnt/data/build8')
photos=root/'public'/'photos'; photos.mkdir(parents=True,exist_ok=True)
recipes=[
('bliny','Блины','Классические тонкие блины на молоке','25 мин','Легко','berry-pancakes.jpg',['ingredients-prep-scene.jpg','chef-kitchen-scene.jpg','pan-pancake-scene.jpg','plating-pancakes-scene.jpg']),
('syrniki','Сырники','Нежные творожные сырники с золотистой корочкой','30 мин','Легко','syrniki-fresh.jpg',['ingredients-prep-scene.jpg','batter-bowl.png','pan-fry.png','plated-meal.png']),
('omelet','Омлет','Пышный сливочный омлет с зеленью','15 мин','Легко','omelette.jpg',['ingredients-prep-scene.jpg','bowl-whisk.png','covered-pan.png','fried-egg.png']),
('carbonara','Паста карбонара','Шёлковистая паста с сыром и яичным соусом','30 мин','Средне','pasta.jpg',['ingredients-prep-scene.jpg','boiling-pot.jpg' if (root/'assets/illustrations/boiling-pot.jpg').exists() else 'boiling-pot.png','saute-pan.png','pasta-plate.png']),
('borsch','Борщ','Насыщенный домашний борщ со свёклой','1 ч 30 мин','Средне','borsch.jpg',['vegetable-board.png','pot-cooking.png','stirring-pot.png','soup-bowl.png']),
('oladi','Оладьи','Воздушные оладьи на кефире','25 мин','Легко','pancakes.jpg',['ingredients-prep-scene.jpg','bowl-whisk.png','crepe-pan.png','pancake-stack.png']),
('chicken-soup','Куриный суп','Лёгкий домашний суп с курицей и овощами','50 мин','Средне','chicken-soup.jpg',['vegetable-board.png','boiling-pot-2.png','stirring-pot.png','steaming-bowl.png']),
('sharlotka','Шарлотка','Мягкий яблочный пирог с корицей','55 мин','Легко','chocolate-cake-fresh.jpg',['ingredients-prep-scene.jpg','batter-bowl.png','oven.png','plated-meal.png'])]

def fit_save(src,dst,seed=0):
    im=Image.open(src).convert('RGB')
    # crop 16:10
    w,h=im.size; target=1.6
    if w/h>target:
        nw=int(h*target); x=(w-nw)//2; im=im.crop((x,0,x+nw,h))
    else:
        nh=int(w/target); y=(h-nh)//2; im=im.crop((0,y,w,y+nh))
    im=im.resize((1280,800),Image.Resampling.LANCZOS)
    im=ImageEnhance.Color(im).enhance(0.9+0.03*(seed%4))
    im=ImageEnhance.Brightness(im).enhance(1.02)
    im.save(dst,'WEBP',quality=86,method=6)

for ri,(rid,*rest) in enumerate(recipes):
    d=photos/rid; d.mkdir(exist_ok=True)
    dish=rest[4]; steps=rest[5]
    fit_save(root/'assets/food'/dish,d/'dish.webp',ri)
    for i,s in enumerate(steps,1):
        p=root/'assets/illustrations'/s
        if not p.exists(): p=root/'assets/food'/dish
        fit_save(p,d/f'step-{i}.webp',ri+i)

# fallback svg
(root/'public'/'photos'/'fallback.svg').write_text('''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="#fff7e8"/><stop offset="1" stop-color="#f7c98b"/></linearGradient></defs><rect width="1280" height="800" rx="48" fill="url(#g)"/><circle cx="640" cy="380" r="160" fill="#fffaf2" stroke="#e8892f" stroke-width="10"/><path d="M520 390q120-100 240 0q-120 130-240 0" fill="#f3b55f"/><path d="M560 320q80-70 160 0" fill="none" stroke="#9b6339" stroke-width="12" stroke-linecap="round"/></svg>''',encoding='utf-8')
