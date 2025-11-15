import {test, expect} from '@playwright/test';

test('Assertion Practice', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.getByTestId("login-button")).toHaveCount(1);
    await expect(page.getByTestId("login-button")).toBeEnabled();
    await expect(page.getByTestId("login-button")).not.toBeDisabled();
    await expect(page.getByTestId("login-button")).toBeVisible();
    await expect(page.getByTestId("login-button")).not.toBeHidden();
    await expect(page.getByTestId("login-button")).toHaveText('Login');
    await expect(page.getByTestId("login-button")).toHaveAttribute('name', 'login-button');
    await expect(page.getByTestId("login-button")).toHaveId('login-button');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    await expect(page).not.toHaveTitle('Google');


});