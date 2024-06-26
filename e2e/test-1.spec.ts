import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Location Lookup' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('shire');
  await page.getByRole('button', { name: 'Check data' }).click();
  await page.getByRole('button', { name: 'Look up Location Page' }).click();
  await page.getByRole('button', { name: 'Look up Location Page' }).click();
  await page.getByRole('button', { name: 'Look up Location Page' }).click();
  await page.goto('http://localhost:3000/');
});