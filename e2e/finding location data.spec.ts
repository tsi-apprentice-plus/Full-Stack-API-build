import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('button 3').click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Shire');
  await page.getByRole('button', { name: 'Check data' }).click();
  await page.getByRole('button', { name: 'Look up Location Page' }).click();
  await expect(page.getByRole('paragraph')).toContainText('Name: Shire Location\'s Description:Home of the hobbits, quaint Location\'s danger:1');
});