const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', 'public', 'logos', 'noorisys-white.svg');
let svg = fs.readFileSync(srcPath, 'utf8');

// Path 2 is the tiny "TECHNOLOGIES PVT. LTD." subtext
svg = svg.replace(/<path fill="#94A3B8" d="M90\.6[\s\S]*?\/>/, '');

// Adjust viewBox to crop tightly around the logo without excess empty bottom padding
svg = svg.replace('viewBox="0 0 300 91"', 'viewBox="4 10 292 65"');

const destPath = path.join(__dirname, '..', 'public', 'logos', 'noorisys-clean-white.svg');
fs.writeFileSync(destPath, svg);
console.log('Created public/logos/noorisys-clean-white.svg successfully');
