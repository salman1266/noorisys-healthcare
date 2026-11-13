const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const publicLogosDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(publicLogosDir)) {
  fs.mkdirSync(publicLogosDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = u.origin + redirectUrl;
        }
        return downloadFile(redirectUrl, dest).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Failed with status: ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  const assetsToDownload = [
    {
      name: 'noorisys.svg',
      url: 'https://noorisys.com/noorisys-logo.svg'
    },
    {
      name: 'clinicdots.svg',
      url: 'https://landing.clinicdots.com/images/logo.svg'
    },
    {
      name: 'nakbho.svg',
      url: 'https://nakbho.com/wp-content/uploads/2026/08/Logo-Black-1024-x-576-1-1-3.svg'
    },
    {
      name: 'nakbho-white.png',
      url: 'https://nakbho.com/wp-content/uploads/2025/04/logo_white-3.png'
    },
    {
      name: 'welzo.webp',
      url: 'https://welzo.com/cdn/shop/files/welzo-logo.webp?v=1792040691&width=600'
    }
  ];

  for (const item of assetsToDownload) {
    const targetPath = path.join(publicLogosDir, item.name);
    try {
      console.log('Downloading ' + item.url + ' -> ' + item.name);
      await downloadFile(item.url, targetPath);
      const stat = fs.statSync(targetPath);
      console.log('Downloaded ' + item.name + ' (' + stat.size + ' bytes)');
    } catch (e) {
      console.log('Error downloading ' + item.name + ':', e.message);
    }
  }

  // Also inspect aeromedical and other product links
  const otherUrls = [
    'https://aeromedical.co.uk',
    'https://landing.clinicdots.com/hospital'
  ];

  for (const u of otherUrls) {
    try {
      console.log('Checking ' + u + '...');
      const client = u.startsWith('https') ? https : http;
      const html = await new Promise((res, rej) => {
        client.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (resp) => {
          let data = '';
          resp.on('data', c => data += c);
          resp.on('end', () => res(data));
        }).on('error', rej);
      });
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let m;
      const imgs = [];
      while ((m = imgRegex.exec(html)) !== null) {
        if (/logo/i.test(m[0])) imgs.push(m[0]);
      }
      console.log('Logo imgs in ' + u + ':', imgs.slice(0, 3));
    } catch (e) {
      console.log('Error checking ' + u + ':', e.message);
    }
  }
}

main();
