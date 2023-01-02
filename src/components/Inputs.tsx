import React from "react";
import Input from "../elements/Input";

import { IconButton } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Inputs() {
  return (
    <div className="flex py-4">
      <div className="flex w-3/4 items-center py-8">
        <Input />
        <IconButton type="button" sx={{ marginLeft: ".5rem" }}>
          <LocationOnOutlinedIcon className="text-white" />
        </IconButton>
      </div>
      <div className="flex items-center justify-end w-1/4 text-white text-xl">
        <button className="hover:scale-150 duration-500">°C</button>
        <p className="px-2">|</p>
        <button className="hover:scale-150 duration-500">°F</button>
      </div>
    </div>
  );
}
