const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

const logoMap = {
  nakbho: '/logos/nakbho.svg',
  clinicdots: '/logos/clinicdots-white.svg',
  'lpc-federate': '/logos/lpc-federate.svg',
  welzo: '/logos/welzo.webp',
  fastercheck: '/logos/fastercheck.svg',
  curigo: '/logos/curigo.svg',
  chapchap: '/logos/chapchap.svg',
  santeya: '/logos/santeya.svg',
  'coursier-medical': '/logos/coursier-medical.svg',
  iyara: '/logos/iyara.svg',
  izikare: '/logos/izikare.svg',
  hanadoc: '/logos/hanadoc.svg',
  allodocta: '/logos/allodocta.svg',
  'blood-donation': '/logos/blood-donation.svg',
  aeromedical: '/logos/aeromedical.svg'
};

for (const [id, logo] of Object.entries(logoMap)) {
  const targetRegex = new RegExp('(id:\\s*["\']' + id + '["\'][\\s\\S]*?icon:\\s*["\'][^"\']+["\'],?)', 'g');
  content = content.replace(targetRegex, (match) => {
    if (match.includes('logoUrl:')) return match;
    return match + '\n    logoUrl: "' + logo + '",';
  });
}

fs.writeFileSync(filePath, content);
console.log('Updated src/data/products.ts with logos!');
