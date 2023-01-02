import React from "react";
import { formatToLocalTime } from "../services/weatherService";

export default function TimeAndLocation({ weather }: any) {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="font-light">{formatToLocalTime(weather.dt)}</div>
      <h1 className="text-5xl py-10">{weather.name}</h1>
    </div>
  );
}
