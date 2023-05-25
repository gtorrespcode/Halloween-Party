// eslint-disable-next-line no-unused-vars
import Home from "./components/Home";
import Nav from "./components/global/Nav";
import Call from "./components/Call";
import { NavProvider } from "./contexts/NavContext";

function App() {
  return (
    <div className="bg-background">
      <NavProvider>
        <Nav />
        <Home />
        <Call />
      </NavProvider>
    </div>
  );
}

export default App;
