import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Game from "pages/Game";
import Home from "pages/Home";
import HTTP404 from "pages/_404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route component={HTTP404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
