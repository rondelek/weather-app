import { useState, useEffect, useContext } from "react";
import "./App.css";
import ButtonsTop from "./components/ButtonsTop";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import WeatherContextProvider, {
  WeatherContext,
} from "./context/SearchContext";

import getFormattedWeatherData from "./services/weatherService";

type Weather = {
  country: string;
  daily: object[];
  dt: number;
  feels_like: number;
  hourly: [];
  humidity: number;
  icon: string;
  lat: number;
  lon: number;
  name: string;
  speed: number;
  sunrise: number;
  sunset: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "61a68b0fe5msh8eb481f12c00d66p10b91ejsn7a0d96f2a546",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const [query, setQuery] = useState<object>({ q: "warsaw" });
  const [units, setUnits] = useState("metric");

  const { weather, setWeather } = useContext(WeatherContext);
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data: any) =>
        setWeather(data)
      );
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) {
      return "bg-gradient-to-br from-cyan-700 to-blue-700";
    }

    switch (weather.icon) {
      case "01d":
        return "bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAY-qyX75IotvFjOIKWgctQ540gEj92Olcf_5i4odzdwrxwk9-30pZCbqMHOCslhNk48I&usqp=CAU')]";
      case "01n":
        return "bg-[url('https://i.ytimg.com/vi/-8hI2RCW-Kg/maxresdefault.jpg')]";
      case "02d":
        return "bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwW9cW2njYw6Jv6GOUG6WX8YbC7061snXj3RpQ6RWD5rc34d2Fod5q8B-3MsJcgLOhZY&usqp=CAU')]";
      case "02n":
        return "bg-[url('https://static.vecteezy.com/system/resources/previews/004/865/250/original/night-blue-sky-background-with-cloud-moon-and-stars-vector.jpg')]";
      case "03d":
      case "03n":
        return "bg-[url('https://thumb.ac-illust.com/18/180dab9b6857311f610eadb1a8af2cbc_t.jpeg')]";
      case "04d":
        return "bg-[url('https://pixahive.com/wp-content/uploads/2021/03/Cloudy-sky-wallpaper-387134-pixahive.jpg')]";
      case "04n":
        return "bg-[url('https://media.istockphoto.com/id/1133588496/photo/mystical-midnight-sky-with-stars-surrounded-by-dramatic-clouds-dark-natural-background-with.jpg?b=1&s=170667a&w=0&k=20&c=3893VqTiz9jXxB1aPYBBJac74V6JaGKVzhJmXJbNqbQ=')]";
      case "05d":
      case "05n":
        return "bg-[url('https://www.freevector.com/uploads/vector/preview/7040/FreeVector-Rain-Background.jpg')]";
      default:
        return "bg-gradient-to-br from-cyan-700 to-blue-700";
    }
  };
  return (
    <div
      className={`mx-auto max-w-screen-[1024px] py-8 px-5 sm:px-20  bg-cover bg-center ${formatBackground()}`}
    >
      <ButtonsTop setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
