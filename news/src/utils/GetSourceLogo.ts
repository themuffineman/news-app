

async function fetchFavicon() {

    // const websiteUrl = `https://www.${siteUrl}`;
    const websiteUrl = 'https://rapidapi.com/';

    try {
        const response = await fetch(websiteUrl, { redirect: 'follow' });
        const finalUrl = response.url;  // Get the final URL after following redirects
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const faviconLink = doc.querySelector('link[rel="icon"]')?.getAttribute('href');
        if (faviconLink) {
            const completeFaviconUrl = new URL(faviconLink, finalUrl).toString();
            console.log('Favicon URL:', completeFaviconUrl);
        } else {
            console.log('No favicon found for the website.');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchFavicon()

export default fetchFavicon;
