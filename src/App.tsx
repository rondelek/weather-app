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
  const [query, setQuery] = useState<object>({ q: "warsaw" });
  const [units, setUnits] = useState("metric");
  // const [weather, setWeather] = useState<any>(null);

  const { weather, setWeather } = useContext(WeatherContext);
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data: any) =>
        setWeather(data)
      );
    };

    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <div className="mx-auto max-w-screen-[1024px] py-8 px-5 sm:px-20 bg-gradient-to-br from-cyan-500 to-blue-500">
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
