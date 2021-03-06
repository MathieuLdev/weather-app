import React, { useState } from 'react';
import apiKey from '../components/Api';
import { isEmpty } from '../components/Utils';
import Weather from '../components/Weather';

const Home = () => {
   let [city, setCity] = useState('');
   const [data, setData] = useState();

 
   const displayWeather = (e) => {
      e.preventDefault();
      setData();
      if (city === '') {
         document.querySelector('.empty').classList.add('active');
         document.querySelector('.weather').classList.remove('active');
      } else {         
         document.querySelector('.weather').classList.add('active');
         document.querySelector('.empty').classList.remove('active');


         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric&lang=fr`)
         .then((res) => res.json())
         .then((data) => {
            setData(data);
         });
         setCity('');
      };
   }

   return (
      <div className="container">
         <p className="empty">Veuillez saisir une ville</p>
         <form noValidate>
            <input type="text" placeholder="City" required value={city} onChange={(e) => setCity(e.target.value)}/>
            <input type="submit" value="Valider" onClick={displayWeather}/>
         </form>
         <div className="weather">
            { !isEmpty(data) && data ? <Weather data={data} /> : ""}
         </div>
      </div>
   );
};

export default Home;