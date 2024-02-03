import axios from "axios";
import { useEffect, useState } from "react";

function WeatherCard() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const weather = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        const fetchdata = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,precipitation`
        );
        setWeatherData(await fetchdata.data.current);
      });
    };
    weather();
  }, []);
  console.log(weatherData);
  return (
    <div>
      <h1>{weatherData.time}</h1>
      <h1>{weatherData.temperature_2m}</h1>
    </div>
  );
}

export default WeatherCard;
