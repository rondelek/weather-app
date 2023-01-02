import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

export default function WeatherImage({ weather }: any) {
  return (
    <div className="mx-auto">
      <img src={iconUrlFromCode(weather.icon)} alt="" />
    </div>
  );
}
