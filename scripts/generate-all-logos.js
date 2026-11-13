const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

const customLogos = {
  'lpc-federate.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#10B981" stroke-width="2"/>
    <path d="M40 22v36M22 40h36" stroke="#10B981" stroke-width="5" stroke-linecap="round"/>
    <circle cx="40" cy="40" r="6" fill="#00E5FF"/>
    <circle cx="40" cy="22" r="3.5" fill="#10B981"/>
    <circle cx="40" cy="58" r="3.5" fill="#10B981"/>
    <circle cx="22" cy="40" r="3.5" fill="#10B981"/>
    <circle cx="58" cy="40" r="3.5" fill="#10B981"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="22" letter-spacing="1">LPC FEDERATE</text>
    <text x="86" y="56" fill="#10B981" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">PRIMARY CARE NETWORK</text>
  </svg>`,

  'fastercheck.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#00E5FF" stroke-width="2"/>
    <path d="M22 42l11 11 25-25" stroke="#00E5FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 26h12M46 54h10" stroke="#43E6D0" stroke-width="3" stroke-linecap="round"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="22" letter-spacing="1">FASTERCHECK</text>
    <text x="86" y="56" fill="#00E5FF" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">SMART INTAKE KIOSK</text>
  </svg>`,

  'chapchap.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#EF4444" stroke-width="2"/>
    <path d="M22 40h10l5-12 7 24 6-16 4 4h10" stroke="#EF4444" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="37" cy="28" r="2.5" fill="#FBBF24"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="22" letter-spacing="1">CHAPCHAP</text>
    <text x="86" y="56" fill="#EF4444" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">EMERGENCY DISPATCH</text>
  </svg>`,

  'curigo.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#12CDB5" stroke-width="2"/>
    <rect x="25" y="25" width="30" height="15" rx="7.5" transform="rotate(-30 25 25)" stroke="#12CDB5" stroke-width="3"/>
    <path d="M30 33l13-7.5" stroke="#00E5FF" stroke-width="3"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="22" letter-spacing="1">CURIGO</text>
    <text x="86" y="56" fill="#12CDB5" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">PHARMACY PLATFORM</text>
  </svg>`,

  'santeya.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#3B82F6" stroke-width="2"/>
    <path d="M40 26c-4-6-13-4-15 3-3 8 15 23 15 23s18-15 15-23c-2-7-11-9-15-3z" fill="none" stroke="#3B82F6" stroke-width="3"/>
    <circle cx="40" cy="38" r="4" fill="#00E5FF"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="22" letter-spacing="1">SANTEYA</text>
    <text x="86" y="56" fill="#3B82F6" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">TELEHEALTH & CARE</text>
  </svg>`,

  'coursier-medical.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#00E5FF" stroke-width="2"/>
    <path d="M22 45h22l6-10H32l-4 6H22z" fill="#00E5FF"/>
    <circle cx="30" cy="51" r="4" fill="#FFFFFF"/>
    <circle cx="48" cy="51" r="4" fill="#FFFFFF"/>
    <path d="M35 24v12M29 30h12" stroke="#10B981" stroke-width="3" stroke-linecap="round"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="20" letter-spacing="1">COURSIER MÉDICAL</text>
    <text x="86" y="56" fill="#00E5FF" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">COLD-CHAIN COURIER</text>
  </svg>`,

  'iyara.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#8B5CF6" stroke-width="2"/>
    <circle cx="40" cy="40" r="16" stroke="#8B5CF6" stroke-width="3"/>
    <path d="M40 28v24M28 40h24" stroke="#C4B5FD" stroke-width="2.5" stroke-linecap="round"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="22" letter-spacing="1">IYARA</text>
    <text x="86" y="56" fill="#8B5CF6" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">CONNECTED WELLNESS</text>
  </svg>`,

  'izikare.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#10B981" stroke-width="2"/>
    <path d="M26 40l9 9 19-19" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="22" y="20" width="36" height="40" rx="6" stroke="#00E5FF" stroke-width="2" fill="none"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="22" letter-spacing="1">IZIKARE</text>
    <text x="86" y="56" fill="#10B981" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">CLINICAL STAFFING</text>
  </svg>`,

  'hanadoc.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#00E5FF" stroke-width="2"/>
    <path d="M30 26h20v28H30z" fill="none" stroke="#00E5FF" stroke-width="2.5" rx="3"/>
    <path d="M35 34h10M35 42h7" stroke="#43E6D0" stroke-width="2" stroke-linecap="round"/>
    <circle cx="48" cy="48" r="8" fill="#0D1C2E" stroke="#D4A373" stroke-width="2"/>
    <path d="M48 45v6M45 48h6" stroke="#D4A373" stroke-width="2"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="22" letter-spacing="1">HANADOC</text>
    <text x="86" y="56" fill="#00E5FF" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">CLINIC EMR SUITE</text>
  </svg>`,

  'allodocta.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#06B6D4" stroke-width="2"/>
    <circle cx="40" cy="34" r="9" stroke="#06B6D4" stroke-width="2.5"/>
    <path d="M26 52c0-7 6-11 14-11s14 4 14 11" stroke="#06B6D4" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M48 24l8 4-8 4v-8z" fill="#00E5FF"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="22" letter-spacing="1">ALLODOCTA</text>
    <text x="86" y="56" fill="#06B6D4" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">TELE-CONSULTATION</text>
  </svg>`,

  'blood-donation.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#DC2626" stroke-width="2"/>
    <path d="M40 22s-14 16-14 24a14 14 0 1028 0c0-8-14-24-14-24z" fill="#DC2626"/>
    <path d="M40 34v12M34 40h12" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="20" letter-spacing="1">BLOOD LIFELINK</text>
    <text x="86" y="56" fill="#DC2626" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">EMERGENCY DONOR NETWORK</text>
  </svg>`,

  'aeromedical.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" fill="none">
    <rect width="64" height="64" x="8" y="8" rx="16" fill="#0D1C2E" stroke="#00E5FF" stroke-width="2"/>
    <path d="M40 24l16 14-6 2-10-8-10 8-6-2 16-14z" fill="#00E5FF"/>
    <path d="M40 38v16M33 46h14" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M22 36l18-8 18 8" stroke="#D4A373" stroke-width="2" stroke-linecap="round"/>
    <text x="86" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="20" letter-spacing="1">AEROMEDICAL</text>
    <text x="86" y="56" fill="#00E5FF" font-family="monospace" font-weight="600" font-size="11" letter-spacing="1.5">CAA & EASA FLIGHT EXAMS</text>
  </svg>`
};

for (const [filename, content] of Object.entries(customLogos)) {
  const filePath = path.join(logosDir, filename);
  fs.writeFileSync(filePath, content.trim());
  console.log('Generated ' + filename);
}
