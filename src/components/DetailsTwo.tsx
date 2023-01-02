import Detail from "../elements/Detail";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { formatToLocalTime } from "../services/weatherService";

export default function DetailsTwo({ weather }: any) {
  return (
    <>
      <Detail
        icon={<WbSunnyIcon />}
        title={"Rise:"}
        state={formatToLocalTime(weather.sunrise, "hh:mm a")}
      />
      <Detail
        icon={<WbTwilightIcon />}
        title={"Set:"}
        state={formatToLocalTime(weather.sunset, "hh:mm a")}
      />
      <Detail
        icon={<ArrowUpwardIcon />}
        title={"High:"}
        state={Math.floor(weather.temp_max) + "°"}
      />
      <Detail
        icon={<ArrowDownwardIcon />}
        title={"Low:"}
        state={Math.floor(weather.temp_min) + "°"}
      />
    </>
  );
}
