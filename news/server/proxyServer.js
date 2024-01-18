const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3002; // You can choose a different port if needed

app.use(cors());

app.get('/api/proxy', async (req, res) => {
  const { websiteUrl } = req.query;

  try {
    const response = await axios.get(websiteUrl);
    res.json({ data: response.data });
  } catch (error) {
    console.error('Error in proxy server:', error.message);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});