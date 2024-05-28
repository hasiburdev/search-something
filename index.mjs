import puppeteer from "puppeteer";

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    userDataDir: "./temp",
  });

  const page = await browser.newPage();

  await page.goto("https://duckduckgo.com/");

  await page.waitForSelector("#searchbox_input");

  await page.type("#searchbox_input", "puppeteer", {
    delay: 100,
  });

  await page.keyboard.press("Enter");

  await page.waitForSelector(".react-results--main", { timeout: 10000 });

  const titles = await page.evaluate(() => {
    const elements = document.querySelectorAll(
      "[data-testid='result-title-a']"
    );
    return Array.from(elements).map((element) => element.textContent);
  });

  console.log(titles);

  await browser.close();
};

main().catch(console.error);
