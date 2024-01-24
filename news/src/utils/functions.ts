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


export const getSources = async function(){

    const apiKey = '2n8wA4vBFQwSPQh6XUjf6qKlzgoObCfbWC7irZqX'

    try{
      const rawSourceData = await fetch(`https://api.thenewsapi.com/v1/news/sources?api_token=${apiKey}&language=en`)
      const jsonSourcesData = await rawSourceData.json()
      const sourcesData = jsonSourcesData.data
      const reducedSourcesData = sourcesData.slice(0,24)
      return reducedSourcesData
    }
    catch(error){
      console.log('Error fetching sources data:', error)
      throw new Error('Failed to fetch sources data');
    }
  }

export const getSourcesFavicon = async function(url: string) {
    try {
      const websiteUrl = `https://www.${url}`;
      const proxyUrl = `http://localhost:3002/api/proxy?websiteUrl=${encodeURIComponent(websiteUrl)}`;
      
      const response = await fetch(proxyUrl);
      const data = await response.json();
  
      return data.faviconUrl;
    } catch (error) {
      console.error('Error fetching data from proxy server:', error);
      throw new Error('Failed to fetch favicon');
    }
  };
  
  