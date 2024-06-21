import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('button 3').click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Blah');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Check data' }).click();
  await page.getByRole('button', { name: 'Look up Location Page' }).click();
  await expect(page.getByRole('heading')).toContainText('Data Not Found');
});