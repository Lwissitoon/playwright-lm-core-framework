import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  reporter: [
    ['line'],
    ['allure-playwright', { outputFolder: 'allure-results', ignoredTests: [/\.setup\./ ]}]
  ],
  projects: [

        {
      name: 'project_1',
      testMatch: /.*project_1\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    // 1. One-time Setup Worker (Stays the same)
    {
      name: 'project_2_setup',
      testMatch: /.*auth\.setup\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    // 2. OPTION A: Unauthenticated Test Profile (No login cookies injected)
    {
      name: 'project_2_anonymous',
      testMatch: /.*project_2\/anonymous\/.*\.spec\.ts/, // Matches files in the anonymous sub-folder
      use: { 
        ...devices['Desktop Chrome'],
        storageState: { cookies: [], origins: [] }, // Explicitly forces a completely clean browser state
      },
    },

    // 3. OPTION B: Authenticated Test Profile (Bypasses Login UI)
    {
      name: 'project_2_auth',
      testMatch: /.*project_2\/auth\/.*\.spec\.ts/, // Matches files in the auth sub-folder
      dependencies: ['project_2_setup'], 
      use: { 
        ...devices['Desktop Chrome'],
        storageState: './src/storage/project_2_auth.json', // Injects global valid cookies
      },
    },
  ],
});
