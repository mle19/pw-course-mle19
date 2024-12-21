import { test, expect } from "@playwright/test";

test("Login with valid user name and password", async ({ page }) => {
    await test.step("Navigate to Register page", async () => {
        await page.goto("https://material.playwrightvn.com/")
        await page.locator("//a[contains(text(),'Bài học 1: Register Page')]").click();
    })
    await test.step("Input information", async () => {
        await page.locator("//input[@id='username']").fill("My Le")
        await page.locator("//input[@id='email']").fill("tieuthanhmai11@gmail.com")
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//option[text()='Music']").click();
        await page.locator("//select[@id='country']").selectOption({value: "canada"});
        await page.locator("//input[@id='dob']").fill("2000-01-01");
        await page.locator("//input[@id='profile']").setInputFiles("data-test/banhgato.jpeg");
        await page.locator("//textarea[@id='bio']").fill("My Le's description");
        await page.locator("//input[@id='rating']").fill("6");
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("//span[@class='slider round']").click();

    })
    await test.step("Click button register", async () => {
        await page.locator("//button[text()='Register']").click();
    })

   
});
      
    