import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "../components/Main";
import Header from "../components/common/Header";
import InfoPage from "../components/Info";
import ProjectPage from "../components/Project";
import EightPage from "../components/Eight";
import IdaPage from "../components/Ida";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/info" component={InfoPage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/ida" component={IdaPage} />
        <Route exact path="/eight" component={EightPage} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
}

export default App;
