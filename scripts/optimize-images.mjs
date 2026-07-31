#!/usr/bin/env node
/**
 * Latin King Detailing — Image Optimisation Pipeline
 *
 * Source layout:
 *   source-images/
 *     {service-slug}/
 *       *.jpg | *.jpeg | *.png | *.tiff
 *       _meta.json  (optional — per-folder overrides, see README)
 *
 * Outputs:
 *   public/images/{service-slug}/{seo-name}-{w}w.webp
 *   src/lib/images.ts   (typed TypeScript manifest)
 *
 * Usage:
 *   npm run optimize-images
 *   node scripts/optimize-images.mjs --dry-run
 *   node scripts/optimize-images.mjs --service gallery
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { basename, dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';
import { parseArgs } from 'util';
import sharp from 'sharp';
import { exiftool } from 'exiftool-vendored';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');
const SOURCE    = join(ROOT, 'source-images');
const OUT_ROOT  = join(ROOT, 'public', 'images');
const MANIFEST  = join(ROOT, 'src', 'lib', 'images.ts');

// ─── CLI flags ────────────────────────────────────────────────────────────────
const { values: flags } = parseArgs({
  args: process.argv.slice(2),
  options: {
    'dry-run': { type: 'boolean', default: false },
    service:   { type: 'string'  },
    force:     { type: 'boolean', default: false },
  },
  strict: false,
});
const DRY  = flags['dry-run'];
const ONLY = flags.service ?? null;
const FORCE = flags.force ?? false;

// ─── Business metadata ────────────────────────────────────────────────────────
const BIZ = {
  name:      'Latin King Detailing',
  city:      'Urmston',
  region:    'Greater Manchester',
  country:   'United Kingdom',
  countryCode: 'GBR',
  gpsLat:    53.446,
  gpsLon:    -2.372,   // negative = West (exiftool infers LongitudeRef from sign)
  copyright: `© ${new Date().getFullYear()} Latin King Detailing. All rights reserved.`,
  url:       'https://latinkingdetailing.co.uk',
  creator:   'Latin King Detailing',
  keywords: [
    'mobile car wash', 'mobile valeting', 'car detailing', 'ceramic coating',
    'paint correction', 'Urmston', 'Trafford', 'Greater Manchester',
    'Latin King Detailing',
  ],
};

// ─── Responsive size profiles ─────────────────────────────────────────────────
const PROFILES = {
  hero:    [1920, 1280, 768, 480],
  gallery: [1280, 800, 480],
  og:      [1200],
  thumb:   [480],
};

// ─── Supported input extensions ───────────────────────────────────────────────
const EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tiff', '.tif']);

// ─── Helpers ──────────────────────────────────────────────────────────────────
const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const pad = (n, len = 2) => String(n).padStart(len, '0');

const kb = (bytes) => (bytes / 1024).toFixed(1);

const pct = (a, b) => (b === 0 ? '0' : ((1 - a / b) * 100).toFixed(1));

function isImage(name) {
  return EXTS.has(extname(name).toLowerCase());
}

function inferVehicleFromName(filename) {
  const noExt = basename(filename, extname(filename));
  // Strip common camera prefixes like IMG_0001, DSC_0001, PHOTO-2024-01-01, etc.
  const cleaned = noExt
    .replace(/^(img|dsc|dscn|photo|pic|image|p\d{4}|mvimg)[-_]?\d*/i, '')
    .replace(/[-_]+$/, '');
  return slugify(cleaned);
}

function buildAlt(serviceLabel, vehicleLabel) {
  return vehicleLabel
    ? `${vehicleLabel} ${serviceLabel.toLowerCase()} by Latin King Detailing, Urmston`
    : `${serviceLabel} by Latin King Detailing, Urmston, Greater Manchester`;
}

function buildDescription(serviceLabel, vehicleLabel) {
  const loc = `${BIZ.city}, ${BIZ.region}`;
  return vehicleLabel
    ? `Professional ${serviceLabel.toLowerCase()} on a ${vehicleLabel} by ${BIZ.name} — mobile car care in ${loc}.`
    : `Professional ${serviceLabel.toLowerCase()} by ${BIZ.name} — mobile car care service in ${loc}.`;
}

