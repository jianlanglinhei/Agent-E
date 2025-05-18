const { chromium } = require('playwright');

function ensureProtocol(url) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  return url;
}

async function openUrl(url, timeout = 3000) {
  url = ensureProtocol(url);
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await page.goto(url, { timeout });
  } catch (e) {
    console.warn(`Navigation to ${url} failed: ${e}`);
  }
  const title = await page.title();
  console.log(`Page loaded: ${page.url()}, Title: ${title}`);
  // Keep the browser open for manual inspection
  await page.waitForTimeout(timeout);
  await browser.close();
}

const [,, urlArg, timeoutArg] = process.argv;
if (!urlArg) {
  console.log('Usage: node open_url.js <url> [timeout_ms]');
  process.exit(1);
}
openUrl(urlArg, parseInt(timeoutArg || '3000', 10));
