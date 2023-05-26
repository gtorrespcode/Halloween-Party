// eslint-disable-next-line no-unused-vars
import Home from "./components/Home";
import Nav from "./components/global/Nav";
import Call from "./components/Call";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Games from "./components/Games";
import Invite from "./components/Invite";
import Developers from "./components/Developers";
import { NavProvider } from "./contexts/NavContext";

function App() {
  return (
    <div className="bg-background">
      <NavProvider>
        <Nav />
        <Home />
        <Call />
        <Gallery />
        <Menu />
        <Games />
        <Invite />
        <Developers />

      </NavProvider>
    </div>
  );
}

export default App;
