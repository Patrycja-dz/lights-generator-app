import { useState } from "react";
import lightBulbTurnedOff from "/images/light-bulb-off.svg";
import lightBlueTurnedOn from "/images/light-blue.svg";
const SingleLight = () => {
  const [isLightOn, setIsLightOn] = useState(true);
  const handleBulbClick = () =>
    setIsLightOn((prevLightState) => !prevLightState);

  const imageSrc = isLightOn ? lightBlueTurnedOn : lightBulbTurnedOff;
  return <img src={imageSrc} alt="Single light" onClick={handleBulbClick} />;
};

export default SingleLight;
