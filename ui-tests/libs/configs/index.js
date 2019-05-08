
// BROWSER ENV VARIABLES
export const { IS_LOCAL_SERVER } = process.env;
export const REMOTE_SERVER = '';
export const BASE_URL = process.env.BASE_URL;


// SELENIUM VARIABLES
export const LOCAL_SELENIUM_SERVER = 'http://localhost:4444/wd/hub/';

export const SERVER = IS_LOCAL_SERVER ? LOCAL_SELENIUM_SERVER : REMOTE_SERVER;

// BROWSER CAPS (LOCAL/REMOTE) ENV VARIABLES
export const { HEADLESS_BROWSER, OS, ENABLE_SNAPSHOTS } = process.env;
export const BROWSER_NAME = process.env.BROWSER_NAME || 'Chrome';
export const BROWSER_VERSION = process.env.BROWSER_VERSION;
