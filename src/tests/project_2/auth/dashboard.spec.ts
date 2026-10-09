import { test, expect } from '../project2.fixture';

test.describe('Project 2 - Secure Dashboard Portal', () => {

  test('Should render active profile details immediately', async ({ page }) => {
    // Navigating straight to the protected dashboard page
    await page.goto('https://proyecto2.com'); 
    
    await expect(page.locator('#user-profile-widget')).toBeVisible();
  });
});
