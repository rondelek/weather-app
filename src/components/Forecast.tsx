import React from "react";
import ForecastElement from "../elements/ForecastElement";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

export default function Forecast({ weather }: any) {
  return (
    <div className="text-white">
      <HourlyForecast weather={weather} />
      <DailyForecast weather={weather} />
    </div>
  );
}
