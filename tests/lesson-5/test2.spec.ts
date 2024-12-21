import { test, expect } from "@playwright/test";

test("Buying products", async ({ page }) => {
    await test.step("Navigate to Product page", async () => {
        await page.goto("https://material.playwrightvn.com/")
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    })

    await test.step("Add products to list", async () => {
        await page.locator("//button[@data-product-id='1']").click({clickCount: 2});
        await page.locator("//button[@data-product-id='2']").click({clickCount: 3});
        await page.locator("//button[@data-product-id='3']").click();
    })
});