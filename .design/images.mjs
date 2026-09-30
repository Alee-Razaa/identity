// One-off asset prep: node .design/images.mjs <rawDir>
import sharp from 'sharp';
const raw = process.argv[2];
const j = { quality: 86, mozjpeg: true };
await sharp('public/background.png').jpeg({ quality: 88, mozjpeg: true }).toFile('assets/road.jpg');
await sharp('public/Profile.png').extract({ left: 152, top: 0, width: 700, height: 875 }).jpeg(j).toFile('assets/portrait.jpg');
for (const n of ['dashboard', 'alerts', 'clips', 'live', 'main', 'event']) await sharp(`${raw}/sl-${n}.jpeg`).extract({ left: 0, top: 0, width: 576, height: 1210 }).jpeg(j).toFile(`assets/smartlens-${n}.jpg`);
await sharp(`${raw}/crypto.png`).extract({ left: 0, top: 0, width: 1440, height: 900 }).jpeg(j).toFile('assets/cryptosocial.jpg');
await sharp(`${raw}/lead.png`).extract({ left: 320, top: 40, width: 800, height: 500 }).jpeg(j).toFile('assets/lead-workspace.jpg');
await sharp(`${raw}/pph.png`).extract({ left: 0, top: 0, width: 1800, height: 1125 }).resize(1440).jpeg(j).toFile('assets/job-radar.jpg');
console.log('done');
