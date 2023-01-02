import React from "react";
import Detail from "../elements/Detail";
import WeatherImage from "../elements/WeatherImage";
import DetailsOne from "./DetailsOne";
import DetailsTwo from "./DetailsTwo";

export default function TemperatureAndDetails() {
  return (
    <div>
      <div className="grid grid-cols-3 items-center justify-center text-white">
        <WeatherImage />
        <div className="text-8xl text-center">20°</div>
        <div className="flex flex-col justify-around h-full">
          <DetailsOne />
        </div>
      </div>
      <div className="flex justify-center py-12 gap-8">
        <DetailsTwo />
      </div>
    </div>
  );
}
