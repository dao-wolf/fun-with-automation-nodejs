const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const capabilities = require('selenium-webdriver/lib/capabilities').Capabilities;

/**
 * create browserCaps Object and property functions
 * @return {Object} browserCaps
*/
function browserCapabilitiesFactory() {
  const browserCaps = {};

  let caps;
  let options;

  /**
   * Sets up Chrome browser capabilites and options
   * @return {Capabilities} caps
  */
  browserCaps.getChromeCapabilities = function () {
    caps = capabilities.chrome();
    options = new chrome.Options();
    options.addArguments(
      '--disable-geolocation',
      '--incognito',
      '--start-maximized');
    caps.set('chromeOptions', options);
    return caps;
  }

  return browserCaps;
}
module.exports = browserCapabilitiesFactory;
