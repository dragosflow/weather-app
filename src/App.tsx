import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearcBar';
import TitleText from './components/TitleText';
import WeatherStats from './components/WeatherStats';
import getWeatherData from './utils/API';
import data from './ro.json'
import {City} from './utils/types'
function App() {

  

  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (selectedCity) {
      const fetchWeatherData = async () => {
        try {
          const response = await getWeatherData(selectedCity.name);
          setWeatherData(response);
        } catch (error) {
          console.error('Eroare la obținerea datelor meteo:', error);
          setWeatherData(null);
        }
      };

      fetchWeatherData();
    }
  }, [selectedCity]);

  const handleCityChange = (city: City) => {
    setSelectedCity(city);
  };




  return (
    <div className='select-none'>
      <div className={`fixed w-screen h-screen bg-cover blur-sm bg-center bg-[url('./assets/images/background.jpg')] z-0`} >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <TitleText/>
        <div className='flex mx-auto mt-10'>
          <SearchBar data={data} onCityChange={handleCityChange} />
        </div>
        { weatherData !== null &&
        <WeatherStats weatherStats={weatherData} cityStats={selectedCity} />}
      </div>
    </div>
  );
};

export default App;
