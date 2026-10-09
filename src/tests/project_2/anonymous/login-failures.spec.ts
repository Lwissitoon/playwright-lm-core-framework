import { test, expect } from '../project2.fixture';

test.describe('Project 2 - Anonymous Security Validations', () => {

  test('Should display error banner when providing wrong password', async ({ project2App, envConfig }) => {
    await project2App.loginPage.navigateTo(envConfig.project2.url);
    
    // Intentionally passing bad credentials to trigger the UI reaction
    await project2App.loginPage.login(envConfig.project2.user, 'WrongPassword123!');
    
    // Validation works flawlessly because we are not logged in!
    await expect(project2App.loginPage.errorMessage).toBeVisible();
  });
});
