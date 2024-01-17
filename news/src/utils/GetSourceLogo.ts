const puppeteer = require('puppeteer');

async function fetchFavicon(url:string) {

    const websiteUrl = `https://www.${url}`;
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Navigate to the website
        await page.goto(websiteUrl, { waitUntil: 'domcontentloaded' });

        // Extract the favicon link from the DOM
        const faviconLink = await page.$eval('link[rel="icon"], link[rel="shortcut icon"]', el => el.getAttribute('href'));

        await browser.close();

        if (faviconLink) {
            const completeFaviconUrl = new URL(faviconLink, websiteUrl).toString();
            return completeFaviconUrl;
        } else {
            return null;
        }
    } catch (error: any) {
        console.error('Error:', error.message);
        return null;
    }
}

module.exports = fetchFavicon;
