import axios from "axios";
    
async function getWeatherData(city: string) {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log('API Key:', apiKey); // Verifică dacă cheia API este prezentă

  try {
    const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;
    console.log('Requesting:', url); // Verifică URL-ul final
    const response = await axios.get(url, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });
    console.log('Response:', response.data); // Verifică răspunsul primit
    return response.data;
  } catch (error: any) {
    console.error('Request failed:', error.message);
    return null; // Returnează null pentru a indica o eroare
  }
}



export default getWeatherData;