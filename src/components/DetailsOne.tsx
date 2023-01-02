import Detail from "../elements/Detail";

import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";

export default function DetailsOne() {
  return (
    <>
      <Detail
        icon={<DeviceThermostatIcon />}
        title={"Real feel:"}
        state={"18°"}
      />
      <Detail icon={<OpacityIcon />} title={"Humidity:"} state={"43%"} />
      <Detail icon={<AirIcon />} title={"Wind:"} state={"10km/h"} />
    </>
  );
}