// ─── Service defaults (used when no _meta.json exists) ───────────────────────
const SERVICE_DEFAULTS = {
  'mobile-valeting':       { label: 'Mobile Valeting',       profile: 'gallery' },
  'car-detailing':         { label: 'Car Detailing',          profile: 'gallery' },
  'paint-correction':      { label: 'Paint Correction',       profile: 'gallery' },
  'machine-polishing':     { label: 'Machine Polishing',      profile: 'gallery' },
  'ceramic-coating':       { label: 'Ceramic Coating',        profile: 'gallery' },
  'paint-protection-film': { label: 'Paint Protection Film',  profile: 'gallery' },
  'interior':              { label: 'Interior Detailing',     profile: 'gallery' },
  'gallery':               { label: 'Car Detailing',          profile: 'gallery' },
  'hero':                  { label: 'Mobile Detailing',       profile: 'hero'    },
};

// ─── Write EXIF + XMP metadata via exiftool ───────────────────────────────────
async function tagFile(filePath, { description, keywords, seoName }) {
  try {
    await exiftool.write(
      filePath,
      {
        // GPS (Urmston, Greater Manchester) — signed decimal; exiftool infers N/S and E/W from sign
        GPSLatitude:         BIZ.gpsLat,
        GPSLongitude:        BIZ.gpsLon,

        // IPTC core
        'IPTC:ObjectName':               seoName,
        'IPTC:Caption-Abstract':         description,
        'IPTC:Writer-Editor':            BIZ.creator,
        'IPTC:CopyrightNotice':          BIZ.copyright,
        'IPTC:Keywords':                 keywords,
        'IPTC:City':                     BIZ.city,
        'IPTC:Province-State':           BIZ.region,
        'IPTC:Country-PrimaryLocationName': BIZ.country,
        'IPTC:Country-PrimaryLocationCode': BIZ.countryCode,

        // XMP Dublin Core (broad tool support)
        'XMP-dc:Description':            description,
        'XMP-dc:Creator':                BIZ.creator,
        'XMP-dc:Rights':                 BIZ.copyright,
        'XMP-dc:Subject':                keywords,

        // XMP Photoshop (city/region visible in Adobe tools)
        'XMP-photoshop:City':            BIZ.city,
        'XMP-photoshop:State':           BIZ.region,
        'XMP-photoshop:Country':         BIZ.country,

        // XMP Rights
        'XMP-xmpRights:WebStatement':    BIZ.url,
        'XMP-xmpRights:Marked':          true,
      },
      ['-overwrite_original'],
    );
    return true;
  } catch (err) {
    return `${err.message}`;
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(SOURCE)) {
    console.error(`\n  ✖  source-images/ not found at:\n     ${SOURCE}`);
    console.error('     Create it and add one sub-folder per service, e.g.:\n');
    console.error('       source-images/gallery/porsche-911-gt3.jpg');
    console.error('       source-images/mobile-valeting/tesla-model-3-foam.jpg\n');
    process.exit(1);
  }

  let serviceDirs = readdirSync(SOURCE).filter((d) => {
    const full = join(SOURCE, d);
    return statSync(full).isDirectory() && !d.startsWith('_') && !d.startsWith('.');
  });

  if (ONLY) {
    serviceDirs = serviceDirs.filter((d) => d === ONLY);
    if (!serviceDirs.length) {
      console.error(`\n  ✖  No folder named "${ONLY}" in source-images/\n`);
      process.exit(1);
    }
  }

  if (!serviceDirs.length) {
    console.error('\n  ✖  No service sub-folders found in source-images/\n');
    process.exit(1);
  }

  console.log(`\n  Latin King Detailing — Image Pipeline`);
  console.log(`  ${'─'.repeat(50)}`);
  if (DRY) console.log('  MODE: DRY RUN (no files will be written)\n');

  const allEntries  = [];
  let totalInBytes  = 0;
  let totalOutBytes = 0;
  let totalWritten  = 0;
  let totalSkipped  = 0;
  const tagErrors   = [];

  for (const dir of serviceDirs) {
    const serviceSlug = dir;
    const svcDefault  = SERVICE_DEFAULTS[serviceSlug] ?? {
      label:   serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      profile: 'gallery',
    };

    // Load optional _meta.json
    const metaPath = join(SOURCE, dir, '_meta.json');
    const meta     = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, 'utf8')) : {};

    const profile  = meta.profile ?? svcDefault.profile;
    const widths   = PROFILES[profile] ?? PROFILES.gallery;
    const imgMetas = meta.images ?? {};

    // Collect source images (sorted for deterministic index)
    const sources = readdirSync(join(SOURCE, dir))
      .filter((f) => isImage(f))
      .sort();

    if (!sources.length) {
      console.log(`\n  📁  ${dir}/  — no images found, skipping`);
      continue;
    }

    const outDir = join(OUT_ROOT, serviceSlug);
    if (!DRY) mkdirSync(outDir, { recursive: true });

    console.log(`\n  📁  ${dir}/  [${sources.length} image(s), profile: ${profile}]`);

    for (let i = 0; i < sources.length; i++) {
      const filename   = sources[i];
      const inputPath  = join(SOURCE, dir, filename);
      const inputStat  = statSync(inputPath);
      const inputBytes = inputStat.size;
      totalInBytes += inputBytes;

      // Vehicle metadata from _meta.json or filename inference
      const imgMeta     = imgMetas[filename] ?? {};
      const vehicleSlug = imgMeta.vehicle !== undefined
        ? imgMeta.vehicle
        : inferVehicleFromName(filename);
      const vehicleLabel = imgMeta.vehicleLabel ?? vehicleSlug.replace(/-/g, ' ');

      // SEO filename base
      const vehiclePart = vehicleSlug ? `-${vehicleSlug}` : '';
      const seoBase     = `${serviceSlug}${vehiclePart}-urmston-latin-king-detailing-${pad(i + 1)}`;

      // Alt + description
      const alt         = imgMeta.alt         ?? buildAlt(svcDefault.label, vehicleLabel);
      const description = imgMeta.description ?? buildDescription(svcDefault.label, vehicleLabel);
      const keywords    = [...BIZ.keywords, ...(imgMeta.keywords ?? [])];

      const outputWidths = [];
      let fileOutBytes   = 0;
      let largestPath    = null;

      for (const w of widths) {
        const outName = `${seoBase}-${w}w.webp`;
        const outPath = join(outDir, outName);

        // Skip if exists and not forced
        if (!FORCE && !DRY && existsSync(outPath)) {
          const existingBytes = statSync(outPath).size;
          fileOutBytes  += existingBytes;
          totalOutBytes += existingBytes;
          outputWidths.push(w);
          if (w === widths[0]) largestPath = outPath;
          totalSkipped++;
          continue;
        }

        try {
          if (!DRY) {
            const result = await sharp(inputPath)
              .rotate()                                         // honour EXIF orientation
              .resize(w, null, {
                withoutEnlargement: true,
                fit: 'inside',
              })
              .webp({
                quality:          82,
                effort:           6,
                smartSubsample:   true,
                nearLossless:     false,
              })
              .toFile(outPath);

            const outBytes = statSync(outPath).size;
            fileOutBytes  += outBytes;
            totalOutBytes += outBytes;
            totalWritten++;
          }

          outputWidths.push(w);
          if (w === widths[0]) largestPath = outPath;
        } catch (err) {
          console.error(`    ✖  sharp error (${w}w): ${err.message}`);
        }
      }

      // Geo-tag the largest variant
      if (!DRY && largestPath && existsSync(largestPath)) {
        const tagResult = await tagFile(largestPath, { description, keywords, seoName: seoBase });
        if (tagResult !== true) {
          tagErrors.push({ file: basename(largestPath), error: tagResult });
        }
      }

      const saving = pct(fileOutBytes, inputBytes);
      const tag    = DRY ? '[DRY]' : outputWidths.length === widths.length ? '✓' : '⚠';
      console.log(
        `    ${tag}  ${filename}\n` +
        `       → ${outputWidths.map((w) => `${w}w`).join(', ')}  ` +
        `(${kb(inputBytes)} KB → ${DRY ? '?' : kb(fileOutBytes)} KB, -${DRY ? '?' : saving}%)`
      );

      allEntries.push({
        slug:    seoBase,
        service: serviceSlug,
        alt,
        widths:  outputWidths,
        profile,
        src:     `/images/${serviceSlug}/${seoBase}-${widths[0]}w.webp`,
        srcset:  outputWidths
          .map((w) => `/images/${serviceSlug}/${seoBase}-${w}w.webp ${w}w`)
          .join(', '),
      });
    }
  }

  // ─── TypeScript manifest ───────────────────────────────────────────────────
  if (!DRY && allEntries.length > 0) {
    writeManifest(allEntries);
    console.log(`\n  📄  Manifest written → src/lib/images.ts  (${allEntries.length} entries)`);
  }

  // ─── Tag error summary ─────────────────────────────────────────────────────
  if (tagErrors.length) {
    console.log(`\n  ⚠   EXIF/XMP write failed on ${tagErrors.length} file(s):`);
    tagErrors.forEach(({ file, error }) => console.log(`       ${file}: ${error}`));
    console.log('      (WebP files are still valid — metadata is optional)');
  }

  // ─── Summary ──────────────────────────────────────────────────────────────
  const overallSaving = pct(totalOutBytes, totalInBytes);
  console.log(`\n  ${'─'.repeat(50)}`);
  if (!DRY) {
    console.log(`  ✅  Written:  ${totalWritten} file(s)`);
    if (totalSkipped) console.log(`  ⏭   Skipped:  ${totalSkipped} (already up-to-date; use --force to redo)`);
    console.log(`  📦  Source:   ${kb(totalInBytes)} KB`);
    console.log(`  🚀  Output:   ${kb(totalOutBytes)} KB  (${overallSaving}% smaller)`);
  } else {
    console.log(`  ℹ️   DRY RUN — ${allEntries.length} image(s) would be processed`);
  }
  console.log(`  ${'─'.repeat(50)}\n`);

  await exiftool.end();
}

