import { Text } from "./Text";
import { Plus } from "./Icons/Plus";
import Minus from "./Icons/Minus";
import styles from "../components/Counter.module.css";

const Counter = ({
  text,
  count,
  onCounterPlusChange,
  onCounterMinusChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <Text>
        {count}
        <span> {text}</span>
      </Text>
      <nav>
        <Plus onIncrement={onCounterPlusChange} />
        <Minus onDecrement={onCounterMinusChange} />
      </nav>
    </div>
  );
};

export default Counter;
