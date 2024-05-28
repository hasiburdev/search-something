import puppeteer from "puppeteer";

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    userDataDir: "./temp",
  });

  const page = await browser.newPage();

  await page.goto("duckduckgo.com");

  await browser.close();
};

main().catch(console.error);
