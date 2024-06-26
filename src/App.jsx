// eslint-disable-next-line no-unused-vars
import Home from "./components/Home/Home";
import Nav from "./components/global/Nav";
import Call from "./components/Call/Call";
import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import Games from   "./components/Games/Games";
import Invite from "./components/Invite/Invite";
import Developers from "./components/Developers/Developers";
import Footer from "./components/global/Footer";
// import Modal from "./components/global/MovieModal";
import GeneralModal from "./components/global/Modals/GeneralModal";

import { NavProvider } from "./contexts/NavContext";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <div className="bg-background overflow-hidden">
      <NavProvider>
        <ModalProvider>
          <Nav />
          <GeneralModal/>
          <Home />
          <Call />
          <Gallery />
          <Menu />
          <Games />
          <Invite />
          <Developers />
        </ModalProvider>
        <Footer />
      </NavProvider>
    </div>
  );
}

export default App;
