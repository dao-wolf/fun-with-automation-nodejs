import { Builder } from 'selenium-webdriver';
import { SERVER, BASE_URL } from './configs';

/**
 * create browser Object and property functions
 * @return {Object} browser
*/
export default class Browser {
  constructor() {
    this.driver = null;
    this.sessionId = null;
  }

  async init(browserCaps) {
    this.driver = await new Builder()
      .usingServer(SERVER)
      .withCapabilities(browserCaps)
      .build();

    this.driver.manage().setTimeouts({ implicit: 10000 });
    const session = await this.driver.getSession();
    this.sessionId = session.id_;

    await this.navigate();
  }

  async navigate() {
    await this.driver.get(BASE_URL);
  }

  async setCookie(cookie) {
    await this.driver.manage().addCookie(cookie, '/', BASE_URL);
  }

  async deleteAllCookies() {
    await this.driver.manage().deleteAllCookies();
  }

  async quit() {
    await this.driver.quit();
  }
}
