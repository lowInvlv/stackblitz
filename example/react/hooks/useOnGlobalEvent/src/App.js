import useOnGlobalEvent from "../hook/useOnGlobalEvent";
import "./styles.css";

export default function App() {
  useOnGlobalEvent("mousemove", (e) => {
    console.log(`(${e.x}, ${e.y})`);
  });

  return (
    <div className="App">
      <h1>React useOnGlobalEvent hook</h1>
      <p>Move your mouse around</p>
    </div>
  );
}
