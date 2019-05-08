import { locBrowserCaps } from '../browser-capabilities';

export async function setup(browser) {
  await browser.init(locBrowserCaps);
}

export async function teardown(browser) {
  await browser.quit();
}
  