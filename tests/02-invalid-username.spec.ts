import { test, expect } from '@playwright/test';

test('username inválido', async ({ page }) => {
  await page.context().clearCookies();
  await page.goto('/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('wrongUser');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByText('Your password is invalid!')).toBeVisible();
});
