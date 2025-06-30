import {defineConfig} from "@playwright/test";

export default defineConfig({
    testDir: 'playwright/tests',
    testIgnore: ['src/**/*.test.{js,jsx,ts,tsx}'],   // Jest-Tests auslassen
    use: {
        headless: true,
        //viewport: {width: 1280, height: 720},
        baseURL: 'http://localhost:3000',
    },
});

