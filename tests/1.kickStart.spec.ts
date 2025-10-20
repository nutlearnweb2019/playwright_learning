import {chromium, test} from '@playwright/test';

test('Kick start with Playwright', async ({page})=> {
    
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    
    await page.goto('https://www.google.com');
    await page.getByRole('button', { name: 'แอป Google' }).click();

    console.log('My first test')
});

test('My second test', async ({page}) => {
    console.log('Second test');
});