// ─── TypeScript manifest writer ───────────────────────────────────────────────
function writeManifest(entries) {
  const body = `// Auto-generated by scripts/optimize-images.mjs — do not edit manually.
// Regenerate: npm run optimize-images

export interface SiteImage {
  /** Unique SEO slug (also the filename base) */
  slug: string;
  /** Service folder the image belongs to */
  service: string;
  /** Pre-built alt text for <img alt="..."> */
  alt: string;
  /** Pixel widths of available WebP variants */
  widths: number[];
  /** Size profile used during generation */
  profile: 'hero' | 'gallery' | 'og' | 'thumb';
  /** Canonical src (largest variant) */
  src: string;
  /** Ready-to-use srcset string for <img srcset="..."> */
  srcset: string;
}

export const SITE_IMAGES: readonly SiteImage[] = ${JSON.stringify(entries, null, 2)} as const;

/** Return all images for a given service slug */
export function getImagesByService(service: string): SiteImage[] {
  return SITE_IMAGES.filter((img) => img.service === service);
}

/** Return the first hero-profile image for a service, or the first image overall */
export function getHeroImage(service?: string): SiteImage | undefined {
  const pool = service ? getImagesByService(service) : [...SITE_IMAGES];
  return pool.find((img) => img.profile === 'hero') ?? pool[0];
}

/** Return all gallery images, optionally filtered by service */
export function getGalleryImages(service?: string): SiteImage[] {
  const pool = service ? getImagesByService(service) : [...SITE_IMAGES];
  return pool.filter((img) => img.profile === 'gallery');
}
`;
  writeFileSync(MANIFEST, body, 'utf8');
}

main().catch((err) => {
  console.error('\n  ✖  Pipeline error:', err.message ?? err);
  exiftool.end().catch(() => {});
  process.exit(1);
});
