import { useState } from "react";
import Alert from "../component/Alert";
import "./styles.css";

export default function App() {
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <div className="App">
      <h1>React useTitle hook</h1>
      <button onClick={() => setAlertOpen(!alertOpen)}>Toggle alert</button>
      {alertOpen && <Alert />}
    </div>
  );
}
