import { test, expect } from '@playwright/test';

test('login exitoso', async ({ page }) => {
  await page.context().clearCookies();
  await page.goto('/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('practice');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/secure$/);
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
