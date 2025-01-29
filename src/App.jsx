import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import SingleLight from "./components/SingleLight";
import { Text } from "./components/Text";
import Grid from "./components/Grid";
function App() {
  const [count, setCount] = useState({
    rows: 0,
    columns: 0,
  });
  const handleCounterChange = (identifier, fn, value) => {
    setCount((prevCount) => ({
      ...prevCount,
      [identifier]: fn(value),
    }));
  };

  const incrementRowCount = () =>
    handleCounterChange("rows", (x) => x + 1, count.rows);
  const decrementRowCount = () =>
    handleCounterChange("rows", (x) => Math.max(0, x - 1), count.rows);

  const incrementColumnCount = () =>
    handleCounterChange(
      "columns",
      (x) => limitNumberWithinRange(x + 1, 0, 9),
      count.columns
    );
  const decrementColumnCount = () =>
    handleCounterChange(
      "columns",
      (x) => limitNumberWithinRange(x - 1, 0, 9),
      count.columns
    );

  function limitNumberWithinRange(num, min, max) {
    const MIN = min;
    const MAX = max;
    const parsed = parseInt(num);
    return Math.min(Math.max(parsed, MIN), MAX);
  }
  const totalBulbs = count.columns * count.rows;
  const lights = Array.from({ length: totalBulbs }, (_, index) => index);
  return (
    <div>
      <nav className="nav">
        <Text>{totalBulbs} bulbs</Text>
        <Counter
          key={"rows"}
          text="rows"
          count={count.rows}
          onCounterPlusChange={incrementRowCount}
          onCounterMinusChange={decrementRowCount}
        />
        <Counter
          key={"columns"}
          text="columns"
          count={count.columns}
          onCounterPlusChange={incrementColumnCount}
          onCounterMinusChange={decrementColumnCount}
        />
      </nav>
      <Grid col={count.columns} row={count.rows}>
        {lights.map((light, index) => (
          <SingleLight key={index} />
        ))}{" "}
      </Grid>
    </div>
  );
}

export default App;
