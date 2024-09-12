import test, { expect } from '../fixtures/basePage';
import Config from '../utils/config';

test.beforeEach(async ({ page }) => await page.goto(`${Config.BaseUrl}`));



test('Add product to basket', async ({header, homepage, searchResults, page }) => {
  await homepage.isPresent();
  await homepage.acceptCookieBanner();
  await header.searchForProduct("Smart phone");
  
});
