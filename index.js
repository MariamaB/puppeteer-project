const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  // const browser = await puppeteer.launch({headless: false,});
  const page = await browser.newPage();
  await page.emulateMediaType('screen');
  await page.setViewport({ width: 1980, height: 1100 });
  await page.goto('http://localhost:4200/trust-build-canvas', {waitUntil: "networkidle0"});
  await page.screenshot({path: 'canvas.png'});
  await page.emulateMediaType('screen');
  await page.pdf({
    printBackground: true,
    path: "webpage.pdf",
    format: "A4",
    landscape: true,
//     margin: {
//         top: "20px",
//         bottom: "40px",
//         left: "20px",
//         right: "20px"
//     }
});
console.log('done');
  // await browser.waitForTarget(()=> false);
  await browser.close();
  await process.exit();
})();