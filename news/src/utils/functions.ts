export const getheadlines = async function() {
    const apiKey = '25dc93868aa84bf5a8da61e33e2a7b3f';
  
    try {
      const result = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
      const jsonResult = await result.json();
  
      if (jsonResult.status === 'ok') {
        return jsonResult.articles[0];
      } else {
        throw new Error(`API error: ${jsonResult.status}`);
      }
    } catch (error) {
      console.error('Error fetching headline news:', error);
      throw new Error('Failed to fetch headline news');
    }
  };
  