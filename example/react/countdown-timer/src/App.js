import CountDown from "../component/CountDown";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Countdown timer</h1>
      <CountDown hours={1} minutes={45} />
    </div>
  );
}
