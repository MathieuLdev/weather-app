
const Weather = (props) => {
   const { data } = props;

   const roundTemp = Math.round(data.main.temp);
   const imgCondition = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

   
   let today = new Date();
   let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
   let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   let dateTime =  Date.parse(date+' '+time);
   let shift = dateTime + data.timezone*1000 - 7200*1000;
   let newDate = new Date(shift).toLocaleDateString("fr-FR", {
      hour: "numeric",
      minute: "numeric"
   });
  const exactTime = newDate.slice(-5);

   return (
      <ul>
         <li id='city'>{data.name}, {data.sys.country}</li>
         <li id='description'>{data.weather[0].description}</li>
         <li id='temperature'>{roundTemp}°C</li>
         <li id="condition"><img src={imgCondition} alt="condition" /></li>
         <li id='time'>{exactTime}</li>
      </ul>
   );
};

export default Weather;