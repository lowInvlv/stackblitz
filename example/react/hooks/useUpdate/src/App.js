import useUpdate from "../hooks/useUpdate";
import "./styles.css";

export default function App() {
  const update = useUpdate();

  return (
    <div className="App">
      <h1>React useUpdate hook</h1>
      <div>Time: {Date.now()}</div>
      <button onClick={update}>Update</button>
    </div>
  );
}
