import { useState } from "react";
import {  Route, Switch } from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu"
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
      <main>
      <NavBar menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
        <Switch>
         
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/works" component={Works} />
          <Route path="/Review " component={Review} />
          <Route path="/contacts" component={Contact} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
