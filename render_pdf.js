const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('Launching Chrome for PDF generation...');
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--font-render-hinting=none',
      '--allow-file-access-from-files'
    ]
  });

  const page = await browser.newPage();
  
  // Set high DPI viewport
  await page.setViewport({
    width: 1240,
    height: 1754,
    deviceScaleFactor: 2
  });

  const htmlPath = path.resolve(__dirname, 'brochure.html');
  console.log('Loading brochure HTML from:', htmlPath);
  await page.goto('file://' + htmlPath, {
    waitUntil: ['load', 'networkidle0'],
    timeout: 60000
  });

  // Evaluate and ensure all images are fully decoded
  await page.evaluate(async () => {
    const selectors = Array.from(document.querySelectorAll('img'));
    await Promise.all(selectors.map(img => {
      if (img.complete) return;
      return new Promise((resolve, reject) => {
        img.addEventListener('load', resolve);
        img.addEventListener('error', resolve); // continue even if error
      });
    }));
    await document.fonts.ready;
  });

  console.log('Images and fonts loaded. Rendering PDF...');

  const outputPath = path.resolve(__dirname, 'nomadller-russia-winter-adventure.pdf');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });

  console.log('PDF successfully generated at:', outputPath);
  
  // Copy to Downloads folder as well for instant user access
  const downloadsPath = '/Users/nomadller/Downloads/nomadller-russia-winter-adventure.pdf';
  try {
    fs.copyFileSync(outputPath, downloadsPath);
    console.log('Copied PDF to user Downloads at:', downloadsPath);
  } catch (err) {
    console.warn('Could not copy to Downloads:', err.message);
  }

  await browser.close();
}

generatePDF().catch(err => {
  console.error('PDF Generation failed:', err);
  process.exit(1);
});
