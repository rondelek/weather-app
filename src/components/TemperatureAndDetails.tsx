import WeatherImage from "../elements/WeatherImage";
import DetailsOne from "./DetailsOne";
import DetailsTwo from "./DetailsTwo";

export default function TemperatureAndDetails({ weather }: any) {
  return (
    <div>
      <div className="md:grid grid-cols-3 items-center justify-center text-white">
        <div className="md:flex hidden">
          <WeatherImage weather={weather} />
        </div>
        <div className="text-8xl text-center flex justify-center">
          {Math.floor(weather.temp)}°
        </div>
        <div className="hidden lg:flex flex-col justify-around h-full">
          <DetailsOne weather={weather} />
        </div>
      </div>
      <div className="flex flex-col justify-center sm:text-l text-sm py-12 gap-8">
        <div className="lg:hidden flex justify-center gap-8">
          <DetailsOne weather={weather} />
        </div>
        <div className="flex justify-center gap-8">
          <DetailsTwo weather={weather} />
        </div>
      </div>
    </div>
  );
}
