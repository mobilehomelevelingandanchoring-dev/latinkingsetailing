/**
 * Post-deploy IndexNow ping — submits all site URLs to Bing/Yandex for instant indexing.
 * Run after every Vercel production deploy: node scripts/ping-indexnow.mjs
 */

const KEY = "b4c7e2a9f1d5e8b3c6a2f9d4e7b1a8c3";
const HOST = "www.latinkingdetailing.co.uk";
const BASE = `https://${HOST}`;

const URLS = [
  "/",
  "/services",
  "/services/mobile-valeting",
  "/services/car-detailing",
  "/services/paint-correction",
  "/services/machine-polishing",
  "/services/ceramic-coating",
  "/services/paint-protection-film",
  "/services/interior-detailing",
  "/services/exterior-detailing",
  "/services/deep-cleaning",
  "/services/engine-bay-cleaning",
  "/areas",
  "/areas/urmston",
  "/areas/flixton",
  "/areas/stretford",
  "/areas/davyhulme",
  "/areas/sale",
  "/areas/old-trafford",
  "/areas/chorlton-cum-hardy",
  "/areas/eccles",
  "/areas/salford",
  "/areas/altrincham",
  "/areas/carrington",
  "/areas/partington",
  "/areas/irlam",
  "/areas/timperley",
  "/areas/didsbury",
  "/gallery",
  "/reviews",
  "/faq",
  "/blog",
  "/blog/ceramic-coating-vs-wax",
  "/blog/how-to-maintain-ceramic-coating",
  "/blog/mobile-detailing-vs-car-wash",
  "/contact",
  "/book",
  "/about",
  "/privacy-policy",
  "/sitemap-html",
].map((path) => `${BASE}${path}`);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList: URLS,
};

async function ping() {
  console.log(`Pinging IndexNow with ${URLS.length} URLs…`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.ok || res.status === 202) {
    console.log(`✓ IndexNow accepted (${res.status})`);
  } else {
    const text = await res.text().catch(() => "");
    console.error(`✗ IndexNow returned ${res.status}: ${text}`);
    process.exit(1);
  }
}

ping().catch((err) => {
  console.error("IndexNow ping failed:", err.message);
  process.exit(1);
});
