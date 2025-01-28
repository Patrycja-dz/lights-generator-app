import { useState } from "react";
import { Text } from "./Text";
import { Plus } from "./Icons/Plus";
import Minus from "./Icons/Minus";
import styles from "../components/Counter.module.css";

const Counter = ({ text }) => {
  const [count, setCount] = useState(0);
  const handleIncrementCounter = () => setCount((prevCount) => prevCount + 1);
  const handleDecrementCounter = () =>
    setCount((prevCount) => Math.max(prevCount - 1, 0));

  return (
    <div className={styles.wrapper}>
      <Text>
        {count}
        {text}
      </Text>
      <nav>
        <Plus onIncrement={handleIncrementCounter} />

        <Minus onDecrement={handleDecrementCounter} />
      </nav>
    </div>
  );
};

export default Counter;
