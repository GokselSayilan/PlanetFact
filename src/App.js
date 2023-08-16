import PlanetApp from "./Components/PlanetApp/PlanetApp";
import { PlanetProvider } from "./Context/PlanetContext";
import 'animate.css';

function App() {
  return (
    <PlanetProvider>
      <div>
        <PlanetApp />
      </div>
    </PlanetProvider>
  );
}

export default App;
