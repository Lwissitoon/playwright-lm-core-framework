import { test, expect } from './project1.fixture';

test.describe('Project 1 - Student Login Suite', () => {
  
  test.beforeEach(async ({ project1App, envConfig }) => {
    // Structural elements destructured from hybrid fixture execution parameters
    await project1App.loginPage.navigateTo(envConfig.project1.url);
  });

  test('Should login in to a student site', async ({ project1App, envConfig, helpers }) => {
    const uniqueFakeUserMail = helpers.generateRandomEmail();
    
    // Smooth execution over encapsulated lazy loaded pages layer
    await project1App.loginPage.login(envConfig.project1.user, envConfig.project1.pass);
    
    // Explicit visibility verification via page factory exposure layer
    await expect(project1App.loginPage.Message).toBeVisible();
  });
});