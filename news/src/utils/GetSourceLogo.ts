

async function fetchFavicon(siteUrl:string) {

    const websiteUrl = `https://www.${siteUrl}`;

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
            return completeFaviconUrl
        } else {
            console.log('No favicon found for the website.');
        }
    } catch (error: any) {
        console.error('Error:', error.message);
    }
}



export default fetchFavicon;
