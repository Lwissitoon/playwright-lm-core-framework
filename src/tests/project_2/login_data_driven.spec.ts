import { test, expect } from './project2.fixture';
import { LOGIN_NEGATIVE_SCENARIOS } from './data/login.data';

test.describe('Project 2 - Parameterized Authentication Suite', () => {
  
  test.beforeEach(async ({ project2App, envConfig }) => {
    // Navigate using the centralized configuration fixture
    await project2App.loginPage.navigateTo(envConfig.project2.url);
  });

  // Dynamic Test Case Generation
  for (const scenario of LOGIN_NEGATIVE_SCENARIOS) {
    test(`[${scenario.testId}] Should prevent login: ${scenario.description}`, async ({ project2App }) => {
      
      // Execute the encapsulated workflow from your POM
      await project2App.loginPage.login(scenario.email, scenario.pass);
      
      // Assert against the dynamic data row using the lazy-loaded getter
      await expect(project2App.loginPage.errorMessage).toBeVisible();
      await expect(project2App.loginPage.errorMessage).toHaveText(scenario.expectedError);
    });
  }
});
