import "./App.css";
import Counter from "./components/Counter";
import { Plus } from "./components/Icons/Plus";
import SingleLight from "./components/SingleLight";
import { Text } from "./components/Text";

function App() {
  return (
    <div>
      <nav className="nav">
        <Text>0 bulbs</Text>
        <Counter text="rows" />
        <Counter text="columns" />
      </nav>
      <SingleLight />
    </div>
  );
}

export default App;
