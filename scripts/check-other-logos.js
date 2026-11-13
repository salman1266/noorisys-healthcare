const https = require('https');
const http = require('http');
const fs = require('fs');

const candidates = [
  'https://curigo.in',
  'https://curigo.com',
  'https://aeromedical.co.uk',
  'https://santeya.com',
  'https://iyara.health',
  'https://iyara.co',
  'https://coursiermedical.com',
  'https://izikare.com'
];

async function checkUrl(u) {
  return new Promise((resolve) => {
    const client = u.startsWith('https') ? https : http;
    const req = client.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 6000 }, (res) => {
      let data = '';
      res.on('data', chunk => {
        if (data.length < 50000) data += chunk;
      });
      res.on('end', () => {
        const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
        let m;
        const imgs = [];
        while ((m = imgRegex.exec(data)) !== null) {
          if (/logo/i.test(m[0]) || /brand/i.test(m[0])) {
            imgs.push(m[1]);
          }
        }
        resolve({ url: u, status: res.statusCode, logos: imgs });
      });
    });
    req.on('error', (e) => resolve({ url: u, error: e.message }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ url: u, error: 'timeout' });
    });
  });
}

async function run() {
  for (const c of candidates) {
    const res = await checkUrl(c);
    console.log(res);
  }
}

run();
