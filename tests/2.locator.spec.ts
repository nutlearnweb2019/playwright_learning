import {test} from '@playwright/test';

test('Practice of locator method', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    // Xpath
    await page.locator("//input[@name='user-name']").fill('standard_user');
    // CSS Selector: id
    //await page.locator('input#password').fill('secret_sauce');
    // CSS Selector: class
    //await page.locator(`.submit-button`).click();
    await page.locator("input[value='Login']").click();
    await page.locator("text='Sauce Labs Backpack'").click();
    //await page.locator("id=add-to-cart-sauce-labs-backpack").click();
    await page.locator("data-test=add-to-cart-sauce-labs-backpack").click();
});