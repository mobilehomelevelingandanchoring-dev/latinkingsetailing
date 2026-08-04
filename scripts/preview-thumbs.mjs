import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const SRC = 'C:\\Users\\Asif Computers\\Pictures\\latin king';
const OUT = 'D:\\latin-king-detailing\\scripts\\thumbs';

mkdirSync(OUT, { recursive: true });

const exts = new Set(['.jfif', '.jpeg', '.jpg']);
const files = readdirSync(SRC)
  .filter(f => exts.has(extname(f).toLowerCase()))
  .sort();

console.log(`Processing ${files.length} files...\n`);

for (let i = 0; i < files.length; i++) {
  const num = String(i + 1).padStart(2, '0');
  const src = join(SRC, files[i]);
  const out = join(OUT, `thumb-${num}.webp`);
  try {
    await sharp(src).resize(400, null, { withoutEnlargement: true }).webp({ quality: 70 }).toFile(out);
    console.log(`${num}. ${files[i]}`);
  } catch (e) {
    console.log(`${num}. SKIP: ${files[i]} (${e.message})`);
  }
}

console.log('\nDone. Thumbnails saved to scripts/thumbs/');
