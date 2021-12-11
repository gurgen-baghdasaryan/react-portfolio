import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import Portfolio from "./components/Portfolio/Portfolio"
import Review from "./components/Review/Review"
import Works from "./components/Works/Works"

import "../src/app.scss"


function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="app">
      <NavBar  menu={menu} setMenu={setMenu}/>
      <div className="sections">
        <Home />
        <Portfolio />
        <Works />
        <Review />
        <Contact />

      </div>
    </div>
  );
}

export default App;
