import logo from "./logo.svg";
import "./App.css";
import { Essay } from "./components/essay";
import { Feedback } from "./components/feedback";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Feedback />
        <Essay />
      </header>
    </div>
  );
}

export default App;
