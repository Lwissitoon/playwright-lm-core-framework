import { test, expect } from './project2.fixture';

test.describe('Project 2 - Authentication Workflows Suite', () => {
  
  test.beforeEach(async ({ project2App, envConfig }) => {
    // Structural elements destructured from hybrid fixture execution parameters
    await project2App.loginPage.navigateTo(envConfig.project2.url);
  });

  test('Should block access attempts when checking with non-existent accounts', async ({ project2App, envConfig, helpers }) => {
    const uniqueFakeUserMail = helpers.generateRandomEmail();
    
    // Smooth execution over encapsulated lazy loaded pages layer
    await project2App.loginPage.login(uniqueFakeUserMail, envConfig.project2.pass);
    
    // Explicit visibility verification via page factory exposure layer
    await expect(project2App.loginPage.errorMessage).toBeVisible();
  });
});