import { defineConfig, devices } from '@playwright/test';

/**
 * Cross-browser checks for loading behaviour, layout stability and media components.
 * Runs against the built site (npm run build first; CI builds with MEDIA_TEST_PAGE=1 and
 * synthetic fixtures from scripts/test/fixtures.mjs so galleries and video are covered).
 *
 *   npx playwright test                    all browsers
 *   npx playwright test --project=iphone   one browser
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL: 'http://localhost:4321', trace: 'off' },
  webServer: { command: 'npx astro preview --port 4321', url: 'http://localhost:4321', reuseExistingServer: !process.env.CI },
  projects: [
    { name: 'iphone', use: { ...devices['iPhone 13'] } },
    { name: 'ipad', use: { ...devices['iPad (gen 7)'] } },
    { name: 'android-chrome', use: { ...devices['Pixel 7'] } },
    { name: 'desktop-safari', use: { ...devices['Desktop Safari'] } },
    { name: 'desktop-chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'desktop-firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});
