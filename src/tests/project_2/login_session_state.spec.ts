import { test, expect } from './project2.fixture';

test.describe('Project 2 - Authenticated Operations Suite', () => {
  
  test('Should open dashboard profile immediately bypassing login views', async ({ project2App, page }) => {
    // Navigating here automatically logs the user in because the fixture carries the context token
    await page.goto('https://proyecto2.com'); 
    
    // Assert directly against the secured system state
    await expect(page.locator('#welcome-banner')).toBeVisible();
  });
});
