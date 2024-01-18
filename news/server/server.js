// your-server/server.js
const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

app.use(cors());

const app = express();
const port = 3001;

app.get('/api/fetchFavicon', async (req, res) => {
    const websiteUrl = req.query.websiteUrl;

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(websiteUrl, { waitUntil: 'domcontentloaded' });

        const faviconLink = await page.$eval('link[rel="icon"], link[rel="shortcut icon"]', el => el.getAttribute('href'));

        await browser.close();

        if (faviconLink) {
            const completeFaviconUrl = new URL(faviconLink, websiteUrl).toString();
            res.json({ faviconUrl: completeFaviconUrl });
        } else {
            res.json({ error: 'No favicon found for the website.' });
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
