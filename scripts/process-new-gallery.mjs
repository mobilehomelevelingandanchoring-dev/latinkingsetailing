import sharp from 'sharp';
import { readdirSync, mkdirSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

const SRC = 'C:\\Users\\Asif Computers\\Pictures\\latin king';
const OUT = 'D:\\latin-king-detailing\\public\\images\\gallery';
const WIDTHS = [1280, 800, 480];

mkdirSync(OUT, { recursive: true });

const exts = new Set(['.jfif', '.jpeg', '.jpg']);
const files = readdirSync(SRC)
  .filter(f => exts.has(extname(f).toLowerCase()))
  .sort();

// Map from 0-based index → SEO slug (null = skip)
const nameMap = [
  'gallery-mg-td-classic-urmston-latin-king-detailing-14',           // 01
  'gallery-mercedes-a-class-urmston-latin-king-detailing-15',        // 02
  'gallery-mg-td-classic-urmston-latin-king-detailing-16',           // 03
  null,                                                               // 04 DUPLICATE of 19
  'gallery-brabus-amg-gt63s-manchester-latin-king-detailing-17',     // 05
  'gallery-brabus-amg-gt63s-manchester-latin-king-detailing-18',     // 06
  'gallery-porsche-taycan-miami-blue-urmston-latin-king-detailing-19', // 07
  'gallery-brabus-amg-gt63s-manchester-latin-king-detailing-20',     // 08
  'gallery-cupra-born-urmston-latin-king-detailing-21',              // 09
  'gallery-cupra-born-urmston-latin-king-detailing-22',              // 10
  'gallery-cupra-born-urmston-latin-king-detailing-23',              // 11
  'gallery-cupra-born-urmston-latin-king-detailing-24',              // 12
  'gallery-land-rover-discovery-5-manchester-latin-king-detailing-25', // 13
  'gallery-brabus-amg-gt63s-manchester-latin-king-detailing-26',     // 14
  'gallery-land-rover-discovery-5-manchester-latin-king-detailing-27', // 15
  'gallery-mercedes-a-class-urmston-latin-king-detailing-28',        // 16
  'gallery-mercedes-a-class-urmston-latin-king-detailing-29',        // 17
  'gallery-mercedes-a-class-urmston-latin-king-detailing-30',        // 18
  'gallery-mercedes-cls-urmston-latin-king-detailing-31',            // 19
  'gallery-mercedes-cls-urmston-latin-king-detailing-32',            // 20
  'gallery-mercedes-cls-urmston-latin-king-detailing-33',            // 21
  'gallery-mercedes-cls-urmston-latin-king-detailing-34',            // 22
  'gallery-audi-rs5-urmston-latin-king-detailing-35',                // 23
  'gallery-audi-rs5-urmston-latin-king-detailing-36',                // 24
  'gallery-audi-rs5-urmston-latin-king-detailing-37',                // 25
  null,                                                               // 26 SKIP tiny 144KB Ferrari
  'gallery-mercedes-glc-coupe-amg-urmston-latin-king-detailing-38',  // 27
  'gallery-mercedes-glc-coupe-amg-urmston-latin-king-detailing-39',  // 28
  'gallery-mercedes-glc-coupe-amg-urmston-latin-king-detailing-40',  // 29
  'gallery-mercedes-e-class-urmston-latin-king-detailing-41',        // 30
  'gallery-porsche-taycan-black-urmston-latin-king-detailing-42',    // 31
  'gallery-porsche-taycan-black-urmston-latin-king-detailing-43',    // 32
  'gallery-porsche-taycan-black-urmston-latin-king-detailing-44',    // 33
  'gallery-mercedes-glc-coupe-amg-urmston-latin-king-detailing-45',  // 34
  'gallery-porsche-taycan-black-urmston-latin-king-detailing-46',    // 35
  'gallery-porsche-taycan-black-urmston-latin-king-detailing-47',    // 36
  'gallery-mercedes-cla-amg-urmston-latin-king-detailing-48',        // 37
  'gallery-mercedes-cla-amg-urmston-latin-king-detailing-49',        // 38
  'gallery-porsche-taycan-miami-blue-urmston-latin-king-detailing-50', // 39
  'gallery-mercedes-cla-amg-urmston-latin-king-detailing-51',        // 40
  'gallery-mercedes-cla-amg-urmston-latin-king-detailing-52',        // 41
  null,                                                               // 42 SKIP tiny duplicate
  'gallery-mg-td-classic-urmston-latin-king-detailing-53',           // 43
];

const altMap = [
  'Classic MG TD roadster front three-quarter view after detailing by Latin King Detailing, Urmston',
  'Mercedes A-Class black rear three-quarter after mobile car wash by Latin King Detailing, Urmston',
  'Classic MG TD roadster rear view exiting barn after detailing by Latin King Detailing, Greater Manchester',
  null,
  'Brabus Mercedes-AMG GT 63 S matte black front straight after detailing by Latin King Detailing, Manchester',
  'Brabus Mercedes-AMG GT 63 S carbon fibre wheel with red caliper detail after valet by Latin King Detailing',
  'Porsche Taycan Miami Blue three-quarter view with snow foam during mobile wash by Latin King Detailing, Urmston',
  'Brabus Mercedes-AMG GT 63 S matte black front three-quarter after detailing by Latin King Detailing, Manchester',
  'CUPRA Born white EV side three-quarter after exterior detail by Latin King Detailing, Urmston',
  'CUPRA Born white EV full three-quarter view after mobile car wash by Latin King Detailing, Urmston',
  'CUPRA Born white EV front view during snow foam application by Latin King Detailing, Urmston',
  'CUPRA Born white EV low-angle front view during snow foam pre-wash by Latin King Detailing, Urmston',
  'Land Rover Discovery 5 dark grey front three-quarter during mobile valet by Latin King Detailing, Manchester',
  'Brabus Mercedes-AMG GT 63 S matte black rear three-quarter after detailing by Latin King Detailing, Manchester',
  'Land Rover Discovery 5 dark grey rear three-quarter with snow foam by Latin King Detailing, Manchester',
  'Mercedes A-Class black front three-quarter after mobile car wash by Latin King Detailing, Urmston',
  'Mercedes A-Class black side profile after exterior valet by Latin King Detailing, Urmston',
  'Mercedes A-Class black front straight after mobile detailing by Latin King Detailing, Urmston',
  'Mercedes CLS black front three-quarter after mobile valet by Latin King Detailing, Urmston',
  'Mercedes CLS black front straight after exterior detail by Latin King Detailing, Urmston',
  'Mercedes CLS black front three-quarter after mobile car wash by Latin King Detailing, Greater Manchester',
  'Mercedes CLS black side profile after mobile valet by Latin King Detailing, Urmston',
  'Audi RS5 black front three-quarter after mobile detailing by Latin King Detailing, Urmston',
  'Audi RS5 black three-quarter with pop-up gazebo during mobile valet by Latin King Detailing, Urmston',
  'Audi RS5 black side profile after exterior car wash by Latin King Detailing, Urmston',
  null,
  'Mercedes GLC Coupe AMG black side profile after mobile valet by Latin King Detailing, Urmston',
  'Mercedes GLC Coupe AMG black rear three-quarter after exterior detail by Latin King Detailing, Urmston',
  'Mercedes GLC Coupe AMG black side profile after mobile car wash by Latin King Detailing, Greater Manchester',
  'Mercedes E-Class grey front straight during mobile car wash by Latin King Detailing, Urmston',
  'Porsche Taycan black front three-quarter with snow foam during mobile valet by Latin King Detailing, Urmston',
  'Porsche Taycan black front three-quarter after exterior detail by Latin King Detailing, Urmston',
  'Porsche Taycan black side profile during mobile car wash by Latin King Detailing, Urmston',
  'Mercedes GLC Coupe AMG black front three-quarter after mobile valet by Latin King Detailing, Urmston',
  'Porsche Taycan black front three-quarter on driveway after mobile detailing by Latin King Detailing, Urmston',
  'Porsche Taycan black front straight after mobile car wash by Latin King Detailing, Greater Manchester',
  'Mercedes CLA AMG red front straight during snow foam mobile wash by Latin King Detailing, Urmston',
  'Mercedes CLA AMG red front three-quarter during mobile car wash by Latin King Detailing, Urmston',
  'Porsche Taycan Miami Blue front straight during mobile valet by Latin King Detailing, Urmston',
  'Mercedes CLA AMG red three-quarter side view during mobile car wash by Latin King Detailing, Urmston',
  'Mercedes CLA AMG red rear three-quarter after mobile valet by Latin King Detailing, Urmston',
  null,
  'Classic MG TD roadster front straight inside barn after detailing by Latin King Detailing, Greater Manchester',
];

const newEntries = [];
let processed = 0, skipped = 0;

for (let i = 0; i < files.length; i++) {
  const slug = nameMap[i];
  if (!slug) { console.log(`SKIP  [${String(i+1).padStart(2,'0')}] ${files[i]}`); skipped++; continue; }

  const src = join(SRC, files[i]);
  let ok = true;

  for (const w of WIDTHS) {
    const out = join(OUT, `${slug}-${w}w.webp`);
    try {
      await sharp(src).resize(w, null, { withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    } catch(e) {
      console.log(`  ERROR ${w}w: ${e.message}`);
      ok = false;
    }
  }

  if (ok) {
    console.log(`OK    [${String(i+1).padStart(2,'0')}] ${slug}`);
    newEntries.push({ slug, alt: altMap[i] });
    processed++;
  }
}

// Write images.ts entries as JSON for easy copy-paste
const tsEntries = newEntries.map(({ slug, alt }) => ({
  slug,
  service: 'gallery',
  alt,
  widths: [1280, 800, 480],
  profile: 'gallery',
  src: `/images/gallery/${slug}-1280w.webp`,
  srcset: `${WIDTHS.map(w => `/images/gallery/${slug}-${w}w.webp ${w}w`).join(', ')}`,
}));

writeFileSync('D:\\latin-king-detailing\\scripts\\new-gallery-entries.json', JSON.stringify(tsEntries, null, 2));

console.log(`\nDone: ${processed} processed, ${skipped} skipped.`);
console.log('Entries written to scripts/new-gallery-entries.json');
