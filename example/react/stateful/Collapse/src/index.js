import Collapse from "../component/Collapse";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Collapsible content</h1>
      <Collapse>
        <h1>Collapsible content</h1>
        <p>Hello world!</p>
      </Collapse>
    </div>
  );
}
