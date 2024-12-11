
// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({page}) => {
    await page.goto("http://localhost:3000");
    await expect(page).toHaveTitle(/Next.js Test Bed/)
})

test("Testing user page", async ({page}) => {

await page.goto('http://localhost:3000/users');
await page.getByText('AdamBobCarlDavidEthanFlora').click();
await page.getByRole('button', { name: 'Add +' }).click();
await page.getByRole('button', { name: 'Add +' }).click();
await page.getByText('test 1733923763549').click();
})