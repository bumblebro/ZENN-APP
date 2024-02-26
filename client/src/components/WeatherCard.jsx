import axios from "axios";
import { useEffect, useState } from "react";

function WeatherCard() {
  const [weatherData, setWeatherData] = useState({});
  const [currentLocation, setCurrentLocation] = useState({});
  const [currentTime, setCurrentTime] = useState({});

  useEffect(() => {
    const weather = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        const fetchdata = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dc5bfbbb3ad424b4740f45edd72da0a2`
        );
        const current = await axios.get(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=dc5bfbbb3ad424b4740f45edd72da0a2`
        );
        setCurrentLocation({
          country: current.data[0].country,
          state: current.data[0].state,
          city: current.data[0].name,
        });

        const data = await fetchdata.data;
        console.log(data);
        setWeatherData({
          temperature: data.main.temp,
          weather: data.weather[0].main,
          icon: data.weather[0].icon,
        });
        console.log(data.weather[0].icon);
      });
    };
    weather();
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      const date = new Date();
      setCurrentTime({
        time: date.toLocaleTimeString(),
        date: date.toDateString(),
      });
    }, 1000);
    return () => clearInterval(time);
  }, []);

  return (
    <div
      className={`flex items-center justify-between gap-3 bg-black border-solid border-[#1f1f1f] border-4 rounded-3xl  px-6 py-4 text-[#ffffff] hover:border-[#6868686f] md:w-6/12  lg:w-full h-full `}
    >
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-2">
          <h1 className="text-4xl  font-semibold">
            {(weatherData.temperature - 273.15).toFixed()}
          </h1>
          <div className="text-4xl ">°</div>
          <div className="flex flex-col justify-end font-light">
            <h1>{weatherData.weather}</h1>
          </div>
        </div>
        <h1 className="font-extralight">
          {currentLocation.city}, {currentLocation.state}
        </h1>
        <div className="flex sm:flex-row flex-col gap-2 sm:gap-4">
          <h1>{currentTime.time}</h1> <h1>{currentTime.date}</h1>
        </div>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        alt="whether image"
      />
    </div>
  );
}

export default WeatherCard;
