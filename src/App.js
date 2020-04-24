import React from "react";

import "./App.scss";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import IndexMain from "./Components/IndexMain";
import AboutMe from "./Components/AboutMe";
import { Route, Switch, BrowserRouter } from "react-router-dom";
/* import ContactForm from "./Components/ContactForm"; */
class App extends React.Component {
  render() {
    return (
      <BrowserRouter className="browser-router">
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/">
              <IndexMain />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
          </Switch>
          <Footer className="footer" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
