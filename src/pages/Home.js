import React, { useState } from 'react';
import Weather from '../components/Weather';

const Home = () => {
   const [city, setCity] = useState('');
   const [data, setData] = useState([]);
 
   const displayWeather = (e) => {
      e.preventDefault();

      
      const apiKey = '38927430cea36d378172a1106e55c374';
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric&lang=fr`)
         .then((res) => res.json())
         .then((data) => {
            setData(data);
            console.log(data);
            });
   }

   return (
      <div className="home">
         <form>
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
            <input type="submit" value="Valider" onClick={displayWeather}/>
         </form>
         <Weather data={data}/>
      </div>
   );
};

export default Home;