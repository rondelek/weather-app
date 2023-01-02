import React from "react";
import "./App.css";
import ButtonsTop from "./components/ButtonsTop";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";

function App() {
  return (
    <div className="mx-auto max-w-screen-[1024px] py-8 px-5 sm:px-20 bg-gradient-to-br from-cyan-500 to-blue-500">
      <ButtonsTop />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast />
    </div>
  );
}

export default App;
