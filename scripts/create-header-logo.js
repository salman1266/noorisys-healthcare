const fs = require('fs');
const path = require('path');

const publicLogosDir = path.join(__dirname, '..', 'public', 'logos');

// Create the official Noorisys Healthcare Lockup SVG
const noorisysHealthcareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 54" fill="none">
  <!-- Iconic Noorisys Emblem Mark -->
  <g transform="translate(0, 3) scale(0.68)">
    <circle cx="36" cy="36" r="34" stroke="rgba(255,255,255,0.18)" stroke-width="2.5" fill="#07111F"/>
    <!-- Magenta bar -->
    <path d="M28 58c-3.6 0-6.6-2.9-6.6-6.6V18.2c0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6v33.2c-.1 3.6-3 6.6-6.6 6.6" fill="#f9004d"/>
    <!-- Yellow bar -->
    <path d="M44 41.4c-3.6 0-6.6-2.9-6.6-6.6V18.2c0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6v16.6c0 3.6-2.9 6.6-6.6 6.6" fill="#ffc20f"/>
    <!-- Orange circle node -->
    <circle cx="44" cy="51" r="6" fill="#f57722"/>
  </g>

  <!-- NOORISYS Wordmark -->
  <text x="62" y="34" fill="#FFFFFF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="900" font-size="22" letter-spacing="1.2">NOORISYS</text>

  <!-- Sleek Vertical Divider Line -->
  <line x1="196" y1="12" x2="196" y2="42" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" stroke-linecap="round"/>

  <!-- HEALTHCARE Division -->
  <g transform="translate(208, 0)">
    <text x="0" y="26" fill="#00E5FF" font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-weight="800" font-size="16" letter-spacing="2">HEALTHCARE</text>
    <circle cx="134" cy="21" r="2.5" fill="#10B981"/>
    <text x="0" y="42" fill="#94A3B8" font-family="'JetBrains Mono', monospace, sans-serif" font-weight="500" font-size="8.5" letter-spacing="0.5">A Noorisys Technologies Portfolio</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicLogosDir, 'noorisys-healthcare.svg'), noorisysHealthcareSvg.trim());
console.log('Created noorisys-healthcare.svg');
