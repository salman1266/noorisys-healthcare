const fs = require('fs');
const path = require('path');

const publicLogosDir = path.join(__dirname, '..', 'public', 'logos');

// 1. Process Noorisys logo for dark backgrounds
const noorisysSvg = fs.readFileSync(path.join(publicLogosDir, 'noorisys.svg'), 'utf8');

// The original paths without fills default to black. We can make a version where text is white.
// Let's replace the text paths that don't have style="...fill:..." to have fill="white".
let noorisysWhite = noorisysSvg
  .replace('<path d="M86.9 56.6V30.9', '<path fill="#FFFFFF" d="M86.9 56.6V30.9')
  .replace('<path d="M90.6 67.2h-1.3', '<path fill="#94A3B8" d="M90.6 67.2h-1.3')
  .replace('<path d="M75.2 45.5C75.2', '<path fill="#FFFFFF" d="M75.2 45.5C75.2');

fs.writeFileSync(path.join(publicLogosDir, 'noorisys-white.svg'), noorisysWhite);
console.log('Created noorisys-white.svg');

// 2. Process ClinicDots logo for dark backgrounds
const clinicdotsSvg = fs.readFileSync(path.join(publicLogosDir, 'clinicdots.svg'), 'utf8');
// In clinicdots.svg: .cls-1{fill:#1b255b;}.cls-2{fill:#8c1030;}.cls-3{fill:#a07d2c;}.cls-4{fill:#282828;}
// For dark mode: .cls-1 -> #FFFFFF (or #00E5FF), .cls-4 -> #94A3B8, keeping cls-2 and cls-3 signature brand colors.
let clinicdotsWhite = clinicdotsSvg
  .replace('.cls-1{fill:#1b255b;}', '.cls-1{fill:#FFFFFF;}')
  .replace('.cls-4{fill:#282828;}', '.cls-4{fill:#94A3B8;}');

fs.writeFileSync(path.join(publicLogosDir, 'clinicdots-white.svg'), clinicdotsWhite);
console.log('Created clinicdots-white.svg');

// Also create a version with clinical teal accents
let clinicdotsTeal = clinicdotsSvg
  .replace('.cls-1{fill:#1b255b;}', '.cls-1{fill:#00E5FF;}')
  .replace('.cls-4{fill:#282828;}', '.cls-4{fill:#E2E8F0;}');

fs.writeFileSync(path.join(publicLogosDir, 'clinicdots-teal.svg'), clinicdotsTeal);
console.log('Created clinicdots-teal.svg');

// 3. Inspect Nakbho SVG
const nakbhoSvg = fs.readFileSync(path.join(publicLogosDir, 'nakbho.svg'), 'utf8');
console.log('nakbho.svg size:', nakbhoSvg.length);
