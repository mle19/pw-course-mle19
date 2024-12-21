import { test, expect } from "@playwright/test";


test("Add todo list", async ({ page }) => {
    await test.step("Navigate to Todo page", async () => {
        await page.goto("https://material.playwrightvn.com/")
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    })

    await test.step("Add 100 items to Todo list", async () => {
        for(let i = 1; i<=100; i++){
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    })

    await test.step("Delete items so le on Todo list", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for(let i = 1; i<=100; i++){
            if(i % 2 !== 0){
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();   
            }
        }
    })
});