import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';

import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu"

import "../src/app.scss"


function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="app">


 
        <BrowserRouter>
          <NavBar menu={menu} setMenu={setMenu} />
          <Menu menu={menu} setMenu={setMenu} />

          <Main />
        </BrowserRouter>
     

    </div>
  );
}

export default App;
