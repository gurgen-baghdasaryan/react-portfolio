import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Home from "../Home/Home"
import Contact from "../Contact/Contact"
import Portfolio from "../Portfolio/Portfolio"
import Review from "../Review/Review"
import Works from "../Works/Works"

const Main = () => {
  return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/works" component={Works} />
          <Route path="/Review " component={Review} />
          <Route path="/contacts" component={Contact} />
        </Switch>
      </main>
  );
};

export default Main;
