import React, { createContext, useState } from "react";

type IContextProps = {
  weather: any;
  setWeather: (weather: any) => void;
};

export const WeatherContext = createContext<IContextProps>({} as IContextProps);

export default function WeatherContextProvider(props: any) {
  const [weather, setWeather] = useState<any>(null);
  const value = { weather, setWeather };

  return (
    <WeatherContext.Provider value={value}>
      {props.children}
    </WeatherContext.Provider>
  );
}
