const fs = require('fs');
const path = require('path');

const publicLogosDir = path.join(__dirname, '..', 'public', 'logos');
const nakbhoSvg = fs.readFileSync(path.join(publicLogosDir, 'nakbho.svg'), 'utf8');
const match = nakbhoSvg.match(/base64,([^"']+)/);
if (match) {
  const buf = Buffer.from(match[1], 'base64');
  fs.writeFileSync(path.join(publicLogosDir, 'nakbho.png'), buf);
  console.log('Saved nakbho.png:', buf.length, 'bytes');
}
