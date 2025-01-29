import { useState } from "react";
import lightBulbTurnedOff from "/images/light-bulb-off.svg";
import lightBlue from "/images/light-blue.svg";
import lightGreen from "/images/light-green.svg";
import lightOrange from "/images/light-orange.svg";
import lightPink from "/images/light-pink.svg";
import lightRed from "/images/light-red.svg";
import lightYellow from "/images/light-yellow.svg";

const SingleLight = () => {
  const [isLightOn, setIsLightOn] = useState(true);
  const lights = [
    lightBlue,
    lightGreen,
    lightOrange,
    lightPink,
    lightRed,
    lightYellow,
  ];
  const getRandomIndex = () => Math.floor(Math.random() * lights.length);
  const lightIndex = getRandomIndex();
  const imageSrc = isLightOn ? lights[lightIndex] : lightBulbTurnedOff;

  const handleBulbClick = () =>
    setIsLightOn((prevLightState) => !prevLightState);

  return <img src={imageSrc} alt="Single light" onClick={handleBulbClick} />;
};

export default SingleLight;
