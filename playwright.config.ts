import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //globalTimeout: 10000,
  //timeout:90000,

  // expect:{
  //   timeout:20000
  // },
  
  globalSetup:require.resolve('./global.setup.ts'),
  globalTeardown:require.resolve('./global.teardown.ts'),

  //timeout:50000,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 6,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'allure-playwright',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    //baseURL:'https://testautomationpractice.blogspot.com/',
    // headless:false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    // browserName:'firefox',
    // testData:{
    //   url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    //   username:'Admin',
    //   password:'admin123',
    // }
    //actionTimeout:10000,
    //navigationTimeout:1000
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name:'setup DB',
    //   testMatch:'global.setup.ts',
    //   teardown:'clean DB'
    // },
    // {
    //   name:'chromium',
    //   use:{ ...devices['Desktop Chrome'] },
    //   dependencies:['setup DB']
    // },
    // {
    //   name:'firefox',
    //   use:{ ...devices['Desktop Firefox'] },
    //   dependencies:['setup DB']
    // },
    // {
    //   name:'clean DB',
    //   testMatch:'global.teardown.ts'
    // },

    // {
    //   name:'setup',
    //   use: { ...devices['Desktop Chrome'] },
    //   testMatch:'tests/login.setup.ts' //Code contains to login and save the storage state
    // },
    // {
    //   name:"Store Login State",
    //   use:{
    //     ...devices['Desktop Chrome'],
    //     storageState:"StorageState1.json", //storage state global
    //   },
    //   dependencies:['setup'] //Ensures set runs before tests or test suite
    // }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
