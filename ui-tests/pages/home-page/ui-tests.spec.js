import Browser from '../../libs/browser';
import { setup, teardown } from '../../libs/utils/test-helper';

describe('Home Page Tests', function() {
  let browser;

  beforeEach(async function() {
    browser = new Browser();
    await setup(browser);
  });

  afterEach(async function() {
    await teardown(browser);
  });

  it('should login successfully with correct credentials', async () => {

  });

});
