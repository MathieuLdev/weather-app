import { useEffect } from 'react';

const Weather = () => {

   const key = '38927430cea36d378172a1106e55c374';

   useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${key}&units=metric&lang=fr`)
         .then((res) => res.json())
         .then((data) => {
         console.log(data);
            })
         }, [])
 
   return (
      <div>
         
      </div>
   );
};

export default Weather;