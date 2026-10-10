import { EnvConfig } from '../../../config/env.config';
import { test, expect } from '../project2.fixture';

test.describe('Project 2 - Secure Dashboard Portal', () => {

  test('Should render active profile details immediately', async ({ page }) => {
    // Navigating straight to the protected dashboard page
    await page.goto(EnvConfig.project2.url); 
    
    await expect(page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a/i')).toBeVisible();
  });
});
