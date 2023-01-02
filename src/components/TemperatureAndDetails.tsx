import React from "react";
import Detail from "../elements/Detail";
import WeatherImage from "../elements/WeatherImage";
import DetailsOne from "./DetailsOne";
import DetailsTwo from "./DetailsTwo";

export default function TemperatureAndDetails() {
  return (
    <div>
      <div className="md:grid grid-cols-3 items-center justify-center text-white">
        <div className="md:flex hidden">
          <WeatherImage />
        </div>
        <div className="text-8xl text-center flex justify-center">20°</div>
        <div className="hidden lg:flex flex-col justify-around h-full">
          <DetailsOne />
        </div>
      </div>
      <div className="flex flex-col justify-center sm:text-l text-sm py-12 gap-8">
        <div className="lg:hidden flex justify-center gap-8">
          <DetailsOne />
        </div>
        <div className="flex justify-center gap-8">
          <DetailsTwo />
        </div>
      </div>
    </div>
  );
}
