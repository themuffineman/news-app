// proxyServer.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3002;

app.use(cors());

app.get('/api/proxy', async (req, res) => {
  const { websiteUrl } = req.query;

  try {
    const response = await axios.get(websiteUrl);
    const html = response.data;

    // Use Cheerio to parse the HTML
    const $ = cheerio.load(html);

    // Extract the favicon URL
    const faviconLink = $('link[rel="icon"], link[rel="shortcut icon"]').attr('href');

    if (faviconLink) {
      const completeFaviconUrl = new URL(faviconLink, websiteUrl).toString();
      res.json({ faviconUrl: completeFaviconUrl });
    } else {
      res.json({ error: 'No favicon found for the website.' });
    }
  } catch (error) {
    console.error('Error in proxy server:', error.message);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
