import { DateTime } from "luxon";

const API_KEY = "02465ad39d3bce8393fa4221fcf31ea7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

type Data = {
  coord: { lat: number; lon: number };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  name: string;
  dt: number;
  sys: { country: string; sunrise: number; sunset: number };
  weather: any;
  wind: { speed: number };
};

const getWeatherData = (infoType: string, searchParams: object) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  }).toString();

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data: Data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    icon,
    speed,
  };
};

const formatForecastWeatherHourly = (data: any) => {
  const hourlyForecast = data.list.slice(1, 9).map((d: any) => {
    return {
      title: formatToLocalTime(d.dt, "hh:mm a"),
      temp: d.main.temp,
      icon: d.weather[0].icon,
    };
  });
  return hourlyForecast;
};

const formatForecastWeatherDaily = (data: any) => {
  const dailyForecast: object[] = [];
  for (let i = 0; i < data.list.length; i += 8) {
    let day = {
      title: formatToLocalTime(data.list[i].dt, "ccc"),
      temp: data.list[i].main.temp,
      icon: data.list[i].weather[0].icon,
    };

    dailyForecast.push(day);
  }
  return dailyForecast;
};

const getFormattedWeatherData = async (searchParams: any) => {
  const currentWeather = await getWeatherData("weather", searchParams).then(
    formatCurrentWeather
  );

  const { lat, lon } = currentWeather;

  const hourly = await getWeatherData("forecast", {
    lat,
    lon,
    exclude: "current,daily,minutely,alerts",
    units: searchParams!.units,
  }).then(formatForecastWeatherHourly);

  const daily = await getWeatherData("forecast", {
    lat,
    lon,
    exclude: "current,hourly,minutely,alerts",
    units: searchParams!.units,
  }).then(formatForecastWeatherDaily);

  return {
    ...currentWeather,
    hourly,
    daily,
  };
};

const formatToLocalTime = (
  secs: any,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).toFormat(format);

const iconUrlFromCode = (code: string) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
