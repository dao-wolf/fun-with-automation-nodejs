const sel = require('selenium-webdriver');
const browserCapabilitiesFactory = require('./browser-capabilities-factory');
const browserCaps = browserCapabilitiesFactory();
const BASE_URL = process.env.BASE_URL || '';
const SELENIUM_REMOTE_URL = process.env.SELENIUM_REMOTE_URL || 'http://localhost:4444/wd/hub';
// You can change the target browser at runtime through the SELENIUM_BROWSER environment variable.
const SELENIUM_BROWSER = process.env.SELENIUM_BROWSER || 'chrome';

/**
 * create browser Object and property functions
 * @return {Object} browser
*/
function browserFactory() {
  const browser = {};

  // Switch statement for setting up a browser with respective capabilites
  let caps;
  switch (SELENIUM_BROWSER) {
    case 'chrome':
      caps = browserCaps.getChromeCapabilities();
      break;
    case 'firefox':
      break;
    case 'safari':
      break;
    case 'ie':
      break;
    default:
      console.error(`Unhandled switch condition for ${SELENIUM_BROWSER}`);
  }

  // Build a remote WebDriver with supplied browser options
  browser.driver = new sel.Builder()
    .withCapabilities(caps)
    .usingServer(SELENIUM_REMOTE_URL)
    .build();

  // driver navigates browser to BASE_URL
  browser.navigate = async function () {
    await browser.driver.get(BASE_URL);
  }

  // driver quits browser
  browser.quit = async function () {
    await browser.driver.quit();
  }

  return browser;
}
module.exports = browserFactory;
