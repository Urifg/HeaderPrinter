import Navbar from "./components/navbar/Navbar";
import "./app.css";
import RouteTrigger from "./components/routeTrigger/RouteTrigger";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouteTrigger />
    </div>
  );
}

export default App;
