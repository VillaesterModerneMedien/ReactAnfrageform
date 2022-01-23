// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppContextProvider } from "../AppContext";
import Slick from "../Steps/Slick.js";
import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <Slick />
    </AppContextProvider>
  );
}

export default App;
