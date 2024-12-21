import { test, expect } from "@playwright/test";

test("Add Notes and Search", async ({ page }) => {
    await test.step("Navigate to Personal notes page", async () => {
        await page.goto("https://material.playwrightvn.com/")
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    })

    await test.step("Add 10 Notes", async () => {
        //Note1
        await page.locator("//input[@id='note-title']").fill("Startup Trung Quốc sản xuất hàng loạt robot hình người");
        await page.locator("//textarea[@id='note-content']").fill("Startup Agibot thông báo đã tiến hành sản xuất hàng loạt robot hình người cho mục đích sử dụng chung, sớm hơn đối thủ Tesla vài năm.");
        await page.locator("//button[@id='add-note']").click();

        //Note2
        await page.locator("//input[@id='note-title']").fill("Tượng đất nung hình võ tướng trong mộ Tần Thủy Hoàng");
        await page.locator("//textarea[@id='note-content']").fill("Bức tượng đất sét hiếm gặp hình một vị tướng cấp cao trong quân đội hé lộ cách tổ chức và cấu trúc quân đội Trung Quốc");
        await page.locator("//button[@id='add-note']").click();

        //Note3
        await page.locator("//input[@id='note-title']").fill("Thành công của VinIF là động lực để doanh nghiệp tài trợ cho nhà khoa học");
        await page.locator("//textarea[@id='note-content']").fill("Quỹ đổi mới sáng tạo Vingroup (VinIF) trong 6 năm đã tài trợ cho nhà khoa học Việt hơn 900 tỷ đồng, tạo ra hàng trăm sáng chế, được Thứ trưởng Khoa học và Công nghệ đánh giá là");
        await page.locator("//button[@id='add-note']").click();

        //Note4
        await page.locator("//input[@id='note-title']").fill("Thử nghiệm động cơ 5.000 km/h cho máy bay siêu thanh");
        await page.locator("//textarea[@id='note-content']").fill("Dù nhỏ gọn với đường kính dưới 30 cm, động cơ mới vẫn tạo ra sức đẩy lớn giúp máy bay đạt tốc độ gấp 4 lần âm thanh");
        await page.locator("//button[@id='add-note']").click();

        //Note5
        await page.locator("//input[@id='note-title']").fill("Mỹ xóa sổ thành công ong bắp cày sát thủ");
        await page.locator("//textarea[@id='note-content']").fill("Các nhà khoa học Mỹ tuyên bố xóa sổ ong bắp cày khổng lồ châu Á, đánh dấu chiến thắng hiếm hoi trong công cuộc tiêu diệt côn trùng xâm hại");
        await page.locator("//button[@id='add-note']").click();

        //Note6
        await page.locator("//input[@id='note-title']").fill("Techfest Vĩnh Phúc 2024 kết nối hệ sinh thái quốc gia");
        await page.locator("//textarea[@id='note-content']").fill("Techfest Vĩnh Phúc 2024 với nhiều hoạt động kết nối, trình diễn các sản phẩm khoa học công nghệ, đổi mới sáng tạo tới các nhà đầu tư quốc gia và quốc tế");
        await page.locator("//button[@id='add-note']").click();

        //Note7
        await page.locator("//input[@id='note-title']").fill("SpaceX sắp phóng 2 tàu đổ bộ tư nhân lên Mặt Trăng");
        await page.locator("//textarea[@id='note-content']").fill("Tên lửa Falcon 9 của SpaceX sẽ đưa tàu đổ bộ của công ty Nhật Bản ispace và công ty Mỹ Firefly Aerospace lên Mặt Trăng vào tháng 1 năm sau.");
        await page.locator("//button[@id='add-note']").click();

        //Note8
        await page.locator("//input[@id='note-title']").fill("Nỗi khổ khi bị mất ngủ lâu năm");
        await page.locator("//textarea[@id='note-content']").fill("Thảo dược hỗ trợ giúp an thần, giảm căng thẳng thần kinh lấy lại giấc ngủ ngon mỗi tối");
        await page.locator("//button[@id='add-note']").click();

        //Note9
        await page.locator("//input[@id='note-title']").fill("Quỹ VinIF công bố chương trình tài trợ khoa học công nghệ 2024");
        await page.locator("//textarea[@id='note-content']").fill("Quỹ Đổi mới sáng tạo Vingroup (VinIF) sẽ xét tài trợ cho 7 dự án khoa học công nghệ, hàng trăm học bổng thạc sĩ, tiến sĩ, sau tiến sĩ cùng một số chương trình khác");
        await page.locator("//button[@id='add-note']").click();

        //Note10
        await page.locator("//input[@id='note-title']").fill("TP HCM triển khai các chương trình hỗ trợ đổi mới sáng tạo");
        await page.locator("//textarea[@id='note-content']").fill("TP HCM triển khai các chương trình hỗ trợ đổi mới sáng tạo");
        await page.locator("//button[@id='add-note']").click();
    })

    await test.step("Search a note", async () => {
        await page.locator("//input[@id='search']").fill("VinIF");
        await expect("//*[contains(text(),'Vingroup (VinIF)')]").toBeDefined();
    })
    
});