import { useState } from "react";
import Input from "../elements/Input";

import { IconButton } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Inputs({ setQuery, units, setUnits }: any) {
  const [city, setCity] = useState("");

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsChange = (e: any) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };

  return (
    <div className="flex py-4">
      <div className="flex w-3/4 items-center py-8">
        <Input
          setQuery={setQuery}
          units={units}
          setUnits={setUnits}
          city={city}
          setCity={setCity}
        />
        <IconButton
          type="button"
          onClick={handleLocationClick}
          sx={{ marginLeft: ".5rem" }}
        >
          <LocationOnOutlinedIcon className="text-white" />
        </IconButton>
      </div>
      <div className="flex items-center justify-end w-1/4 text-white text-xl">
        <button
          name="metric"
          className="hover:scale-150 duration-500"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="px-2">|</p>
        <button
          name="imperial"
          className="hover:scale-150 duration-500"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}
