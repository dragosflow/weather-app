import axios from "axios";
    
async function getWeatherData(city: string) {
  const apiKey = process.env.REACT_APP_API_KEY;

  try {
    const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;
    const response = await axios.get(url, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });
    return response.data;
  } catch (error: any) {
    return null;
  }
}



export default getWeatherData;