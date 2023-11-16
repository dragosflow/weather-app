import React from 'react';
import SearchBar from './components/SearcBar';
import TitleText from './components/TitleText';
function App() {
  return (
    <div>
      <div className="fixed w-screen h-screen bg-cover blur-sm bg-center bg-[url('/Users/dragosflorea/Projects/weather-app/src/background.jpg')]" >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className='flex flex-col items-center justify-center'>
          <TitleText/>
        <div className='flex mx-auto mt-10'>
          <SearchBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
