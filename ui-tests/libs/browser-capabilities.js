import { HEADLESS_BROWSER, OS, BROWSER_NAME, BROWSER_VERSION } from './configs';

function buildLocalBrowser(browserName, version, platform) {
  if (browserName === 'chrome' && HEADLESS_BROWSER) {
    return {
      browserName,
      version,
      chromeOptions: {
        args: ['--headless', '--disable-gpu'],
      },
      platform,
    };
  }
  return {
    browserName,
    version,
    platform,
  };
}

// export an object of local browser capabilities
export const locBrowserCaps = buildLocalBrowser(
  BROWSER_NAME.toLowerCase(),
  BROWSER_VERSION,
  OS
);
