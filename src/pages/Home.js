import React, { useState } from 'react';
import Weather from '../components/Weather';

const Home = () => {
   const [city, setCity] = useState('');
   const [data, setData] = useState({});
 
   const displayWeather = (e) => {
      e.preventDefault();

      const apiKey = '38927430cea36d378172a1106e55c374';
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`)
         .then((res) => res.json())
         .then((data) => {
            setData(data);
            });
   };

   return (
      <div className="container">
         <form>
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
            <input type="submit" value="Valider" onClick={displayWeather}/>
         </form>
         <div className="weather">
            { data.name && <Weather data={data} />}
         </div>
      </div>
   );
};

export default Home;