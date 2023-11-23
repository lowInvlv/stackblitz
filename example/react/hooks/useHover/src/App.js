import useHover from "../hook/useHover";
import "./styles.css";

export default function App() {
  const [hoverRef, isHovering] = useHover();

  return (
    <div className="App">
      <h1>React useHover hook</h1>
      <div ref={hoverRef}>{isHovering ? "Hovering" : "Not hovering"}</div>
    </div>
  );
}
