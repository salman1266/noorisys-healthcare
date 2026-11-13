const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = u.origin + redirectUrl;
        }
        return fetchHtml(redirectUrl).then(resolve, reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const sites = [
    { name: 'noorisys', url: 'https://noorisys.com/' },
    { name: 'clinicdots', url: 'https://landing.clinicdots.com/' },
    { name: 'nakbho', url: 'https://nakbho.com/' },
    { name: 'welzo', url: 'https://welzo.com/' },
    { name: 'lpc', url: 'https://lpc.federate.healthcare/' }
  ];

  for (const s of sites) {
    try {
      const html = await fetchHtml(s.url);
      console.log('=== ' + s.name + ' (' + s.url + ') ===');
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let m;
      const images = [];
      while ((m = imgRegex.exec(html)) !== null) {
        images.push(m[0]);
      }
      console.log('Total images found:', images.length);
      const logoImgs = images.filter(img => /logo/i.test(img) || /brand/i.test(img));
      console.log('Logo/brand images:', logoImgs.slice(0, 5));
      if (logoImgs.length === 0) {
        console.log('First 3 images:', images.slice(0, 3));
      }

      // Check SVG logos
      const svgRegex = /<svg[^>]*>[\s\S]*?<\/svg>/gi;
      const svgs = [];
      while ((m = svgRegex.exec(html)) !== null) {
        if (/logo/i.test(m[0]) || svgs.length < 3) {
          svgs.push(m[0].slice(0, 300) + '...');
        }
      }
      console.log('SVG samples:', svgs.slice(0, 2));
    } catch (e) {
      console.log(s.name, 'Error:', e.message);
    }
  }
}

run();
