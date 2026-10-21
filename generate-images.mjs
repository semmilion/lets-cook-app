import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import OpenAI from 'openai';
import 'dotenv/config';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const prompts = JSON.parse(await fs.readFile(new URL('../prompts.json', import.meta.url), 'utf8'));
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const only = process.argv[2];

for (const [recipeId, entries] of Object.entries(prompts)) {
  if (only && recipeId !== only) continue;
  const dir = path.join(root, 'public', 'photos', recipeId);
  await fs.mkdir(dir, { recursive: true });
  for (const [name, prompt] of Object.entries(entries)) {
    const file = path.join(dir, `${name}.webp`);
    try {
      const result = await client.images.generate({ model: 'gpt-image-1', prompt, size: '1536x1024' });
      const b64 = result.data?.[0]?.b64_json;
      if (!b64) throw new Error('API не вернул изображение');
      await fs.writeFile(file, Buffer.from(b64, 'base64'));
      console.log('✓', recipeId, name);
    } catch (err) {
      console.error('✗', recipeId, name, err.message);
      // Интерфейс автоматически покажет public/photos/fallback.svg.
    }
  }
}
