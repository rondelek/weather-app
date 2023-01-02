import Detail from "../elements/Detail";

import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";

export default function DetailsOne({ weather }: any) {
  return (
    <>
      <Detail
        icon={<DeviceThermostatIcon />}
        title={"Real feel:"}
        state={Math.floor(weather.feels_like) + "°"}
      />
      <Detail
        icon={<OpacityIcon />}
        title={"Humidity:"}
        state={Math.floor(weather.humidity) + "%"}
      />
      <Detail
        icon={<AirIcon />}
        title={"Wind:"}
        state={Math.floor(weather.speed) + "km/h"}
      />
    </>
  );
}
