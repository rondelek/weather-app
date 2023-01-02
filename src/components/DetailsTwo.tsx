import Detail from "../elements/Detail";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function DetailsTwo() {
  return (
    <>
      <Detail icon={<WbSunnyIcon />} title={"Rise:"} state={"5:34"} />
      <Detail icon={<WbTwilightIcon />} title={"Set:"} state={"23:12"} />
      <Detail icon={<ArrowUpwardIcon />} title={"High:"} state={"23°"} />
      <Detail icon={<ArrowDownwardIcon />} title={"Low:"} state={"16°"} />
    </>
  );
}
