
const Weather = (props) => {
   const { data } = props;

   return (
      <ul>
         <li>{data.name}</li>

      </ul>
   );
};

export default Weather;